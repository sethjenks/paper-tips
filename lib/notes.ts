import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { marked, Renderer, type Tokens } from "marked";

const notesDirectory = path.join(process.cwd(), "content", "notes");
const defaultRenderer = new Renderer();
const cmdKeyEmbed = '<div data-note-embed="cmd-key"></div>';
const embedPattern = /<div data-note-embed="(cmd-key|image)"([^>]*)><\/div>/g;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function unescapeHtml(value: string): string {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&");
}

function htmlAttr(tag: string, name: string): string {
  const match = new RegExp(`\\b${name}="([^"]*)"`, "i").exec(tag);
  return match ? unescapeHtml(match[1]) : "";
}

function imageEmbed(src: string, alt: string, variant: "study" | "default"): string {
  return `<div data-note-embed="image" data-src="${escapeHtml(src)}" data-alt="${escapeHtml(alt)}" data-variant="${variant}"></div>`;
}

function hoistNoteImages(html: string): string {
  return html
    .replace(/<figure class="note-study">\s*<img\b([^>]*)\/?>\s*<\/figure>/gi, (_all, attrs: string) =>
      imageEmbed(htmlAttr(attrs, "src"), htmlAttr(attrs, "alt"), "study"),
    )
    .replace(/<p>\s*<img\b([^>]*)\/?>\s*<\/p>/gi, (_all, attrs: string) =>
      imageEmbed(htmlAttr(attrs, "src"), htmlAttr(attrs, "alt"), "default"),
    );
}

const noteRenderer = new Renderer();
noteRenderer.code = (token: Tokens.Code) => {
  const [language, ...labelParts] = (token.lang ?? "").trim().split(/\s+/);

  if (language === "key-demo") {
    return cmdKeyEmbed;
  }

  if (language !== "prompt") {
    return defaultRenderer.code(token);
  }

  const label = labelParts.join(" ") || "Reusable prompt";
  return [
    '<div class="prompt-block">',
    '<div class="prompt-header">',
    `<span>${escapeHtml(label)}</span>`,
    '<button class="copy prompt-copy" type="button" data-prompt-copy aria-live="polite">Copy prompt</button>',
    "</div>",
    `<pre><code>${escapeHtml(token.text.trim())}</code></pre>`,
    "</div>",
  ].join("");
};

export interface NoteSummary {
  date: string;
  guideHref?: string;
  guideLabel?: string;
  image: string;
  imageAlt: string;
  imageCredit?: string;
  imageCreditHref?: string;
  slug: string;
  source?: string;
  summary: string;
  title: string;
}

export interface Note extends NoteSummary {
  html: string;
}

export type NoteBlock =
  | { kind: "html"; html: string }
  | { kind: "cmd-key" }
  | { kind: "image"; src: string; alt: string; variant: "study" | "default" };

export const noteImageSizes =
  "(max-width: 600px) calc(100vw - 88px), (max-width: 1079px) calc(100vw - 148px), 790px";

export function studyImageSrcSet(src: string): string {
  return `${src.replace(/\.webp$/, "-1200.webp")} 1200w, ${src} 1600w`;
}

export function getNoteBlocks(html: string): NoteBlock[] {
  const prepared = hoistNoteImages(html);
  const blocks: NoteBlock[] = [];
  let lastIndex = 0;

  for (const match of prepared.matchAll(embedPattern)) {
    const index = match.index ?? 0;
    const before = prepared.slice(lastIndex, index);

    if (before) {
      blocks.push({ kind: "html", html: before });
    }

    const kind = match[1];
    if (kind === "cmd-key") {
      blocks.push({ kind: "cmd-key" });
    } else {
      const attrs = match[2];
      const variant = htmlAttr(attrs, "data-variant") === "study" ? "study" : "default";
      blocks.push({
        kind: "image",
        src: htmlAttr(attrs, "data-src"),
        alt: htmlAttr(attrs, "data-alt"),
        variant,
      });
    }

    lastIndex = index + match[0].length;
  }

  const rest = prepared.slice(lastIndex);
  if (rest) {
    blocks.push({ kind: "html", html: rest });
  }

  return blocks;
}

function assertString(value: unknown, field: string, slug: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Note "${slug}" is missing a valid ${field}`);
  }

  return value;
}

function optionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() !== "" ? value : undefined;
}

function parseDate(value: unknown, slug: string): string {
  if (value instanceof Date && !Number.isNaN(value.valueOf())) {
    return value.toISOString().slice(0, 10);
  }

  const date = assertString(value, "date", slug);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(`Note "${slug}" must use an ISO date (YYYY-MM-DD)`);
  }

  return date;
}

function readNoteFile(slug: string): Note & { draft: boolean } {
  const filePath = path.join(notesDirectory, `${slug}.md`);
  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);
  const source =
    typeof data.source === "string" && data.source.trim() !== "" ? data.source : undefined;

  return {
    slug,
    title: assertString(data.title, "title", slug),
    date: parseDate(data.date, slug),
    guideHref: optionalString(data.guideHref),
    guideLabel: optionalString(data.guideLabel),
    image: assertString(data.image, "image", slug),
    imageAlt: assertString(data.imageAlt, "imageAlt", slug),
    imageCredit: optionalString(data.imageCredit),
    imageCreditHref: optionalString(data.imageCreditHref),
    summary: assertString(data.summary, "summary", slug),
    source,
    draft: data.draft === true,
    html: marked.parse(content, { async: false, renderer: noteRenderer }) as string,
  };
}

export function getAllNotes(): NoteSummary[] {
  return fs
    .readdirSync(notesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => readNoteFile(fileName.slice(0, -3)))
    .filter((note) => !note.draft)
    .map(({ html: _html, draft: _draft, ...note }) => note)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNote(slug: string): Note | null {
  const filePath = path.join(notesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const { draft, ...note } = readNoteFile(slug);
  return draft ? null : note;
}
