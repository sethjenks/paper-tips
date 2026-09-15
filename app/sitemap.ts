import type { MetadataRoute } from "next";

import { getAllNotes } from "../lib/notes";
import { getAllStacks } from "../lib/stacks";

const baseUrl = "https://paper.tips";

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = getAllNotes();
  const stacks = getAllStacks();
  const latestStack = stacks
    .map((stack) => stack.source.posted_at)
    .filter((value): value is string => Boolean(value))
    .sort()
    .at(-1);

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-09-02"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/notes`,
      lastModified: new Date(notes[0]?.date ?? "2026-09-02"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...notes.map((note) => ({
      url: `${baseUrl}/notes/${note.slug}`,
      lastModified: new Date(note.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${baseUrl}/stacks`,
      lastModified: new Date(latestStack ?? "2026-09-15"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...stacks.map((stack) => ({
      url: `${baseUrl}/stacks/${stack.id}`,
      lastModified: new Date(stack.source.posted_at ?? latestStack ?? "2026-09-08"),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
