---
title: The lamp sits in a well
date: 2026-09-03
draft: true
summary: The blue indicator is not a sticker. It lives in a recessed socket that is already there when the light is off.
image: /images/notes/command-key-lamp.webp
imageAlt: A dark Command key with a blue lamp glowing from a socket beneath it.
source: https://app.paper.design/file/01M1FJH8SCMNNFHRXW4J8FBV11/1-0/X0-0
guideHref: /#color
guideLabel: Color & tokens
---

Click the key to toggle the lamp; it stays seated in the well, and hover only changes the lighting. When it is off, that same 26px circle is a slightly recessed pit. When it is on, the well fills with a stacked LED and the cap picks up a blue lip.

```key-demo
```

I rebuilt both states from the Paper layers instead of tracing a screenshot. The off well, the on lamp, the floor spill, and the inset blue on the cap all share one origin: 167×409 on a 360×366 key. Toggle only swaps which stack is visible. The cap only travels when you press it.

The grain is a tiled overlay at 12% on the cap and 8% on the ground, which is what keeps the `oklab` vignette from banding. The same color-as-a-system idea shows up in [Color & tokens](/#color).
