import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";
import { marked, Renderer, type Tokens } from "marked";

const notesDirectory = path.join(process.cwd(), "content", "notes");
const defaultRenderer = new Renderer();

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const noteRenderer = new Renderer();
noteRenderer.code = (token: Tokens.Code) => {
  const [language, ...labelParts] = (token.lang ?? "").trim().split(/\s+/);

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
  image: string;
  imageAlt: string;
  slug: string;
  source?: string;
  summary: string;
  title: string;
}

export interface Note extends NoteSummary {
  html: string;
}

function assertString(value: unknown, field: string, slug: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Note "${slug}" is missing a valid ${field}`);
  }

  return value;
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

function readNoteFile(slug: string): Note {
  const filePath = path.join(notesDirectory, `${slug}.md`);
  const file = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(file);
  const source =
    typeof data.source === "string" && data.source.trim() !== "" ? data.source : undefined;

  return {
    slug,
    title: assertString(data.title, "title", slug),
    date: parseDate(data.date, slug),
    image: assertString(data.image, "image", slug),
    imageAlt: assertString(data.imageAlt, "imageAlt", slug),
    summary: assertString(data.summary, "summary", slug),
    source,
    html: marked.parse(content, { async: false, renderer: noteRenderer }) as string,
  };
}

export function getAllNotes(): NoteSummary[] {
  return fs
    .readdirSync(notesDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => readNoteFile(fileName.slice(0, -3)))
    .map(({ html: _html, ...note }) => note)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNote(slug: string): Note | null {
  const filePath = path.join(notesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return readNoteFile(slug);
}
