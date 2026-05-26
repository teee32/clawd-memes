const origin = "https://clawdmascot.com";
const publicAssets = `${origin}/public`;

const categories = ["全部", "GIF", "SVG", "静态图", "官方"];

const sources = [
  {
    title: "Clawd Mascot",
    url: "https://clawdmascot.com/",
    summary: "Clawd 的 PNG、GIF 和 SVG 动画主站。",
  },
  {
    title: "Claude on YouTube",
    url: "https://www.youtube.com/@claude",
    summary: "Anthropic 官方 Claude 频道,Clawd 形象的官方出处。",
  },
  {
    title: "clawd-tank",
    url: "https://github.com/marciogranzotto/clawd-tank",
    summary: "粉丝项目,自带一整套 Clawd 像素动图录屏(conducting / wizard / debugger 等)。",
  },
  {
    title: "clawd-on-desk",
    url: "https://github.com/rullerzhou-afk/clawd-on-desk",
    summary: "把 Clawd 钉在桌面上的小工具,自带 idle / thinking / typing 等动图。",
  },
  {
    title: "clawdy",
    url: "https://github.com/lunaark/clawdy",
    summary: "Tkinter 写的桌面 Clawd 小宠物,自带呼吸/烟花/沙滩落日动图。",
  },
];

const memes = [
  {
    id: "clawd-base",
    title: "Clawd 基础像素图",
    category: "静态图",
    kind: "PNG",
    preview: `${publicAssets}/images/clawd.png`,
    url: `${publicAssets}/images/clawd.png`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/`,
    tags: ["原图", "像素蟹", "Claude Code"],
    note: "基础小蟹形象，适合做二创模板或收藏入口。",
  },
  {
    id: "typing",
    title: "Typing",
    category: "GIF",
    kind: "GIF",
    preview: `${publicAssets}/gifs/typing.gif`,
    url: `${publicAssets}/gifs/typing.gif`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#feed`,
    tags: ["打字", "coding", "Claude Code"],
    note: "写代码、敲命令、忙碌中的小蟹。",
  },
  {
    id: "building",
    title: "Building",
    category: "GIF",
    kind: "GIF",
    preview: `${publicAssets}/gifs/building.gif`,
    url: `${publicAssets}/gifs/building.gif`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#feed`,
    tags: ["构建", "施工", "build"],
    note: "适合表示正在构建、修东西、跑流程。",
  },
  {
    id: "juggling",
    title: "Juggling",
    category: "GIF",
    kind: "GIF",
    preview: `${publicAssets}/gifs/juggling.gif`,
    url: `${publicAssets}/gifs/juggling.gif`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#feed`,
    tags: ["多任务", " juggling", "忙"],
    note: "一边多线程一边保持优雅。",
  },
  {
    id: "sweeping",
    title: "Sweeping",
    category: "GIF",
    kind: "GIF",
    preview: `${publicAssets}/gifs/sweeping.gif`,
    url: `${publicAssets}/gifs/sweeping.gif`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#feed`,
    tags: ["清理", "cleanup", "打扫"],
    note: "适合清理技术债、收尾、打扫战场。",
  },
  {
    id: "confused",
    title: "Confused",
    category: "GIF",
    kind: "GIF",
    preview: `${publicAssets}/gifs/confused.gif`,
    url: `${publicAssets}/gifs/confused.gif`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#feed`,
    tags: ["困惑", "debug", "问号"],
    note: "调试失败、需求不清、日志离谱时用。",
  },
  {
    id: "happy",
    title: "Happy",
    category: "GIF",
    kind: "GIF",
    preview: `${publicAssets}/gifs/happy.gif`,
    url: `${publicAssets}/gifs/happy.gif`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#feed`,
    tags: ["开心", "通过", "ship"],
    note: "测试通过、上线成功、终于能睡觉。",
  },
  {
    id: "notification",
    title: "Notification",
    category: "GIF",
    kind: "GIF",
    preview: `${publicAssets}/gifs/notification.gif`,
    url: `${publicAssets}/gifs/notification.gif`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#feed`,
    tags: ["提醒", "通知", "ping"],
    note: "适合催 PR、提醒 review、喊人看消息。",
  },
  {
    id: "sleeping",
    title: "Sleeping",
    category: "GIF",
    kind: "GIF",
    preview: `${publicAssets}/gifs/sleeping.gif`,
    url: `${publicAssets}/gifs/sleeping.gif`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#feed`,
    tags: ["睡觉", "下线", "休眠"],
    note: "下班、关机、明天再说。",
  },
  {
    id: "svg-walking",
    title: "Crab Walking",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-crab-walking.svg`,
    url: `${origin}/public/svg-animations/clawd-crab-walking.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/`,
    tags: ["走路", "动画", "SVG"],
    note: "像素小蟹走路动画，适合做状态提示。",
  },
  {
    id: "svg-going-away",
    title: "Going Away",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-going-away.svg`,
    url: `${origin}/public/svg-animations/clawd-going-away.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/`,
    tags: ["离开", "跑路", "SVG"],
    note: "任务结束、我要撤了、先溜一步。",
  },
  {
    id: "svg-happy",
    title: "SVG Happy",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-happy.svg`,
    url: `${origin}/public/svg-animations/clawd-happy.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#trinity`,
    tags: ["开心", "通过", "SVG"],
    note: "静态页面里也能引用的开心状态。",
  },
  {
    id: "svg-notification",
    title: "SVG Notification",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-notification.svg`,
    url: `${origin}/public/svg-animations/clawd-notification.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#games`,
    tags: ["通知", "提醒", "SVG"],
    note: "适合做消息提醒、任务完成、状态提示。",
  },
  {
    id: "svg-sleeping",
    title: "SVG Sleeping",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-sleeping.svg`,
    url: `${origin}/public/svg-animations/clawd-sleeping.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/`,
    tags: ["睡觉", "休眠", "SVG"],
    note: "下线、休息、等明天。",
  },
  {
    id: "svg-beacon",
    title: "Working Beacon",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-working-beacon.svg`,
    url: `${origin}/public/svg-animations/clawd-working-beacon.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#tokenomics`,
    tags: ["信号", "提醒", "SVG"],
    note: "发射信号、喊人集合、提醒看状态。",
  },
  {
    id: "svg-confused",
    title: "Working Confused",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-working-confused.svg`,
    url: `${origin}/public/svg-animations/clawd-working-confused.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#law`,
    tags: ["困惑", "离谱", "SVG"],
    note: "这日志是什么意思、需求是不是变了。",
  },
  {
    id: "svg-debugger",
    title: "Working Debugger",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-working-debugger.svg`,
    url: `${origin}/public/svg-animations/clawd-working-debugger.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#chronicle`,
    tags: ["调试", "debugger", "SVG"],
    note: "调 bug 时的小蟹状态。",
  },
  {
    id: "svg-juggling",
    title: "Working Juggling",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-working-juggling.svg`,
    url: `${origin}/public/svg-animations/clawd-working-juggling.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#tokenomics`,
    tags: ["多任务", "并行", "SVG"],
    note: "一边查、一边改、一边测。",
  },
  {
    id: "svg-overheated",
    title: "Overheated",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-working-overheated.svg`,
    url: `${origin}/public/svg-animations/clawd-working-overheated.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#games`,
    tags: ["过热", "崩溃", "SVG"],
    note: "跑不动了、上下文爆了、脑袋冒烟。",
  },
  {
    id: "svg-typing",
    title: "Working Typing",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-working-typing.svg`,
    url: `${origin}/public/svg-animations/clawd-working-typing.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#trinity`,
    tags: ["打字", "coding", "SVG"],
    note: "正在写代码、敲命令、补文档。",
  },
  {
    id: "svg-wizard",
    title: "Working Wizard",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-working-wizard.svg`,
    url: `${origin}/public/svg-animations/clawd-working-wizard.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/#tokenomics`,
    tags: ["魔法", "自动化", "SVG"],
    note: "一键修好、突然会了、像施法一样。",
  },
  {
    id: "svg-working-building",
    title: "Working Building",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-working-building.svg`,
    url: `${origin}/public/svg-animations/clawd-working-building.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/`,
    tags: ["构建", "施工", "SVG"],
    note: "另一种打铁版的 Clawd 建造现场。",
  },
  {
    id: "svg-working-sweeping",
    title: "Working Sweeping",
    category: "SVG",
    kind: "SVG",
    preview: `${origin}/public/svg-animations/clawd-working-sweeping.svg`,
    url: `${origin}/public/svg-animations/clawd-working-sweeping.svg`,
    source: "Clawd Mascot",
    sourceUrl: `${origin}/`,
    tags: ["清理", "cleanup", "SVG"],
    note: "认真打扫战场版的 Clawd。",
  },
  {
    id: "gif-conducting",
    title: "Conducting",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-conducting.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-conducting.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["指挥", "协调", "subagents"],
    note: "指挥棒一挥,众小蟹有序开工。",
  },
  {
    id: "gif-wizard",
    title: "Wizard",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-wizard.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-wizard.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["魔法", "automation", "wizard"],
    note: "拿魔杖的 Clawd,一键解决一切。",
  },
  {
    id: "gif-debugger",
    title: "Debugger",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-debugger.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-debugger.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["调试", "debug", "GIF"],
    note: "敲代码找 bug 的认真小蟹动图版。",
  },
  {
    id: "gif-beacon",
    title: "Beacon",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-beacon.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-beacon.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["信号", "提醒", "灯塔"],
    note: "顶头一盏信号灯,喊大家集合。",
  },
  {
    id: "gif-thinking",
    title: "Thinking",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-thinking.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-thinking.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["思考", "想想", "think"],
    note: "正在认真思考、别催。",
  },
  {
    id: "gif-idle",
    title: "Idle",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-idle.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-idle.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["待机", "idle", "摸鱼"],
    note: "啥也不干、原地待命的状态。",
  },
  {
    id: "gif-disconnected",
    title: "Disconnected",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-disconnected.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-disconnected.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["断线", "offline", "失联"],
    note: "断网了、连不上、信号没了。",
  },
  {
    id: "gif-multi-session",
    title: "Multi Session",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-multi-session.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-multi-session.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["多窗口", "并行", "session"],
    note: "一堆 Clawd 各干各的,Multi-tasking 现场。",
  },
  {
    id: "gif-hud-subagents",
    title: "Subagents HUD",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-hud-subagents.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-hud-subagents.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["sub-agents", "HUD", "总览"],
    note: "子 agent 总览仪表盘风格的小蟹群像。",
  },
  {
    id: "gif-headphones-groove",
    title: "Headphones Groove",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-headphones-groove.gif",
    url: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-headphones-groove.gif",
    source: "clawd-on-desk",
    sourceUrl: "https://github.com/rullerzhou-afk/clawd-on-desk",
    tags: ["音乐", "戴耳机", "groove"],
    note: "戴耳机摇摆的 Clawd,写代码听歌专属。",
  },
  {
    id: "emoji-dizzy",
    title: "Dizzy",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-dizzy.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-dizzy.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["眩晕", "转晕", "emoji"],
    note: "脑袋转晕了的 Clawd,适合「这逻辑把我绕晕了」。",
  },
  {
    id: "emoji-static-base",
    title: "Static Base",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-static-base.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-static-base.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["静态", "标准像", "base"],
    note: "标准 Clawd 像,emoji 大小,做反应图。",
  },
  {
    id: "emoji-mini-clawd",
    title: "Mini Clawd",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-mini-clawd.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-mini-clawd.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["迷你", "mini", "emoji"],
    note: "迷你版 Clawd,小到像贴纸。",
  },
  {
    id: "emoji-idle-living",
    title: "Idle Living",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-idle-living.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-idle-living.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["呼吸", "idle", "emoji"],
    note: "原地呼吸的 Clawd,在线但暂时不动。",
  },
  {
    id: "emoji-working-carrying",
    title: "Carrying",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-working-carrying.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-working-carrying.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["搬运", "carrying", "emoji"],
    note: "正在搬东西的 Clawd,适合「我正在搬砖」。",
  },
  {
    id: "emoji-working-pushing",
    title: "Pushing",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-working-pushing.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-working-pushing.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["推", "pushing", "emoji"],
    note: "推不动也得推,像 git push 推不上去。",
  },
  {
    id: "emoji-working-thinking",
    title: "Thinking (emoji)",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-working-thinking.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-working-thinking.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["思考", "thinking", "emoji"],
    note: "emoji 尺寸的思考状,放 Slack 里超合适。",
  },
  {
    id: "emoji-working-building",
    title: "Building (emoji)",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-working-building.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-working-building.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["构建", "打铁", "emoji"],
    note: "小尺寸打铁动图,build 中专用。",
  },
  {
    id: "emoji-working-sweeping",
    title: "Sweeping (emoji)",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-working-sweeping.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-working-sweeping.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["扫地", "cleanup", "emoji"],
    note: "emoji 尺寸的扫地小蟹,清理代码必备。",
  },
  {
    id: "emoji-working-conducting",
    title: "Conducting (emoji)",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-working-conducting.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/clawd-working-conducting.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["指挥", "subagents", "emoji"],
    note: "emoji 尺寸的指挥棒 Clawd,sub-agents 总指挥。",
  },
  {
    id: "emoji-mini-typing",
    title: "Mini Crab Typing",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/mini-crab-typing.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/slack-emojis/mini-crab-typing.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["打字", "迷你", "emoji"],
    note: "迷你 Clawd 在小键盘上敲字。",
  },
  {
    id: "desk-bubble",
    title: "Bubble",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-bubble.gif",
    url: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-bubble.gif",
    source: "clawd-on-desk",
    sourceUrl: "https://github.com/rullerzhou-afk/clawd-on-desk",
    tags: ["对话框", "bubble", "气泡"],
    note: "顶头冒气泡的 Clawd,在小声说话。",
  },
  {
    id: "desk-error",
    title: "Error",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-error.gif",
    url: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-error.gif",
    source: "clawd-on-desk",
    sourceUrl: "https://github.com/rullerzhou-afk/clawd-on-desk",
    tags: ["报错", "error", "崩"],
    note: "出 bug 了、报错了、CI 红了。",
  },
  {
    id: "desk-idle-reading",
    title: "Idle Reading",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-idle-reading.gif",
    url: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-idle-reading.gif",
    source: "clawd-on-desk",
    sourceUrl: "https://github.com/rullerzhou-afk/clawd-on-desk",
    tags: ["看书", "reading", "idle"],
    note: "在看文档/读 PR 的 Clawd。",
  },
  {
    id: "desk-react-annoyed",
    title: "Annoyed Reaction",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-react-annoyed.gif",
    url: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-react-annoyed.gif",
    source: "clawd-on-desk",
    sourceUrl: "https://github.com/rullerzhou-afk/clawd-on-desk",
    tags: ["烦躁", "annoyed", "react"],
    note: "被打扰的烦躁 Clawd。",
  },
  {
    id: "desk-react-double-jump",
    title: "Double Jump",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-react-double-jump.gif",
    url: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-react-double-jump.gif",
    source: "clawd-on-desk",
    sourceUrl: "https://github.com/rullerzhou-afk/clawd-on-desk",
    tags: ["蹦跳", "兴奋", "react"],
    note: "兴奋蹦跳的 Clawd,test 通过、PR merge 时用。",
  },
  {
    id: "desk-mini-peek",
    title: "Mini Peek",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-mini-peek.gif",
    url: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-mini-peek.gif",
    source: "clawd-on-desk",
    sourceUrl: "https://github.com/rullerzhou-afk/clawd-on-desk",
    tags: ["探头", "peek", "偷看"],
    note: "悄悄探头的 Clawd,适合「我也来看看」。",
  },
  {
    id: "desk-mini-alert",
    title: "Mini Alert",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-mini-alert.gif",
    url: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-mini-alert.gif",
    source: "clawd-on-desk",
    sourceUrl: "https://github.com/rullerzhou-afk/clawd-on-desk",
    tags: ["警觉", "alert", "迷你"],
    note: "警觉竖直的迷你 Clawd。",
  },
  {
    id: "desk-carrying",
    title: "Desk Carrying",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-carrying.gif",
    url: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-carrying.gif",
    source: "clawd-on-desk",
    sourceUrl: "https://github.com/rullerzhou-afk/clawd-on-desk",
    tags: ["搬运", "carrying", "扛"],
    note: "扛着东西在桌面上走的 Clawd。",
  },
  {
    id: "desk-conducting",
    title: "Desk Conducting",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-conducting.gif",
    url: "https://raw.githubusercontent.com/rullerzhou-afk/clawd-on-desk/main/assets/gif/clawd-conducting.gif",
    source: "clawd-on-desk",
    sourceUrl: "https://github.com/rullerzhou-afk/clawd-on-desk",
    tags: ["指挥", "conducting", "桌面"],
    note: "桌面版指挥 Clawd。",
  },
  {
    id: "tank-walk-in",
    title: "Walks In",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-walk-in.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-walk-in.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["入场", "walk in", "登场"],
    note: "Clawd 走进画面,适合「我来了」。",
  },
  {
    id: "tank-overflow-narrow",
    title: "Context Overflow (narrow)",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-overflow-narrow.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-overflow-narrow.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["上下文", "overflow", "爆"],
    note: "上下文窗口爆掉的窄屏版。",
  },
  {
    id: "tank-overflow-wide",
    title: "Context Overflow (wide)",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-overflow-wide.gif",
    url: "https://raw.githubusercontent.com/marciogranzotto/clawd-tank/master/assets/sim-recordings/clawd-overflow-wide.gif",
    source: "clawd-tank",
    sourceUrl: "https://github.com/marciogranzotto/clawd-tank",
    tags: ["上下文", "overflow", "爆"],
    note: "上下文窗口爆掉的宽屏版,token 超了。",
  },
  {
    id: "clawdy-breathing",
    title: "Breathing Clawd",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/lunaark/clawdy/main/screenshots/breathing-clawd.gif",
    url: "https://raw.githubusercontent.com/lunaark/clawdy/main/screenshots/breathing-clawd.gif",
    source: "clawdy",
    sourceUrl: "https://github.com/lunaark/clawdy",
    tags: ["呼吸", "breathing", "transparent"],
    note: "透明背景上呼吸的 Clawd,360x360。",
  },
  {
    id: "clawdy-fireworks",
    title: "Fireworks Clawd",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/lunaark/clawdy/main/screenshots/fireworks-clawd.gif",
    url: "https://raw.githubusercontent.com/lunaark/clawdy/main/screenshots/fireworks-clawd.gif",
    source: "clawdy",
    sourceUrl: "https://github.com/lunaark/clawdy",
    tags: ["烟花", "庆祝", "fireworks"],
    note: "Clawd 看烟花,适合发布日庆祝。",
  },
  {
    id: "clawdy-sunset-beach",
    title: "Sunset Beach Clawd",
    category: "GIF",
    kind: "GIF",
    preview: "https://raw.githubusercontent.com/lunaark/clawdy/main/screenshots/sunset-beach.gif",
    url: "https://raw.githubusercontent.com/lunaark/clawdy/main/screenshots/sunset-beach.gif",
    source: "clawdy",
    sourceUrl: "https://github.com/lunaark/clawdy",
    tags: ["沙滩", "落日", "vacation"],
    note: "沙滩落日 Clawd,适合「我在度假」。",
  },
  {
    id: "claude-fm",
    title: "Claude FM",
    category: "官方",
    kind: "YouTube",
    preview: "https://i.ytimg.com/vi/YmQ7jRgf4f0/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=YmQ7jRgf4f0",
    source: "Claude on YouTube",
    sourceUrl: "https://www.youtube.com/@claude",
    tags: ["Anthropic", "官方", "music", "guitar"],
    note: "Anthropic 官方频道发的「Claude FM」,Clawd 抱着吉他给你伴奏。",
  },
];

const codexCategories = ["全部", "AI·Tech", "动漫", "IP经典", "Meme"];

const codexSources = [
  {
    title: "codex-pet.com",
    url: "https://codex-pet.com",
    summary: "社区驱动的 Codex 桌宠聚合站,收录 606+ 桌宠,支持 npx 一键安装。",
  },
  {
    title: "awesome-codex-pet",
    url: "https://github.com/legeling/awesome-codex-pet",
    summary: "精选 Codex 桌宠画廊,提供动画预览和标准化安装,附 Web 画廊 awesome-codex-pet.pages.dev。",
  },
  {
    title: "OpenPets",
    url: "https://github.com/alterhq/openpets",
    summary: "macOS 原生桌宠应用,MCP/CLI 控制,定义了 Codex Pets 的 spritesheet 格式。",
  },
  {
    title: "openai/codex",
    url: "https://github.com/openai/codex",
    summary: "OpenAI 官方 Codex CLI 仓库,桌宠生态的源头。",
  },
];

function codexPet(slug, title, cat, tags, note) {
  return {
    id: `codex-${slug}`,
    title,
    category: cat,
    kind: "WebP",
    preview: `https://github.com/BeiXiao/awesome-codex-pets/raw/main/pets/${slug}/thumb.webp`,
    url: `https://codex-pet.com/pets/${slug}`,
    source: "codex-pet.com",
    sourceUrl: "https://codex-pet.com",
    tags,
    note,
  };
}

const codexMemes = [
  codexPet("codex", "Codex", "AI·Tech", ["Codex", "terminal", "logo"], "金色徽章里嵌一个终端提示符,Codex CLI 的图腾。"),
  codexPet("clawdex", "Clawdex", "AI·Tech", ["Clawd", "hacker", "跨界"], "穿连帽衫戴墨镜抱笔记本的 Clawd,Codex 生态里的 Anthropic 跨界。"),
  codexPet("claude-crab", "Claude Crab", "AI·Tech", ["Clawd", "像素", "crab"], "橙色像素小蟹,Clawd 在 Codex 生态的致敬版。"),
  codexPet("clawd-2", "Clawd 2", "AI·Tech", ["Clawd", "invader", "pixel"], "Space Invader 风格的橙色像素蟹。"),
  codexPet("froge-openai-mascot", "Froge", "AI·Tech", ["OpenAI", "frog", "mascot"], "戴红 fez 帽的小青蛙,社区非官方的 OpenAI 吉祥物。"),
  codexPet("clippy", "Clippy", "AI·Tech", ["Microsoft", "回形针", "经典"], "微软经典回形针助手,AI 助手的精神祖先。"),
  codexPet("cool-clippy", "Cool Clippy", "AI·Tech", ["Microsoft", "墨镜", "回形针"], "戴墨镜的酷版回形针。"),
  codexPet("cortana", "Cortana", "AI·Tech", ["Microsoft", "AI", "蓝色"], "微软 AI 助手 Cortana 的像素化身。"),
  codexPet("hal-9000", "HAL 9000", "AI·Tech", ["2001", "AI", "红眼"], "「I'm sorry, Dave.」经典 AI 反派。"),
  codexPet("codie", "Codie", "AI·Tech", ["魔法书", "codex", "原创"], "长了脚的魔法典籍,Codex 字面意义上的化身。"),
  codexPet("gopher", "Go Gopher", "AI·Tech", ["Go", "语言", "吉祥物"], "Go 语言的蓝色囊地鼠吉祥物。"),
  codexPet("java", "Java Duke", "AI·Tech", ["Java", "语言", "Duke"], "Java 的三角头吉祥物 Duke。"),
  codexPet("tuxterm", "Tux", "AI·Tech", ["Linux", "企鹅", "开源"], "Linux 企鹅 Tux 的终端版桌宠。"),
  codexPet("bonzibuddy", "BonziBuddy", "AI·Tech", ["恶搞", "经典", "猩猩"], "千禧年经典「助手」软件的紫色大猩猩。"),
  codexPet("navi", "Navi", "AI·Tech", ["Zelda", "精灵", "Hey Listen"], "「Hey! Listen!」塞尔达的碎碎念小精灵。"),
  codexPet("terminal", "Terminal", "AI·Tech", ["terminal", "命令行", "极客"], "拟人化的终端窗口桌宠。"),
  codexPet("macintosh", "Macintosh", "AI·Tech", ["Apple", "复古", "经典"], "初代 Macintosh 拟人版。"),
  codexPet("stackbleed-codex-pet", "Stackbleed", "AI·Tech", ["栈溢出", "geek", "梗"], "「栈溢出」桌宠版,程序员专属梗。"),
  codexPet("frieren-3", "Frieren", "动漫", ["葬送的芙莉莲", "精灵", "魔法"], "不老精灵芙莉莲,百年后依然不急不慢。"),
  codexPet("gojo", "Gojo", "动漫", ["咒术回战", "五条悟", "最强"], "五条悟,「大丈夫,僕最強だから。」"),
  codexPet("naruto", "Naruto", "动漫", ["火影忍者", "鸣人", "忍者"], "漩涡鸣人,永不放弃的忍道。"),
  codexPet("luffy", "Luffy", "动漫", ["海贼王", "草帽", "橡胶"], "草帽路飞,要成为海贼王的男人。"),
  codexPet("zoro", "Zoro", "动漫", ["海贼王", "剑豪", "迷路"], "索隆,三刀流但永远在迷路。"),
  codexPet("nezuko", "Nezuko", "动漫", ["鬼灭之刃", "祢豆子", "竹筒"], "嘴咬竹筒的祢豆子。"),
  codexPet("sukuna", "Sukuna", "动漫", ["咒术回战", "宿傩", "两面四臂"], "两面四臂的咒术之王宿傩。"),
  codexPet("itachi", "Itachi", "动漫", ["火影忍者", "鼬", "万花筒"], "宇智波鼬,永远的兄长。"),
  codexPet("pochita", "Pochita", "动漫", ["电锯人", "电锯狗", "可爱"], "电锯人的小狗形态,头顶拉绳。"),
  codexPet("doraemon", "Doraemon", "动漫", ["机器猫", "四次元", "铜锣烧"], "来自未来的蓝胖子,什么道具都有。"),
  codexPet("shinchan", "Shin-chan", "动漫", ["蜡笔小新", "屁屁", "幼稚园"], "蜡笔小新,五岁的成年人发言机器。"),
  codexPet("kirby", "Kirby", "动漫", ["星之卡比", "粉色", "吸"], "粉色圆球,什么都能吸进去。"),
  codexPet("chiikawa", "Chiikawa", "动漫", ["吉伊卡哇", "小可爱", "打工"], "「哇……」一边卖萌一边打工。"),
  codexPet("cinnamonroll", "Cinnamonroll", "动漫", ["三丽鸥", "肉桂狗", "卷耳"], "三丽鸥大耳狗,耳朵卷得像肉桂卷。"),
  codexPet("kuromi", "Kuromi", "动漫", ["三丽鸥", "库洛米", "朋克"], "三丽鸥的朋克兔,美乐蒂的对手。"),
  codexPet("agumon", "Agumon", "动漫", ["数码宝贝", "亚古兽", "火焰"], "数码宝贝初代搭档亚古兽。"),
  codexPet("gabumon", "Gabumon", "动漫", ["数码宝贝", "加布兽", "皮毛"], "数码宝贝初代搭档加布兽。"),
  codexPet("piyomon", "Piyomon", "动漫", ["数码宝贝", "比丘兽", "粉色"], "数码宝贝初代搭档比丘兽。"),
  codexPet("wukong", "Wukong", "动漫", ["悟空", "西游", "金箍棒"], "齐天大圣孙悟空,筋斗云走起。"),
  codexPet("sora", "Sora", "动漫", ["王国之心", "键刃", "迪士尼"], "拿着键刃的少年,迪士尼 × 最终幻想。"),
  codexPet("vault-boy", "Vault Boy", "IP经典", ["Fallout", "废土", "竖拇指"], "Fallout 的竖拇指小子,废土求生指南。"),
  codexPet("wall-e", "WALL-E", "IP经典", ["Pixar", "机器人", "环保"], "皮克斯的垃圾清理小机器人。"),
  codexPet("wall-e-baby", "Baby WALL-E", "IP经典", ["Pixar", "迷你", "机器人"], "迷你版 WALL-E,更软更萌。"),
  codexPet("snoopy", "Snoopy", "IP经典", ["Peanuts", "小猎犬", "花生漫画"], "查理布朗的小猎犬 Snoopy。"),
  codexPet("r2-vader", "R2-Vader", "IP经典", ["Star Wars", "R2D2", "黑武士"], "当 R2-D2 穿上达斯·维达的盔甲。"),
  codexPet("pickle-rick", "Pickle Rick", "IP经典", ["Rick and Morty", "腌黄瓜", "科学"], "「I'm Pickle Rick!」"),
  codexPet("totoro", "Totoro", "IP经典", ["龙猫", "吉卜力", "森林"], "宫崎骏的森林精灵龙猫。"),
  codexPet("crash-bandicoot", "Crash", "IP经典", ["Crash", "袋狼", "旋转"], "袋狼大进击,旋转就对了。"),
  codexPet("spyro", "Spyro", "IP经典", ["Spyro", "小龙", "紫色"], "紫色小飞龙,喷火拯救世界。"),
  codexPet("ada-lovelace", "Ada Lovelace", "IP经典", ["程序员", "先驱", "维多利亚"], "世界第一位程序员,算法女王。"),
  codexPet("einstein", "Einstein", "IP经典", ["物理学家", "相对论", "天才"], "爱因斯坦,E=mc² 的那位。"),
  codexPet("confucius", "Confucius", "IP经典", ["孔子", "儒家", "圣人"], "孔夫子,「学而时习之」。"),
  codexPet("laozi", "Laozi", "IP经典", ["老子", "道德经", "无为"], "老子,「道可道,非常道」。"),
  codexPet("plato", "Plato", "IP经典", ["柏拉图", "哲学", "希腊"], "理想国的作者,西方哲学之祖。"),
  codexPet("pepe", "Pepe", "Meme", ["青蛙", "meme", "feels"], "Feels good man / Feels bad man。"),
  codexPet("apu-apustaja", "Apu Apustaja", "Meme", ["helper", "fren", "wholesome"], "「fren」系 meme,呆萌小蛙。"),
  codexPet("wojak", "Wojak", "Meme", ["feels", "表情", "互联网"], "互联网情绪的化身,万用表情模板。"),
  codexPet("lulu", "Lulu", "Meme", ["原创", "圆润", "黄色"], "圆滚滚的黄色小家伙,社区原创。"),
  codexPet("lulu-capybara", "Capybara Lulu", "Meme", ["水豚", "呆萌", "佛系"], "水豚版 Lulu,什么都无所谓。"),
  codexPet("bubu", "Bubu", "Meme", ["原创", "粉色", "可爱"], "粉嘟嘟的 Bubu,社区人气桌宠。"),
  codexPet("huangdou", "黄豆", "Meme", ["黄豆", "表情", "中文圈"], "黄豆表情包系列,中文 meme 圈常客。"),
  codexPet("ditta", "Ditta", "Meme", ["原创", "像素", "桌宠"], "社区原创像素桌宠 Ditta。"),
];

const universes = {
  clawd: {
    label: "Clawd",
    docTitle: "Clawd 表情包聚合器",
    brandTitle: "Clawd 表情包聚合器",
    brandEyebrow: "Claude Code · Mascot",
    wallTitle: "Clawd 表情墙",
    wallEyebrow: "Collection",
    brandImg: `${publicAssets}/images/clawd.png`,
    emptyImg: `${publicAssets}/images/clawd.png`,
    emptyText: "还没有收藏",
    searchPlaceholder: "typing / happy / 睡觉 / 调试",
    categories,
    sources,
    memes,
    packKey: "clawdMemePack",
  },
  codex: {
    label: "Codex Pets",
    docTitle: "Codex 桌宠聚合器",
    brandTitle: "Codex 桌宠聚合器",
    brandEyebrow: "OpenAI · Codex CLI Pets",
    wallTitle: "Codex 桌宠墙",
    wallEyebrow: "Pet Ecosystem",
    brandImg: "https://github.com/BeiXiao/awesome-codex-pets/raw/main/pets/codex/thumb.webp",
    emptyImg: "https://github.com/BeiXiao/awesome-codex-pets/raw/main/pets/codex/thumb.webp",
    emptyText: "还没有收藏",
    searchPlaceholder: "codex / clippy / 龙猫 / pepe",
    categories: codexCategories,
    sources: codexSources,
    memes: codexMemes,
    packKey: "codexPetPack",
  },
};

function activeUniverse() {
  return universes[state.universe] || universes.clawd;
}

const state = {
  universe: (function () {
    try {
      const saved = localStorage.getItem("clawdUniverse");
      return saved && universes[saved] ? saved : "clawd";
    } catch {
      return "clawd";
    }
  })(),
  tab: "wall",
  category: "全部",
  query: "",
  pack: [],
};
state.pack = loadPack();

const elements = {
  tabButtons: [...document.querySelectorAll(".tab-button")],
  universeButtons: [...document.querySelectorAll(".universe-btn")],
  panels: {
    wall: document.querySelector("#wallPanel"),
    sources: document.querySelector("#sourcesPanel"),
    pack: document.querySelector("#packPanel"),
  },
  filterRow: document.querySelector("#filterRow"),
  memeGrid: document.querySelector("#memeGrid"),
  sourceGrid: document.querySelector("#sourceGrid"),
  packGrid: document.querySelector("#packGrid"),
  packEmpty: document.querySelector("#packEmpty"),
  packCount: document.querySelector("#packCount"),
  searchInput: document.querySelector("#searchInput"),
  copyPackBtn: document.querySelector("#copyPackBtn"),
  clearPackBtn: document.querySelector("#clearPackBtn"),
  toast: document.querySelector("#toast"),
  themeToggle: document.querySelector("#themeToggle"),
  themeToggleLabel: document.querySelector("#themeToggleLabel"),
  themeIcon: document.querySelector("#themeToggle .theme-icon"),
  docTitle: document.querySelector("#docTitle"),
  brandImg: document.querySelector("#brandImg"),
  brandTitle: document.querySelector("#brandTitle"),
  brandEyebrow: document.querySelector("#brandEyebrow"),
  wallTitle: document.querySelector("#wallTitle"),
  wallEyebrow: document.querySelector("#wallEyebrow"),
  packEmptyImg: document.querySelector("#packEmptyImg"),
  packEmptyText: document.querySelector("#packEmptyText"),
};

const sunIcon =
  '<circle cx="8" cy="8" r="3.2"></circle>' +
  '<path d="M8 1.5v1.6M8 12.9v1.6M1.5 8h1.6M12.9 8h1.6M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M3.2 12.8l1.1-1.1M11.7 4.3l1.1-1.1"></path>';
const moonIcon =
  '<path d="M13 9.4A5.4 5.4 0 0 1 6.6 3a5.6 5.6 0 1 0 6.4 6.4Z"></path>';

init();

function init() {
  syncBrand();
  renderFilters();
  renderMemeGrid();
  renderSources();
  renderPack();

  elements.tabButtons.forEach((button) => {
    button.addEventListener("click", () => setTab(button.dataset.tab));
  });
  elements.universeButtons.forEach((button) => {
    button.addEventListener("click", () => switchUniverse(button.dataset.universe));
  });
  elements.searchInput.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderMemeGrid();
  });
  elements.copyPackBtn.addEventListener("click", copyPack);
  elements.clearPackBtn.addEventListener("click", clearPack);

  syncThemeButton();
  elements.themeToggle.addEventListener("click", toggleTheme);
}

function switchUniverse(name) {
  if (!universes[name] || name === state.universe) return;
  state.universe = name;
  state.category = "全部";
  state.query = "";
  if (elements.searchInput) elements.searchInput.value = "";
  state.pack = loadPack();
  try {
    localStorage.setItem("clawdUniverse", name);
  } catch {}
  syncBrand();
  renderFilters();
  renderMemeGrid();
  renderSources();
  renderPack();
  setTab("wall");
}

function syncBrand() {
  const u = activeUniverse();
  elements.docTitle.textContent = u.docTitle;
  document.title = u.docTitle;
  elements.brandImg.src = u.brandImg;
  elements.brandTitle.textContent = u.brandTitle;
  elements.brandEyebrow.textContent = u.brandEyebrow;
  elements.wallTitle.textContent = u.wallTitle;
  elements.wallEyebrow.textContent = u.wallEyebrow;
  elements.packEmptyImg.src = u.emptyImg;
  elements.packEmptyText.textContent = u.emptyText;
  elements.searchInput.placeholder = u.searchPlaceholder;
  elements.universeButtons.forEach((btn) => {
    const active = btn.dataset.universe === state.universe;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-selected", String(active));
  });
}

function syncThemeButton() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  elements.themeIcon.innerHTML = current === "dark" ? sunIcon : moonIcon;
  elements.themeToggleLabel.textContent =
    current === "dark" ? "切换浅色" : "切换深色";
  elements.themeToggle.setAttribute(
    "aria-label",
    current === "dark" ? "切换到浅色模式" : "切换到深色模式",
  );
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("clawdTheme", next);
  } catch {}
  syncThemeButton();
}

function setTab(tab) {
  state.tab = tab;
  elements.tabButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tab);
  });
  Object.entries(elements.panels).forEach(([key, panel]) => {
    panel.classList.toggle("is-active", key === tab);
  });
}

function renderFilters() {
  elements.filterRow.innerHTML = "";
  activeUniverse().categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "chip";
    button.type = "button";
    button.textContent = category;
    button.classList.toggle("is-active", category === state.category);
    button.addEventListener("click", () => {
      state.category = category;
      renderFilters();
      renderMemeGrid();
    });
    elements.filterRow.append(button);
  });
}

function renderMemeGrid() {
  const filtered = activeUniverse().memes.filter((meme) => {
    const inCategory = state.category === "全部" || meme.category === state.category;
    const haystack = [meme.title, meme.kind, meme.category, meme.source, meme.note, ...meme.tags].join(" ").toLowerCase();
    return inCategory && (!state.query || haystack.includes(state.query));
  });

  elements.memeGrid.innerHTML = "";
  filtered.forEach((meme) => {
    elements.memeGrid.append(createMemeCard(meme, "wall"));
  });
}

function createMemeCard(meme, source) {
  const article = document.createElement("article");
  article.className = "meme-card";

  const mediaWrap = document.createElement("a");
  mediaWrap.className = "meme-media";
  mediaWrap.href = meme.url;
  mediaWrap.target = "_blank";
  mediaWrap.rel = "noopener";
  mediaWrap.setAttribute("aria-label", `打开 ${meme.title}`);

  const img = document.createElement("img");
  img.src = meme.preview;
  img.alt = meme.title;
  img.loading = "lazy";
  img.decoding = "async";
  img.onerror = () => {
    mediaWrap.classList.add("is-broken");
    img.alt = `${meme.title} 预览加载失败`;
  };
  mediaWrap.append(img);

  const info = document.createElement("div");
  info.className = "meme-info";

  const titleRow = document.createElement("div");
  titleRow.className = "meme-title-row";
  titleRow.innerHTML = `<h3>${escapeHtml(meme.title)}</h3><span>${escapeHtml(meme.kind)}</span>`;

  const note = document.createElement("p");
  note.className = "meme-note";
  note.textContent = meme.note;

  const tagLine = document.createElement("div");
  tagLine.className = "tag-line";
  meme.tags.slice(0, 4).forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    tagLine.append(span);
  });

  const actions = document.createElement("div");
  actions.className = "card-actions";
  const sourceLink = document.createElement("a");
  sourceLink.className = "primary-action";
  sourceLink.href = meme.sourceUrl;
  sourceLink.target = "_blank";
  sourceLink.rel = "noopener";
  sourceLink.textContent = "打开来源";

  const secondary = document.createElement("button");
  secondary.className = "ghost-action";
  secondary.type = "button";
  secondary.textContent = source === "pack" ? "移除" : "收藏";
  secondary.addEventListener("click", () => {
    if (source === "pack") removeFromPack(meme.id);
    else addToPack(meme);
  });

  const copy = document.createElement("button");
  copy.className = "ghost-action";
  copy.type = "button";
  copy.textContent = "复制链接";
  copy.addEventListener("click", () => copyText(meme.url));

  actions.append(sourceLink, secondary, copy);
  info.append(titleRow, note, tagLine, actions);
  article.append(mediaWrap, info);
  return article;
}

function renderSources() {
  elements.sourceGrid.innerHTML = "";
  activeUniverse().sources.forEach((source) => {
    const article = document.createElement("article");
    article.className = "source-card";
    article.innerHTML = `
      <h3>${escapeHtml(source.title)}</h3>
      <p>${escapeHtml(source.summary)}</p>
      <a class="primary-action" href="${escapeHtml(source.url)}" target="_blank" rel="noopener">打开</a>
    `;
    elements.sourceGrid.append(article);
  });
}

function addToPack(meme) {
  if (state.pack.some((item) => item.id === meme.id)) {
    showToast("已经收藏过了");
    return;
  }
  state.pack.unshift(meme);
  savePack();
  renderPack();
  showToast("已加入我的包");
}

function renderPack() {
  elements.packCount.textContent = state.pack.length;
  elements.packGrid.innerHTML = "";
  elements.packEmpty.classList.toggle("is-visible", state.pack.length === 0);
  state.pack.forEach((meme) => {
    elements.packGrid.append(createMemeCard(meme, "pack"));
  });
}

function removeFromPack(id) {
  state.pack = state.pack.filter((item) => item.id !== id);
  savePack();
  renderPack();
  showToast("已移除");
}

function clearPack() {
  if (!state.pack.length) return;
  state.pack = [];
  savePack();
  renderPack();
  showToast("已清空");
}

function copyPack() {
  if (!state.pack.length) {
    showToast("我的包还是空的");
    return;
  }
  const text = state.pack.map((item) => `${item.title} - ${item.url}`).join("\n");
  copyText(text);
}

function copyText(value) {
  if (!navigator.clipboard?.writeText) {
    showToast("当前浏览器不支持复制");
    return;
  }
  navigator.clipboard
    .writeText(value)
    .then(() => showToast("链接已复制"))
    .catch(() => showToast("复制失败"));
}

function loadPack() {
  try {
    return JSON.parse(localStorage.getItem(activeUniverse().packKey) || "[]");
  } catch {
    return [];
  }
}

function savePack() {
  localStorage.setItem(activeUniverse().packKey, JSON.stringify(state.pack));
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 1700);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
