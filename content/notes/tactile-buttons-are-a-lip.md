---
title: Tactile buttons are a lip, not a shadow
date: 2026-09-03
draft: true
summary: Rebuilding one small button exposed the four-layer stack that makes a flat CSS rectangle feel molded.
image: /images/notes/tactile-refresh.webp
imageAlt: Dark and light Refresh buttons centered on matching charcoal and pale gray surfaces.
source: https://app.paper.design/file/01M1FJH8SCMNNFHRXW4J8FBV11/1-0/MB-0
guideHref: /#color
guideLabel: Color & tokens
---

I rebuilt these two Refresh buttons from their computed styles instead of tracing the pixels. The important discovery was simple: the tactile effect is not two soft shadows. It is a **crisp 4px lip**, supported by two inset highlights and one blurred contact shadow.

<div class="tactile-demo" role="group" aria-label="Interactive dark and light Refresh button recreations">
  <div class="tactile-demo__panel tactile-demo__panel--dark">
    <button class="tactile-button tactile-button--dark" type="button">
      <svg viewBox="0 0 14 18" width="14" height="18" aria-hidden="true">
        <path d="M6.632 0L8.842 2.571L6.632 5.143M7.368 12.857L5.158 15.429L7.368 18M5.526 15.429H8.474C11.526 15.429 14 12.55 14 9C14 6.897 13.132 5.03 11.79 3.857M8.474 2.571H5.526C2.474 2.571 0 5.45 0 9C0 11.103 .868 12.97 2.21 14.143" />
      </svg>
      <span>Refresh</span>
    </button>
  </div>
  <div class="tactile-demo__panel tactile-demo__panel--light">
    <button class="tactile-button tactile-button--light" type="button">
      <svg viewBox="0 0 14 18" width="14" height="18" aria-hidden="true">
        <path d="M6.632 0L8.842 2.571L6.632 5.143M7.368 12.857L5.158 15.429L7.368 18M5.526 15.429H8.474C11.526 15.429 14 12.55 14 9C14 6.897 13.132 5.03 11.79 3.857M8.474 2.571H5.526C2.474 2.571 0 5.45 0 9C0 11.103 .868 12.97 2.21 14.143" />
      </svg>
      <span>Refresh</span>
    </button>
  </div>
</div>

Press either button. I added that 2px travel for this demo; the source only supplied its resting state. I also made the labels fully opaque and used this site's 550 strong weight instead of the source's 500 so the note keeps the guide's contrast and three-weight contracts.

## The stack

![Four cumulative stages show the hard inset rim, soft inner glow, solid lip, and contact shadow.](/images/notes/tactile-refresh-anatomy.webp)

The face is a barely visible top-to-bottom `oklab` wash. Above it sit two highlights: a half-pixel hard rim and a softer inset glow. Below it, the zero-blur lip creates thickness. The final blurred shadow only seats that object on the ground.

```css
.refresh {
  height: 49px;
  padding: 1px 20px 0 18px;
  border: 0;
  border-radius: 14px;
  overflow: clip;
  display: flex;
  align-items: center;
  gap: 7px;
  font: 500 16px/20px Inter, sans-serif;
  background: linear-gradient(
    in oklab 180deg,
    oklab(30.9% -.0006 -.019),
    oklab(26.3% -.003 -.018)
  );
  box-shadow:
    #58667b54 .5px 1px 0 inset,
    #58667b8c 0 .2px 1px .5px inset,
    #191e27 0 4px 0,
    #0e1116b0 0 8px 12px -2px;
}
```

## What I learned

1. **The ground is part of the button.** The dark lip steps toward `#14181E`; the light lip steps toward `#C8CFD5`. Move either button to an unrelated surface and the material illusion weakens.
2. **Padding is optical, not mathematical.** The icon is 14×18 and sits left of the word, so the button uses 18px on the left and 20px on the right. One extra pixel on top counters the visual weight below.
3. **Cap-height alignment matters at this scale.** `text-box-trim: trim-both` and `text-box-edge: cap alphabetic` center the visible letters instead of the font's larger em box.
4. **The icon is treated differently in each theme.** Dark mode uses `plus-lighter` at 45% opacity to borrow light from the face. Light mode uses normal blending at 60%; the same blend would wash it out.
5. **Clipping is structural.** `overflow: clip` keeps both inset highlights inside the 14px molded edge.

Paper preserved the fractional shadows, `oklab` gradients, blend mode, and text-box trimming when I rebuilt the pair. That is the broader lesson: when the canvas is based on HTML and CSS, recreating a component can be a round trip through its actual construction rather than an approximation from a screenshot. The same color-as-a-system principle shows up in [Color & tokens](/#color).
