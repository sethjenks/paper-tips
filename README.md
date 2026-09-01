# Paper.tips

An unofficial field guide to [Paper](https://paper.design) — every shortcut worth knowing, plus the tips and gotchas the shortcut list leaves out. One static HTML file, styled after paper.design itself and laid out like a Paper canvas. Destined for the **paper.tips** domain (owned, not yet deployed).

Made by Seth Jenks ([@sethjenks](https://x.com/sethjenks)). Not affiliated with or endorsed by Paper or Figma.

## For agents: read this before editing

This project looks like "just an HTML file" but carries a measured design contract and a fact-checking discipline. Changes that break either will be noticed.

### Architecture

- **`index.html` is the entire site.** No build step, no dependencies, no framework. Inline CSS and vanilla JS. Google Fonts (Inter + Geist Mono) is the only external request.
- Preview: `python3 -m http.server` from this folder. Nothing else to run.

### The design contract (do not drift)

Every value below was **sampled from the live paper.design site or computed against WCAG**, not invented. They live as CSS custom properties in `:root` — always style through the tokens, never with literals.

| Constraint | Value | Why |
|---|---|---|
| Surfaces | exactly 3: `--sunk #131313`, `--bg #181818`, `--panel #1E1E1E` | collapsed from 6 near-identical greys in a design critique |
| Text tiers | exactly 3: `--ink`, `--muted`, `--label` | every tier ≥ 4.5:1 (WCAG AA) on every surface it sits on; worst is `--label` on panel at 4.64:1 |
| Decoration-only colors | `--faint`, `--line`, `--line-2` | **never carry text** — they fail AA on purpose |
| Font sizes | exactly 7: 11 / 12.5 / 14 / 16 / 19 / 25 / 64px (`--t-*` tokens) | collapsed from 18 |
| Font weights | exactly 3: 360 / 400 / 550 (`--w-*` tokens) | 700 is banned — check any `<strong>`/`<b>` you add inherits 550 |
| Radii | 3: 4 / 8 / 999px (+ `50%` for genuine circles) | |
| Accent | `#86B9FF` (Paper periwinkle), used sparingly | ~10 text uses across the whole page; don't spend it |
| Theme | dark-only, deliberately | matches Paper's identity; every color painted explicitly, no `prefers-color-scheme` |

**Cascade trap that has bitten before:** the base `footer` (and similar late rules) sit *after* the `@media (min-width:1080px)` block. A property set in both places resolves by source order, not by "media query wins." Check where your rule lands.

### Verification gate

After any visual change, serve the page and run the gate in the browser console. It asserts:

1. ≤ 7 distinct rendered `font-size` values; exactly 3 `font-weight` values; zero 700s
2. Every text node ≥ 4.5:1 contrast against its effective background (walk up ancestors for the first opaque `background-color`; skip `[aria-hidden]`)
3. No broken `<use href>` refs and no orphaned `<symbol>`s in the icon sprite
4. Quick-card cells centred (space above content == space below, ±1px)
5. `buildCardSVG()` output parses cleanly via `DOMParser` (`image/svg+xml`, no `parsererror`)

Check at 1400px, 900px, and 390px widths; also 360px (single-column nav) and 375–413px (nav numbers hidden — breakpoints are measured against the widest label, "Color & tokens" at 99px).

### Content rules (this is a reference; facts are load-bearing)

- **Never invent a shortcut.** The canonical source is the shortcut list on [paper.design/docs/support](https://paper.design/docs/support); secondary sources are the [build log](https://paper.design/build-log) and other docs pages. Verify against the live source before adding — user-suggested shortcuts get verified too (this process has caught three errors already: zoom presets, opacity keys, paste-to-replace).
- Shortcuts are macOS notation: `⌘ ⌥ ⇧` via HTML entities (`&#8984;` `&#8997;` `&#8679;`).
- Warning tip-cards carry the `#ic-warn` triangle — it's the **only** icon allowed in that slot, so it stays meaningful. Regular tips get no icon.

### Page anatomy

- **Ruler** — sticky top strip mimicking Paper's canvas ruler
- **Masthead** — `Paper.tips` wordmark + lede; the eyebrow credits paper.design with its logo
- **The Twelve** (`.quickcard`) — one-screen grid of the 12 core shortcuts; header has "copy as svg", and `@media print` renders *only* this card as a one-pager
- **Contents** (`.pagenav`, mobile-only ≤1079px) / **Layers rail** (`.rail`, desktop) — same 11 sections, same icons; scrollspy sets `aria-current`
- **11 artboard sections** — each a `.ab-frame` with corner registration ticks; `#type` has `.featured` (accent label, filled ground, extra air — deliberately *not* wider; a width bleed was tried and removed)
- **"high leverage" band** (`.startbar`) — sits directly above `#type` as its lead-in
- **Footer** — attribution, trademark notice, byline centred in symmetric 64px gaps

### The JS (all vanilla, ~150 lines)

1. **Scrollspy** — IntersectionObserver marking the rail's current section
2. **Copy handlers** — `[data-copy]` (terminal command, inline `.cmd` buttons) and `[data-copy-svg]`; clipboard API with `execCommand` fallback and a visible "press ⌘C" failure state (never fail silently)
3. **`buildCardSVG()`** — serialises the quick card from the live DOM into pure `<rect>`/`<text>` SVG (no foreignObject, no raster) so it pastes into Figma/Paper as editable layers. Font-family attributes must NOT contain escaped quotes; the credit line has its own reserved band below the grid.

### Brand marks

`#ic-paper` (interlocking L's) and `#ic-figma` (five shapes, **current** 2024+ palette: `#FF3737 #874FFF #00B6FF #24CB71 #FF7237` — not the legacy set) are inline symbols, used nominatively. In the nav lists the Figma mark is desaturated via `filter:grayscale(1)` so it sits with the monochrome icons; full colour only in the section header. Don't add the Paper mark as the favicon — that placement implies official status.

### History & related

- Design-iteration history (baseline → critique → polish) lives in the `life-os` vault repo, branch `paper-guide-polish`; pre-critique baseline on its `master`.
- A shareable preview is published as a Claude artifact (same content, wrapper tags stripped).
- Content compiled September 2026; shortcut count and "compiled" date in the page should move together when updating.
