import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteChrome } from "../../components/SiteChrome";
import { SiteFooter } from "../../components/SiteFooter";
import { getAllNotes } from "../../lib/notes";

export const metadata: Metadata = {
  title: "Field notes",
  description:
    "Short, practical posts about working in Paper with agents, from the maker of Paper.tips.",
  alternates: {
    canonical: "/notes",
  },
  openGraph: {
    title: "Field notes · Paper.tips",
    description:
      "Short, practical posts about working in Paper with agents, from the maker of Paper.tips.",
    url: "/notes",
    type: "website",
  },
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <>
      <SiteChrome active="notes" />
      <div className="reading-shell">
        <main className="notes-index">
          <header className="notes-masthead">
            <span className="notes-kicker">
              Field notes / {String(notes.length).padStart(2, "0")}
            </span>
            <h1 className="notes-title">Notes from the canvas.</h1>
            <p className="notes-lede">
                    Short, practical posts about working in Paper with agents.
            </p>
          </header>

          <section className="notes-list" aria-label="All field notes">
            {notes.map((note, index) => (
              <Link className="note-row" href={`/notes/${note.slug}`} key={note.slug}>
                <span className="note-row-image">
                  <Image
                    src={note.image}
                    alt={note.imageAlt}
                    fill
                    preload={index === 0}
                    sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 900px) 45vw, 30vw"
                  />
                </span>
                <span className="note-row-copy">
                  <time className="note-date" dateTime={note.date}>
                    {note.date}
                  </time>
                  <h2>{note.title}</h2>
                  <p>{note.summary}</p>
                </span>
                <span className="note-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            ))}
          </section>
        </main>
        <SiteFooter kind="notes" />
      </div>
    </>
  );
}
