# Clawd 表情包聚合器

一个用于收集 Clawd / Claude Code 小蟹表情包的静态网页。页面聚合公开来源中的 GIF、SVG 和静态图，支持搜索、分类筛选、本地收藏和复制清单。

在线访问：

https://teee32.github.io/clawd-memes/

## 功能

- 表情墙：集中浏览 Clawd 小蟹相关素材。
- 分类筛选：按 GIF、SVG、静态图、官方来源筛选。
- 搜索：按标题、标签、来源和说明快速定位表情。
- 我的包：把常用表情收藏到当前浏览器本地。
- 复制清单：一键复制已收藏表情的链接。
- 主题切换：支持浅色和深色模式。

## 本地使用

这是一个纯静态项目，不需要安装依赖。

直接打开 `index.html` 即可使用；如果需要用本地服务预览，可以运行：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 添加表情包

目前表情数据维护在 `script.js` 的 `memes` 数组中。新增条目时请尽量保留原始来源，不要重新托管第三方图片。

每个表情条目包含：

- `title`：展示名称
- `category`：分类，例如 `GIF`、`SVG`、`静态图`、`官方`
- `kind`：资源格式
- `preview`：预览图地址
- `url`：原始资源或落地页地址
- `source` / `sourceUrl`：来源名称和来源链接
- `tags`：搜索标签
- `note`：用途说明

欢迎通过 Pull Request 或 Issue 提交新的 Clawd 小蟹表情素材。

## 验证

```bash
node --check script.js
node --check smoke-test.mjs
node smoke-test.mjs
```

## 社区支持

linuxdo
