---
title: Paper Texture 2.0 for tactile backgrounds
date: 2026-11-02
draft: true
summary: Three-color schemes, wrinkles, and roughness rows make the Paper Texture shader feel like real stock. Start subtle.
image: /images/notes/paper-texture-2.webp
imageAlt: A warm off-white Paper Texture 2.0 shader with soft creases and faint grid-like grain behind a headline.
source: https://paper.design/build-log
---

Paper Texture 2.0 is September's shader of the month, and it is the easiest way to make a flat background feel printed.

What is new, per the build log: **three-color schemes**, a **wrinkles** property, and **roughness rows** for grid-like grain. Creases are softer, image edges cleaner, fold lines smoother, and it runs faster.

How to use it well:

- **Three colors, close values.** Pick a base, a slightly darker shadow, and a slightly lighter highlight. Big jumps look like a filter. Small ones look like paper.
- **Wrinkles low for UI, high for posters.** Behind body text, keep it barely there. On a cover or hero, push it until the folds tell a story.
- **Roughness rows for a ledger feel.** The grid-like grain reads like notebook or newsprint stock. Nice for editorial and receipt-style layouts.
- **Check text contrast last.** Texture adds noise. Zoom out and make sure the headline still reads.

Sources: [Paper build log, September 2026](https://paper.design/build-log). See also the Guide's [shaders section](/guide#shaders).
