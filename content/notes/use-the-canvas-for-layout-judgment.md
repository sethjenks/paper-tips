---
title: Use the canvas for layout judgment
date: 2026-08-31
summary: Describe, render, inspect hierarchy, and re-prompt. Paper closes the gap between what code says and what the page feels like.
image: /images/notes/layout-judgment.webp
imageAlt: An editorial layout on a Paper canvas with alignment guides and selected blocks.
source: https://x.com/seniorbrusko/status/2086803015479304199
---

Code can tell you that a layout is valid. It cannot tell you whether the hierarchy feels right. That is the part worth moving onto a shared canvas.

Describe one section, let the agent render it in Paper, and inspect the result at the size where someone will actually see it. Look for the things a text prompt hides: a heading that dominates too much, a call to action that disappears, or a paragraph that makes the composition drag.

Then re-prompt against the visible result. Keep the loop small:

1. Describe one section and its job.
2. Render it on the canvas.
3. Inspect hierarchy, spacing, and reading order.
4. Revise the same nodes instead of starting over.

```prompt Review one section on the canvas
Open this Paper page: [PAPER PAGE URL]
Work only on: [SECTION OR SELECTED FRAME]

The section's job is to: [PRIMARY PURPOSE]
The primary audience is: [AUDIENCE]
Review it at: [TARGET VIEWPORT]

Inspect the current layout before editing. Evaluate:
- whether the intended element is visually dominant;
- whether the reading order is obvious;
- whether spacing groups related content and separates different ideas;
- whether the call to action is easy to find;
- whether any text block makes the composition feel unbalanced.

Propose the three highest-leverage changes, then revise the existing nodes rather than rebuilding the section. After the edit, take another look at the full frame and summarize what improved, what still feels unresolved, and what I should judge for myself on the canvas.
```

This is the useful mental model: Paper is a code-to-pixels bridge shared with the agent. The canvas gives both of you something concrete to judge.

[Community workflow on X](https://x.com/seniorbrusko/status/2086803015479304199)
