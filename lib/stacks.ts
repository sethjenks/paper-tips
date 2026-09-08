import fs from "node:fs";
import path from "node:path";

const blocksDirectory = path.join(process.cwd(), "content", "blocks");
const stacksDirectory = path.join(process.cwd(), "content", "stacks");
const pinnedStackId = "paper-dock-hero";

const blockKinds = [
  "app",
  "mcp",
  "agent",
  "model",
  "skill",
  "host",
  "service",
  "other",
] as const;

const stackStatuses = ["verified", "inferred", "proposed"] as const;
const chipHrefKeys = ["docs", "mcp", "home"] as const;
const outboundLinkOrder = [
  ["docs", "Docs"],
  ["mcp", "MCP"],
  ["home", "Home"],
  ["github", "GitHub"],
] as const;

export type BlockKind = (typeof blockKinds)[number];
export type StackStatus = (typeof stackStatuses)[number];
export type BlockLinkKey = (typeof chipHrefKeys)[number] | "github";

export interface BlockLinks {
  docs?: string;
  mcp?: string;
  home?: string;
  github?: string;
}

export interface Block {
  id: string;
  name: string;
  kind: BlockKind;
  summary: string;
  links: BlockLinks;
}

export interface StackBlockRef {
  optional?: boolean;
  ref: string;
  role: string;
}

export interface StackMetrics {
  bookmarks?: number;
  captured?: string;
  impressions?: number;
  likes?: number;
  replies?: number;
  reposts?: number;
}

export interface StackSource {
  author: {
    handle: string;
    name?: string;
    profile_url?: string;
  };
  metrics?: StackMetrics;
  platform: "x";
  posted_at?: string;
  quote?: string;
  url: string;
}

export interface Stack {
  blocks: StackBlockRef[];
  id: string;
  outcome: string;
  paper_related: boolean;
  source: StackSource;
  status: StackStatus;
  summary?: string;
  tags?: string[];
  title: string;
}

export interface ResolvedStackBlock extends StackBlockRef {
  block: Block;
}

export interface ResolvedStack extends Omit<Stack, "blocks"> {
  blocks: ResolvedStackBlock[];
}

export interface BlockOutboundLink {
  href: string;
  label: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function assertString(value: unknown, field: string, id: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`"${id}" is missing a valid ${field}`);
  }

  return value.trim();
}

function optionalString(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() !== "" ? value.trim() : undefined;
}

function optionalBoolean(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined;
}

function optionalInteger(value: unknown, field: string, id: string): number | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
    throw new Error(`"${id}" has an invalid ${field}`);
  }

  return value;
}

function readJsonFile(filePath: string, id: string): Record<string, unknown> {
  const parsed: unknown = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (!isRecord(parsed)) {
    throw new Error(`"${id}" must be a JSON object`);
  }

  return parsed;
}

function parseBlockKind(value: unknown, id: string): BlockKind {
  if (typeof value === "string" && (blockKinds as readonly string[]).includes(value)) {
    return value as BlockKind;
  }

  throw new Error(`Block "${id}" has an invalid kind`);
}

function parseStackStatus(value: unknown, id: string): StackStatus {
  if (typeof value === "string" && (stackStatuses as readonly string[]).includes(value)) {
    return value as StackStatus;
  }

  throw new Error(`Stack "${id}" has an invalid status`);
}

function parseBlockLinks(value: unknown, id: string): BlockLinks {
  if (!isRecord(value)) {
    throw new Error(`Block "${id}" is missing links`);
  }

  const links: BlockLinks = {
    docs: optionalString(value.docs),
    mcp: optionalString(value.mcp),
    home: optionalString(value.home),
    github: optionalString(value.github),
  };

  for (const [key, href] of Object.entries(value)) {
    if (key === "$schema") {
      continue;
    }

    if (!["docs", "mcp", "home", "github"].includes(key)) {
      throw new Error(`Block "${id}" has an unknown link "${key}"`);
    }

    if (href !== undefined && (typeof href !== "string" || !/^https?:\/\//.test(href))) {
      throw new Error(`Block "${id}" has an invalid ${key} URL`);
    }
  }

  return links;
}

function parseBlock(id: string, data: Record<string, unknown>): Block {
  const parsedId = assertString(data.id, "id", id);

  if (parsedId !== id) {
    throw new Error(`Block "${id}" id does not match its filename`);
  }

  return {
    id: parsedId,
    name: assertString(data.name, "name", id),
    kind: parseBlockKind(data.kind, id),
    summary: assertString(data.summary, "summary", id),
    links: parseBlockLinks(data.links, id),
  };
}

function parseMetrics(value: unknown, id: string): StackMetrics | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (!isRecord(value)) {
    throw new Error(`Stack "${id}" has invalid metrics`);
  }

  return {
    impressions: optionalInteger(value.impressions, "metrics.impressions", id),
    likes: optionalInteger(value.likes, "metrics.likes", id),
    bookmarks: optionalInteger(value.bookmarks, "metrics.bookmarks", id),
    replies: optionalInteger(value.replies, "metrics.replies", id),
    reposts: optionalInteger(value.reposts, "metrics.reposts", id),
    captured: optionalString(value.captured),
  };
}

function parseAuthor(value: unknown, id: string): StackSource["author"] {
  if (!isRecord(value)) {
    throw new Error(`Stack "${id}" is missing source.author`);
  }

  const handle = assertString(value.handle, "source.author.handle", id).replace(/^@/, "");

  return {
    handle,
    name: optionalString(value.name),
    profile_url: optionalString(value.profile_url),
  };
}

function parseSource(value: unknown, id: string): StackSource {
  if (!isRecord(value)) {
    throw new Error(`Stack "${id}" is missing source`);
  }

  if (value.platform !== "x") {
    throw new Error(`Stack "${id}" source.platform must be "x"`);
  }

  const url = assertString(value.url, "source.url", id);
  if (!/^https:\/\/(x|twitter)\.com\/[^/]+\/status\/\d+/.test(url)) {
    throw new Error(`Stack "${id}" source.url must be a real X status URL`);
  }

  return {
    platform: "x",
    url,
    author: parseAuthor(value.author, id),
    posted_at: optionalString(value.posted_at),
    quote: optionalString(value.quote),
    metrics: parseMetrics(value.metrics, id),
  };
}

function parseStackBlocks(value: unknown, id: string): StackBlockRef[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`Stack "${id}" needs at least one block`);
  }

  return value.map((entry, index) => {
    if (!isRecord(entry)) {
      throw new Error(`Stack "${id}" block ${index} is invalid`);
    }

    return {
      ref: assertString(entry.ref, `blocks[${index}].ref`, id),
      role: assertString(entry.role, `blocks[${index}].role`, id),
      optional: optionalBoolean(entry.optional),
    };
  });
}

function parseTags(value: unknown, id: string): string[] | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (!Array.isArray(value) || value.some((tag) => typeof tag !== "string" || tag.trim() === "")) {
    throw new Error(`Stack "${id}" has invalid tags`);
  }

  return value.map((tag) => tag.trim());
}

function parseStack(id: string, data: Record<string, unknown>): Stack {
  const parsedId = assertString(data.id, "id", id);

  if (parsedId !== id) {
    throw new Error(`Stack "${id}" id does not match its filename`);
  }

  if (typeof data.paper_related !== "boolean") {
    throw new Error(`Stack "${id}" is missing paper_related`);
  }

  return {
    id: parsedId,
    title: assertString(data.title, "title", id),
    outcome: assertString(data.outcome, "outcome", id),
    summary: optionalString(data.summary),
    blocks: parseStackBlocks(data.blocks, id),
    source: parseSource(data.source, id),
    tags: parseTags(data.tags, id),
    paper_related: data.paper_related,
    status: parseStackStatus(data.status, id),
  };
}

function listJsonIds(directory: string): string[] {
  return fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => entry.name.slice(0, -5));
}

function readBlockFile(id: string): Block {
  return parseBlock(id, readJsonFile(path.join(blocksDirectory, `${id}.json`), id));
}

function readStackFile(id: string): Stack {
  return parseStack(id, readJsonFile(path.join(stacksDirectory, `${id}.json`), id));
}

export function getAllBlocks(): Block[] {
  return listJsonIds(blocksDirectory)
    .map(readBlockFile)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getBlock(id: string): Block | null {
  const filePath = path.join(blocksDirectory, `${id}.json`);
  return fs.existsSync(filePath) ? readBlockFile(id) : null;
}

export function getAllStacks(): Stack[] {
  return listJsonIds(stacksDirectory)
    .map(readStackFile)
    .sort((a, b) => {
      if (a.id === pinnedStackId) {
        return -1;
      }

      if (b.id === pinnedStackId) {
        return 1;
      }

      return (b.source.posted_at ?? "").localeCompare(a.source.posted_at ?? "");
    });
}

export function getStack(id: string): Stack | null {
  const filePath = path.join(stacksDirectory, `${id}.json`);
  return fs.existsSync(filePath) ? readStackFile(id) : null;
}

export function resolveStack(stack: Stack): ResolvedStack {
  return {
    ...stack,
    blocks: stack.blocks.map((entry) => {
      const block = getBlock(entry.ref);

      if (!block) {
        throw new Error(`Stack "${stack.id}" references unknown block "${entry.ref}"`);
      }

      return { ...entry, block };
    }),
  };
}

export function getResolvedStacks(): ResolvedStack[] {
  return getAllStacks().map(resolveStack);
}

export function getResolvedStack(id: string): ResolvedStack | null {
  const stack = getStack(id);
  return stack ? resolveStack(stack) : null;
}

export function blockChipHref(block: Block): string | undefined {
  for (const key of chipHrefKeys) {
    const href = block.links[key];
    if (href) {
      return href;
    }
  }

  return undefined;
}

export function blockOutboundLinks(block: Block): BlockOutboundLink[] {
  const links: BlockOutboundLink[] = [];
  const seen = new Set<string>();

  for (const [key, label] of outboundLinkOrder) {
    const href = block.links[key];
    if (!href || seen.has(href)) {
      continue;
    }

    seen.add(href);
    links.push({ href, label });
  }

  return links;
}

export function stackHandle(stack: Stack): string {
  return `@${stack.source.author.handle}`;
}

export function stackStatusLabel(status: StackStatus): string | null {
  switch (status) {
    case "verified":
      return null;
    case "inferred":
      return "Inferred";
    case "proposed":
      return "Proposed";
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
}

export function blockKindLabel(kind: BlockKind): string {
  switch (kind) {
    case "app":
      return "App";
    case "mcp":
      return "MCP";
    case "agent":
      return "Agent";
    case "model":
      return "Model";
    case "skill":
      return "Skill";
    case "host":
      return "Host";
    case "service":
      return "Service";
    case "other":
      return "Other";
    default: {
      const exhaustive: never = kind;
      return exhaustive;
    }
  }
}

export function formatStackDate(iso?: string): string | undefined {
  return iso ? iso.slice(0, 10) : undefined;
}

export function formatMetricCount(value: number): string {
  return value.toLocaleString("en-US");
}
