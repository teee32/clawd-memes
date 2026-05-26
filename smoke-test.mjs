import { spawn } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const rootUrl = pathToFileURL(`${process.cwd()}/index.html`).href;
const profileDir = await mkdtemp(join(tmpdir(), "clawd-meme-smoke-"));
const port = 9229 + Math.floor(Math.random() * 1000);
const consoleErrors = [];

const { expectedMemes, expectedSources, expectedCodexMemes, expectedCodexSources } = await parseDataCounts(`${process.cwd()}/script.js`);

const chrome = spawn(chromePath, [
  "--headless=new",
  "--no-first-run",
  "--no-default-browser-check",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profileDir}`,
  "about:blank",
]);

chrome.stderr.on("data", () => {});

try {
  const endpoint = await waitForEndpoint(port);
  const tabInfo = await createTab(port, rootUrl);
  const socket = new WebSocket(tabInfo.webSocketDebuggerUrl);
  const client = await createClient(socket);

  await send(client, "Runtime.enable");
  await send(client, "Page.enable");
  await send(client, "Console.enable");
  client.onEvent = (message) => {
    if (message.method === "Runtime.exceptionThrown") {
      consoleErrors.push(message.params.exceptionDetails.text);
    }
    if (message.method === "Console.messageAdded" && message.params.message.level === "error") {
      consoleErrors.push(message.params.message.text);
    }
  };

  await send(client, "Emulation.setDeviceMetricsOverride", {
    width: 1366,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await send(client, "Page.navigate", { url: rootUrl });
  await waitForPageReady(client);

  const initialCards = await evaluate(client, 'document.querySelectorAll("#memeGrid .meme-card").length');
  assert(initialCards === expectedMemes, `Expected ${expectedMemes} meme cards, found ${initialCards}`);
  const firstImageLoaded = await waitForTruthy(
    client,
    'document.querySelector("#memeGrid img")?.complete && document.querySelector("#memeGrid img")?.naturalWidth > 0',
  );
  assert(firstImageLoaded, "First Clawd preview image did not load");

  await evaluate(client, `
    const input = document.querySelector("#searchInput");
    input.value = "sleeping";
    input.dispatchEvent(new Event("input", { bubbles: true }));
  `);
  const filteredCards = await evaluate(client, 'document.querySelectorAll("#memeGrid .meme-card").length');
  assert(filteredCards >= 1, "Search did not return any cards");

  await click(client, "#memeGrid .meme-card .ghost-action");
  await click(client, '[data-tab="pack"]');
  const packState = await evaluate(client, `({
    badge: document.querySelector("#packCount").textContent,
    cards: document.querySelectorAll("#packGrid .meme-card").length
  })`);
  assert(packState.badge === "1" && packState.cards === 1, `Pack count mismatch: ${JSON.stringify(packState)}`);

  await click(client, '[data-tab="sources"]');
  const sourceCards = await evaluate(client, 'document.querySelectorAll("#sourceGrid .source-card").length');
  assert(sourceCards === expectedSources, `Expected ${expectedSources} source cards, found ${sourceCards}`);

  await click(client, '[data-tab="wall"]');
  await click(client, '[data-universe="codex"]');
  const codexCards = await waitForTruthy(
    client,
    `document.querySelectorAll("#memeGrid .meme-card").length === ${expectedCodexMemes}`,
  );
  assert(codexCards, `Expected ${expectedCodexMemes} Codex cards after universe switch`);
  const codexBrand = await evaluate(client, 'document.querySelector("#brandTitle").textContent');
  assert(codexBrand.includes("Codex"), `Brand title did not update for Codex: ${codexBrand}`);
  const codexFirstImageLoaded = await waitForTruthy(
    client,
    'document.querySelector("#memeGrid img")?.complete && document.querySelector("#memeGrid img")?.naturalWidth > 0',
  );
  assert(codexFirstImageLoaded, "First Codex pet preview did not load");
  await click(client, '[data-tab="sources"]');
  const codexSourceCards = await evaluate(client, 'document.querySelectorAll("#sourceGrid .source-card").length');
  assert(
    codexSourceCards === expectedCodexSources,
    `Expected ${expectedCodexSources} Codex source cards, found ${codexSourceCards}`,
  );
  await click(client, '[data-universe="clawd"]');
  const restoredCards = await waitForTruthy(
    client,
    `document.querySelectorAll("#memeGrid .meme-card").length === ${expectedMemes}`,
  );
  assert(restoredCards, "Switching back to Clawd did not restore Clawd memes");

  await send(client, "Emulation.setDeviceMetricsOverride", {
    width: 1366,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await click(client, '[data-universe="codex"]');
  await waitForTruthy(
    client,
    `document.querySelectorAll("#memeGrid .meme-card").length === ${expectedCodexMemes}`,
  );
  await waitForTruthy(
    client,
    'document.querySelector("#memeGrid img")?.complete && document.querySelector("#memeGrid img")?.naturalWidth > 0',
  );
  const codexShot = await send(client, "Page.captureScreenshot", { format: "png", fromSurface: true });
  await writeFile("smoke-screenshot-codex.png", Buffer.from(codexShot.data, "base64"));
  await click(client, '[data-universe="clawd"]');
  await waitForTruthy(
    client,
    `document.querySelectorAll("#memeGrid .meme-card").length === ${expectedMemes}`,
  );

  await send(client, "Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  });
  await send(client, "Page.reload");
  await waitForPageReady(client);
  const hasMobileOverflow = await evaluate(client, "document.documentElement.scrollWidth > window.innerWidth + 1");
  assert(!hasMobileOverflow, "Mobile viewport has horizontal overflow");

  assert(consoleErrors.length === 0, `Console errors:\n${consoleErrors.join("\n")}`);

  const screenshot = await send(client, "Page.captureScreenshot", { format: "png", fromSurface: true });
  await writeFile("smoke-screenshot.png", Buffer.from(screenshot.data, "base64"));
  socket.close();
  console.log(`Smoke test passed (${endpoint.Browser || "Chrome"})`);
} finally {
  chrome.kill("SIGTERM");
  await waitForChromeExit(chrome);
  await rm(profileDir, { recursive: true, force: true, maxRetries: 8, retryDelay: 100 });
}

async function parseDataCounts(scriptPath) {
  const src = await readFile(scriptPath, "utf8");
  const memesMatch = src.match(/const memes\s*=\s*\[([\s\S]*?)\n\];/);
  const sourcesMatch = src.match(/const sources\s*=\s*\[([\s\S]*?)\n\];/);
  const codexSourcesMatch = src.match(/const codexSources\s*=\s*\[([\s\S]*?)\n\];/);
  if (!memesMatch || !sourcesMatch || !codexSourcesMatch) {
    throw new Error("Could not locate memes/sources/codexSources arrays in script.js");
  }
  const expectedMemes = (memesMatch[1].match(/^\s+id:\s*"/gm) || []).length;
  const expectedSources = (sourcesMatch[1].match(/^\s+title:\s*"/gm) || []).length;
  const expectedCodexMemes = (src.match(/^\s+codexPet\(/gm) || []).length;
  const expectedCodexSources = (codexSourcesMatch[1].match(/^\s+title:\s*"/gm) || []).length;
  if (!expectedMemes || !expectedSources || !expectedCodexMemes || !expectedCodexSources) {
    throw new Error(
      `Parsed zero entries (memes=${expectedMemes}, sources=${expectedSources}, codexMemes=${expectedCodexMemes}, codexSources=${expectedCodexSources})`,
    );
  }
  return { expectedMemes, expectedSources, expectedCodexMemes, expectedCodexSources };
}

async function waitForEndpoint(targetPort) {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${targetPort}/json/version`);
      if (response.ok) return response.json();
    } catch {}
    await delay(100);
  }
  throw new Error("Chrome remote debugging endpoint did not start");
}

async function createTab(targetPort, url) {
  const response = await fetch(`http://127.0.0.1:${targetPort}/json/new?${encodeURIComponent(url)}`, {
    method: "PUT",
  });
  if (!response.ok) throw new Error(`Could not create tab: ${response.status}`);
  return response.json();
}

async function createClient(socket) {
  let id = 0;
  const pending = new Map();
  const client = { onEvent: () => {} };
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
      return;
    }
    client.onEvent(message);
  });
  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });
  client.send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const messageId = ++id;
      pending.set(messageId, { resolve, reject });
      socket.send(JSON.stringify({ id: messageId, method, params }));
    });
  return client;
}

async function send(client, method, params = {}) {
  return client.send(method, params);
}

async function waitForPageReady(client) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    const isReady = await evaluate(
      client,
      'document.readyState !== "loading" && document.querySelectorAll("#memeGrid .meme-card").length > 0',
    );
    if (isReady) return;
    await delay(100);
  }
  throw new Error("Page did not render cards");
}

async function waitForTruthy(client, expression) {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    if (await evaluate(client, expression)) return true;
    await delay(100);
  }
  return false;
}

async function evaluate(client, expression) {
  const result = await send(client, "Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text);
  }
  return result.result.value;
}

async function click(client, selector) {
  const ok = await evaluate(client, `
    (() => {
      const element = document.querySelector(${JSON.stringify(selector)});
      if (!element) return false;
      element.click();
      return true;
    })()
  `);
  assert(ok, `Could not click ${selector}`);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitForChromeExit(process) {
  if (process.exitCode !== null || process.signalCode !== null) return Promise.resolve();
  return Promise.race([
    new Promise((resolve) => process.once("exit", resolve)),
    delay(1200),
  ]);
}
