---
title: Ask your agent for images on the canvas
date: 2026-11-02
draft: true
summary: Paper MCP can now generate images, so your agent can fill hero slots and placeholders while it builds the layout.
image: /images/notes/image-generation-via-mcp.webp
imageAlt: A Paper landing page layout where an agent has placed a generated hero image into an empty frame.
source: https://paper.design/build-log
---

Your agent can now generate images in Paper through the MCP. No more gray boxes waiting for art while the agent lays out the page.

Easiest test, straight from the [MCP docs](https://paper.design/docs/mcp): ask it to "Generate an image of a beautiful sunset in Paper."

Better in practice: select the frame you want filled, then describe the image in terms of the layout. Size, mood, and what should stay clear for text.

```prompt Fill an image slot
Using Paper MCP, generate an image on the canvas for the frame I have selected.
Match the frame's size and aspect ratio. Subject: [describe the subject].
Mood: [e.g. warm, editorial, soft daylight]. Keep the left third quiet so a headline can sit over it.
Name the layer clearly, then show me the result before you touch anything else.
```

Tip: treat agent images as drafts for composition. Swap in final art (or re-prompt) once the layout is approved.

Sources: [Paper build log, September 2026](https://paper.design/build-log), [Paper MCP docs](https://paper.design/docs/mcp). See also the Guide's [MCP section](/guide#mcp).
