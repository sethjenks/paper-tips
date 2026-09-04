---
title: Plan first, then bring in the real words
date: 2026-09-02
draft: true
summary: Give the agent the Paper page and the brand site, agree on the work, then replace placeholders with actual language.
image: /images/notes/plan-and-copy.webp
imageAlt: A dark Paper canvas connecting a source window to an editorial layout.
source: https://x.com/sethjenks/status/2092671597849239792
---

When a layout is ready but the words are not, I give the agent two pieces of context: the Paper page I want changed and the brand's real website. That grounds the work in an existing visual structure and an existing voice.

![A source website and its content rearranged on a Paper canvas.](/images/notes/source-to-canvas.webp)

The important step is to ask for a plan before asking for edits. A short plan exposes missing decisions—what should change, which section is in scope, and whether the source copy is good enough—while they are still cheap to resolve.

```prompt Plan before editing
Open this Paper page: [PAPER PAGE URL]
Use this website as the source for the brand's real language: [BRAND WEBSITE URL]

Before editing the canvas:
1. Summarize the sections and existing placeholders that should change.
2. Flag any missing decisions or source copy that does not fit the layout.
3. Propose a short editing plan and wait for my approval.

After approval, update the existing text layers with the source language. Preserve the layout where it works, then call out line breaks or hierarchy that need visual review.
```

> **The loop**
>
> 1. Paste the Paper page and the brand site into the same prompt.
> 2. Plan the sections and decide which existing nodes should change.
> 3. Pull the real copy into Paper, inspect the fit, and revise on the canvas.

![Text layers selected in Paper for checking line breaks and hierarchy.](/images/notes/inspect-the-fit.webp)

Paper's MCP includes `set_text_content` for updating existing text layers, so the agent can place the approved copy without rebuilding the design. The result is not "AI copy." It is the brand's own language in the layout you chose, with awkward line breaks and hierarchy problems visible on the canvas.

[Original workflow on X](https://x.com/sethjenks/status/2092671597849239792) · [Paper MCP documentation](https://paper.design/docs/mcp)
