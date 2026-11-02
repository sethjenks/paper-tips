---
title: Use your browser agent with Paper on the web
date: 2026-11-02
draft: true
summary: Paper's browser app now supports WebMCP, so in-browser agents can work with your file without Paper Desktop.
image: /images/notes/webmcp-in-the-browser.webp
imageAlt: A Paper file open in a browser tab, with a browser agent side panel working on the canvas.
source: https://paper.design/build-log
---

Paper's browser app now supports WebMCP. If your agent lives in the browser, it can now work with Paper there too.

When to use which:

- **Browser (WebMCP):** you already work in a browser with an agent built in, you are on a machine without Paper Desktop, or you just want a quick edit from a tab.
- **Desktop (Paper CLI / MCP panel):** your agent runs in Cursor, Claude Code, Codex, VS Code, or a terminal, and you want it reading and writing the open file alongside your code. This is the path the [MCP docs](https://paper.design/docs/mcp) document in full.

The build log announces WebMCP support in a single line, so treat setup details as your browser agent's job. Check your agent's docs for how it discovers WebMCP tools on a page.

Coming soon on the roadmap: Remote MCP. That is a different thing, and it is not shipped yet.

Sources: [Paper build log, September 2026](https://paper.design/build-log), [Paper MCP docs](https://paper.design/docs/mcp). See also the Guide's [MCP section](/guide#mcp).
