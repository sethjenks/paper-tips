---
title: Put Paper in the middle of the handoff
date: 2026-09-01
summary: Bring an existing design into Paper, make the decisions on the canvas, then let the agent read the structure you approved.
image: /images/notes/paper-handoff.webp
imageAlt: Three connected stages showing a design, a Paper canvas, and code.
source: https://x.com/dezign_ash/status/2092523293316407736
---

A useful design-to-code handoff has a visible middle. Bring the source design into Paper, make the layout decisions there, and let the coding agent read from the canvas you approved.

That direction matters. Paper is not just another exporter at the end of a design process. Its MCP can expose the selected frame's structure, styles, images, and hierarchy to the same agent that is building the site.

The practical loop is:

1. Paste or import the design into Paper.
2. Fix the structure for the web: flex layouts, containers, and clear nesting.
3. Select a small frame and ask the agent to implement it.
4. Compare the result with the canvas before moving to the next section.

```prompt Implement one Paper frame
Use the currently selected frame in this Paper page as the design source: [PAPER PAGE URL]
Implement it in this project: [REPOSITORY OR PAGE PATH]

Before coding:
1. Confirm that Paper's MCP is connected to the intended file and inspect the selected frame.
2. Read the frame's structure, styles, images, and hierarchy.
3. Identify existing components and design tokens in the project that should be reused.
4. Outline a short implementation plan for this frame only.

Then implement the selected frame using the project's existing conventions. Preserve the approved hierarchy and visual relationships, adapt the structure for responsive web layout, and avoid changing unrelated sections.

When finished, compare the implementation with the Paper frame at [TARGET VIEWPORT], list any meaningful differences, and recommend the next smallest frame to hand off.
```

Paper's official MCP guide recommends starting with small, well-structured frames because larger designs give the agent more opportunities to get details wrong. If your source is in Figma, Paper's documentation also describes using both MCPs to sync tokens before the handoff.

[Community workflow on X](https://x.com/dezign_ash/status/2092523293316407736) · [Paper MCP documentation](https://paper.design/docs/mcp)
