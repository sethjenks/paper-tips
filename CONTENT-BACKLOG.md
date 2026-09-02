# Content backlog

Community how-tos pulled from X, filed here as **candidate tips** — not live-page copy.

GitHub issues on this repo are the preferred backlog. This file is the fallback: the environment that filed these could list issues and labels, but could not create issues (no triage permission). Promote each item below to an issue when you can. Use the existing `documentation` label; add `enhancement` only when an item is ready to become a page change. Do not invent new labels.

**Do not ship any of these onto `app/page.tsx` until they are verified.** AGENTS.md: never invent a shortcut; confirm against [paper.design/docs/support](https://paper.design/docs/support), the [build log](https://paper.design/build-log), other docs, and the live product.

Already on the live guide (skip / don't duplicate): Paper Snapshot as editable layers; HTML pastes as layers; Snapshot of localhost needs CORS; MCP setup (Desktop local server at `127.0.0.1:29979/mcp`, Claude Code / Claude Desktop); what agents can do; wrong-file (MCP targets the active file); stale-connection restart order; Figma paste transfer list; Figma images need the browser extension; tokens from codebase via MCP; code export as React/Tailwind.

Quick fact-check while filing (September 2026) — not a full verification pass:

- Snapshot is officially a **browser extension**, not an agent tool. Docs: [paper.design/snapshot-extension](https://paper.design/snapshot-extension). Downloads page: “Copy and paste web components directly into Paper as editable layers. No more screenshots!” Build log: “Paper Snapshot: copy any webpage into Paper as editable layers.” Activate with Shift+⌘+P (or the toolbar icon); ⌘V pastes into a Paper file. Build log also notes ⌘Enter captures the full page — confirm before treating that as a guide shortcut.
- `get_guide` **is** listed on the official MCP tools page: “Retrieve guided workflows for topics (e.g. figma-import for Figma import steps).” Source: [paper.design/docs/mcp](https://paper.design/docs/mcp).
- Official MCP docs now document **Codex** (Settings → MCP Servers → Streamable HTTP, name `paper`, URL `http://127.0.0.1:29979/mcp`), plus Copilot, Antigravity, and OpenCode. The live page only shows Claude Code / Claude Desktop.

---

## 1. Snapshot is a browser extension — don't ask the agent to do it

**Suggested section:** Figma & paste (`#figma`) / Snapshot tips.

**The tip.** Snapshot copies a live site into Paper as editable HTML/CSS layers, not a screenshot. It is a browser extension the human runs (Shift+⌘+P, pick a target, paste). Do not ask the agent to “do Snapshot.” If the agent can see Storybook, tell it to use those components, and Snapshot the Storybook UI into Paper yourself.

**Why it belongs.** The live page already says Snapshot copies a webpage as editable layers and that localhost needs CORS. It does **not** say Snapshot is extension-only (agents cannot invoke it), and it does not mention the Storybook workflow. Those are the new gotchas.

**Sources**

- https://x.com/stephenhaney/status/2036485780961669214 — official Snapshot launch: live website → editable layers; real HTML/CSS; not a screenshot.
- https://x.com/stephenhaney/status/2089818566992535973 — Stephen Haney: “Snapshot is a browser extension that you use to copy/paste your site, there's no AI involved.”
- https://x.com/stephenhaney/status/2092025630946992172 — if the agent can see Storybook, ask it to use those components; also Snapshot Storybook into Paper.

**Verification checklist**

- [ ] Confirm wording against [snapshot-extension](https://paper.design/snapshot-extension) and [downloads](https://paper.design/downloads) (already: extension, element capture, Shift+⌘+P, paste).
- [ ] Confirm against the [build log](https://paper.design/build-log) Snapshot entries (already: “copy any webpage into Paper as editable layers”; later: OpenType features; ⌘Enter full-page capture).
- [ ] Confirm in the live product that there is no MCP/agent Snapshot tool.
- [ ] Confirm Storybook is a recommended workflow, not just a tweet suggestion. No official Storybook page found while filing.
- [ ] Do not restate the CORS localhost warning; it is already on the page.
- [ ] Distinguish Snapshot’s extension from the existing “Figma images need the browser extension” tip — different extension, different job.

---

## 2. Paste the Paper page link and the brand site, plan first, then scrape copy

**Suggested section:** MCP & agents (`#mcp`), as a workflow tip.

**The tip.** In Cursor, paste the Paper page URL you want worked on plus the brand’s website. Have the agent write a plan first (so it can ask clarifying questions), then scrape real copy from the brand site into micro-graphics already on the page.

**Why it belongs.** This is Seth’s own Cursor + Paper workflow, not a shortcut. The live MCP section has generic “workflow ideas” (Figma tokens, Notion content, React/Tailwind) but not this plan-then-scrape pattern.

**Sources**

- https://x.com/sethjenks/status/2092671597849239792 — prompt: Paper page link + brand site; make a plan first so the agent can ask questions.
- https://x.com/sethjenks/status/2092595841441919445 — Cursor scraped the brand site and filled default copy in Paper micro-graphics.

**Verification checklist**

- [ ] Confirm against [docs/mcp](https://paper.design/docs/mcp) that agents can update text on selected/existing nodes (`set_text_content` is listed).
- [ ] Confirm in the live product that a Paper file/page URL is enough context for the MCP to target the right canvas (or whether you still need the file open — the page already warns MCP targets the *active* file).
- [ ] Phrase as a workflow tip, not a shortcut. No new key bindings.
- [ ] Keep first-person / “Seth’s workflow” attribution if it ships; this is not an official Paper recipe.

---

## 3. Keep Connect Agent up and point Cursor, Claude Code, and Codex at the same canvas

**Suggested section:** MCP & agents (`#mcp`) — setup / living with it.

**The tip.** Leave Paper’s Connect Agent UI up so you can attach another client without hunting. Point Cursor, Claude Code, and Codex at the same open canvas. Codex is a first-class MCP client: Paper Desktop + MCP, then drive the canvas from Codex.

**Why it belongs.** Setup on the live page covers Claude Code and Claude Desktop only. Codex as a client, and the “keep Connect Agent visible / several clients on one file” habit, are new. Do not re-document the localhost URL or the Claude install commands.

**Sources**

- https://x.com/just_kaz/status/2085762830847111473 — Connect Agent stays up so you can connect another agent; Cursor, Claude Code, and Codex at once.
- https://x.com/marvinkennis/status/2094642799622623275 — install Paper Desktop, add the MCP, interact through Codex.

**Verification checklist**

- [ ] Official [docs/mcp](https://paper.design/docs/mcp) already has a **Connect to Codex** section (Settings → MCP Servers → Streamable HTTP → name `paper` → `http://127.0.0.1:29979/mcp`). Record the official steps, not the tweet’s.
- [ ] Same docs also list Copilot, Antigravity, and OpenCode. Decide whether the tip is “Codex” or “any Streamable HTTP client” — don’t invent a client list from tweets alone.
- [ ] Confirm “Connect Agent” is the current product name in the live Desktop UI.
- [ ] Confirm multiple MCP clients can write the same open file without clobbering (presence is already documented; concurrent-edit behavior is not).
- [ ] Build log: confirm if Codex / multi-client notes exist (none spotted while filing).

---

## 4. Go Figma → Paper → the agent, not Figma-to-code

**Suggested section:** MCP & agents (`#mcp`), with a pointer from Figma & paste (`#figma`).

**The tip.** Import or paste Figma into Paper, then drive Codex or Claude Code through Paper’s MCP. Paper is the middle of the loop — not a Figma-to-code plugin. One reported pipeline: Claude Design → Paper MCP → edit on the canvas → export; next time start in Paper and skip the design-chat step.

**Why it belongs.** The live page covers Figma paste fidelity and “convert canvas designs into React and Tailwind.” It does not spell the recommended direction (Figma *into* Paper, then Paper *out* to the agent) or the “start in Paper next time” habit.

**Sources**

- https://x.com/dezign_ash/status/2092523293316407736 — Figma → Paper, then Paper → Codex or Claude Code via MCP.
- https://x.com/justraud/status/2085294596729229382 — hand off Claude Design to Claude Code; connect Paper MCP; transfer assets to Paper; edit; export. Next time skip Claude Design and use Paper.

**Verification checklist**

- [ ] [docs/mcp](https://paper.design/docs/mcp) already documents Figma-MCP → Paper token sync and “building a website from a design.” Align wording with those recipes; don’t invent a third path.
- [ ] Confirm `get_guide` topic `figma-import` (listed in official tools) covers the Figma → Paper step.
- [ ] Confirm against the [build log](https://paper.design/build-log) and live paste behavior; the page already lists what doesn’t transfer.
- [ ] “Claude Design” is Anthropic’s design surface — confirm the product name and that the pipeline still applies before naming it on the guide.
- [ ] Do not restate the existing React/Tailwind export tip; this item is about *where* the agent should read from.

---

## 5. Ask the agent to call get_guide()

**Suggested section:** MCP & agents (`#mcp`), next to the existing `get_basic_info` tip.

**The tip.** Paper’s MCP exposes `get_guide()`, which returns guided workflows / best practices for a topic (official example: `figma-import`). Ask the agent to call it when starting a new kind of task, the same way the page already tells people to call `get_basic_info` to confirm the active file.

**Why it belongs.** The live page documents `get_basic_info` and a capability list, but not `get_guide`. Community report framed it as “a bit like a skill.”

**Sources**

- https://x.com/o_kwasniewski/status/2089698579690795372 — implement a `get_guide()` tool that gives the agent best practices; seen in Paper Design.

**Verification checklist**

- [x] Tool name **confirmed** on [docs/mcp](https://paper.design/docs/mcp): `get_guide` — “Retrieve guided workflows for topics (e.g. figma-import for Figma import steps).”
- [ ] Confirm the callable topic list in the live MCP / Desktop (only `figma-import` is named in docs).
- [ ] Confirm what the tool returns (markdown? steps?) so the guide doesn’t over-claim “best practices.”
- [ ] Confirm in a live agent session that asking “call get_guide” actually invokes it (agents sometimes hallucinate tool names — the MCP docs mention this).
- [ ] Build log: no `get_guide` mention found while filing.

---

## 6. Agents are same-page; missing UI is still CSS; use Paper for layout judgment

**Suggested section:** MCP & agents (`#mcp`) gotchas, plus a one-line mental model in the section lede if it earns the accent.

**The tip.** Agents work best on the page you are on; cross-page is weak (they can work on a *different file* without that problem). If node edits look broken, update Paper, then restart Paper and the agent. If a control is missing from the UI (example given: background-repeat), ask the agent to set the CSS anyway — agents can write any CSS. Use Paper for the layout judgment the code loop can’t see: describe a section, render, spot hierarchy, re-prompt. Mental model: Paper is a code↔pixels bridge you share with the agent, not an isolated Figma canvas.

**Why it belongs.** The page already covers “wrong file” and “stale connection” (restart agent session first, then Desktop). These are different: same-page vs cross-page, CSS-beyond-the-UI, and *why* you design on the canvas instead of only prompting. Slightly richer framing of agents, not a duplicate of the restart tip.

**Sources**

- https://x.com/stephenhaney/status/2092725914924978361 — update Paper, then restart Paper + the agent; agents work best on the same page (cross-page support is in progress); they can work on an entirely different file.
- https://x.com/stephenhaney/status/2086845890535600165 — missing UI control; workaround: ask the agent to set it (“they can write any CSS”).
- https://x.com/seniorbrusko/status/2086803015479304199 — layout judgment is the slow part; describe → render → spot hierarchy → re-prompt; let the agent draw on the canvas through MCP. Also: https://ajvillalobos.com/blog/design-on-a-canvas-not-in-a-prompt
- https://x.com/hussamfyi/status/2091923657039757632 — not an isolated Figma canvas; a bridge between code and pixels; code as source of truth; MCP is core.

**Verification checklist**

- [ ] Confirm same-page / weak cross-page against [docs/mcp](https://paper.design/docs/mcp) and the live product. Docs currently stress the *active file*, not pages-within-a-file.
- [ ] Confirm node-edit recovery: docs’ default is “restart the agent session first, then the host / Desktop.” Stephen’s tweet says update Paper, then restart Paper + agent. Do not contradict the page’s restart order unless the live product disagrees.
- [ ] Confirm in the live UI whether `background-repeat` (or the control that tweet was about) is still missing; don’t name a shipped control as missing.
- [ ] Confirm `update_styles` / write-any-CSS against the MCP tools list (already: `update_styles` — “Update CSS styles on one or more nodes”).
- [ ] Treat the mental model and layout-loop posts as commentary, not official docs. Pull a gotcha, not a manifesto.
- [ ] Build log: no same-page / background-repeat notes found while filing.

---

## 7. Research source — TK Kong, “AI-Native Design with Paper”

**Suggested section:** none. This is a source to mine later, not a tip to copy onto the page.

**The item.** [@tkkong](https://x.com/tkkong/status/2034368184036561160) published a long guide titled **“AI-Native Design with Paper.”** Use it as a research input for future backlog items. Do not lift tips from the thread onto the live guide without verifying each claim against official docs / the build log / the live product.

**Why it belongs.** One dense community source beats a pile of unverified one-off tweets. Filing it separately keeps it from being treated as ready copy.

**Sources**

- https://x.com/tkkong/status/2034368184036561160 — article title from X: “Guide: AI-Native Design with Paper.”

**Verification checklist**

- [ ] Read the full guide. Extract candidate tips only after checking each one against [docs](https://paper.design/docs), the [build log](https://paper.design/build-log), and the live product.
- [ ] Skip anything already covered on the live page (see the skip list at the top of this file).
- [ ] File any keepers as their own backlog items in this format — do not dump the thread into `#mcp`.
