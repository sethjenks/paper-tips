---
title: Connect your agent from inside Paper
date: 2026-11-02
draft: true
summary: Open the MCP panel, pick your agent, click Add. No more hunting for a localhost URL or hand-editing config.
image: /images/notes/in-app-agent-setup.webp
imageAlt: The Paper Desktop MCP panel open on the right, with a list of agents and an Add button next to Cursor.
source: https://paper.design/build-log
---

Connecting an agent to Paper is now a one-click job inside the editor. Open the MCP panel, choose your harness, and click **Add to {agent}**.

Where to find it: the **Connect your agent** callout in the top right of the editor, or the MCP panel on the right side (deselect everything first, or the panel will not show).

Why it matters. The old route was copying the Desktop MCP URL (`http://127.0.0.1:29979/mcp`) into a config file and hoping your agent picked it up. The panel now installs Paper through the Paper CLI (`paper mcp`), so your agent can see Paper's tools even while Desktop is closed. Cursor and Claude install through their own plugin or extension.

Supported in the panel, per the docs: Claude (and Claude Code), Codex (and ChatGPT), Cursor, OpenCode, Antigravity, GitHub Copilot app, and VS Code. Anything else gets a manual stdio config.

Tip: if you set Paper up the old HTTP way, remove that entry first so you do not end up with two Paper servers. Then restart your agent and run a test prompt.

```prompt Test the connection
Create a basic Hello World frame in Paper
```

Sources: [Paper build log, September 2026](https://paper.design/build-log), [Paper MCP docs](https://paper.design/docs/mcp). See also the Guide's [MCP section](/#mcp).
