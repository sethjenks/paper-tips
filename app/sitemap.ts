import type { MetadataRoute } from "next";

import { getAllNotes } from "../lib/notes";

const baseUrl = "https://paper.tips";

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = getAllNotes();

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
  ];
}
