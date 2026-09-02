import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { NoteEffects } from "../../../components/NoteEffects";
import { SiteChrome } from "../../../components/SiteChrome";
import { SiteFooter } from "../../../components/SiteFooter";
import { getAllNotes, getNote } from "../../../lib/notes";

interface NotePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllNotes().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) {
    return {};
  }

  return {
    title: note.title,
    description: note.summary,
    alternates: {
      canonical: `/notes/${note.slug}`,
    },
    openGraph: {
      title: `${note.title} · Paper.tips`,
      description: note.summary,
      url: `/notes/${note.slug}`,
      type: "article",
      publishedTime: note.date,
      authors: ["Seth Jenks"],
      images: [{ url: note.image, alt: note.imageAlt }],
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNote(slug);

  if (!note) {
    notFound();
  }

  const position = getAllNotes().findIndex(({ slug: noteSlug }) => noteSlug === note.slug) + 1;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: note.title,
    description: note.summary,
    datePublished: note.date,
    image: `https://paper.tips${note.image}`,
    mainEntityOfPage: `https://paper.tips/notes/${note.slug}`,
    author: {
      "@type": "Person",
      name: "Seth Jenks",
      url: "https://x.com/sethjenks",
    },
    publisher: {
      "@type": "Organization",
      name: "Paper.tips",
      url: "https://paper.tips",
    },
  };

  return (
    <>
      <SiteChrome active="notes" />
      <div className="reading-shell">
        <main className="note-main">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/notes">Field notes</Link>
              </li>
              <li className="breadcrumb-separator" aria-hidden="true">
                /
              </li>
              <li aria-current="page">{note.title}</li>
            </ol>
          </nav>
          <article className="note-frame">
            <header className="note-header">
              <div className="note-meta">
                <span>Field note {String(position).padStart(2, "0")}</span>
                <i aria-hidden="true"></i>
                <time dateTime={note.date}>{note.date}</time>
              </div>
              <h1 className="note-title">{note.title}.</h1>
              <p className="note-summary">{note.summary}</p>
            </header>

            <figure className="note-hero">
              <Image
                src={note.image}
                alt={note.imageAlt}
                fill
                loading="eager"
                sizes="(max-width: 600px) calc(100vw - 90px), 1006px"
              />
            </figure>

            <div
              className="note-body"
              dangerouslySetInnerHTML={{ __html: note.html }}
            />

            <nav className="note-links" aria-label="Field note navigation">
              <Link className="note-back" href="/notes">
                ← All field notes
              </Link>
              <span className="note-related">
                <span className="note-related-label">Related on the guide</span>
                <Link href="/#mcp">MCP &amp; agents →</Link>
              </span>
            </nav>
          </article>
        </main>
        <SiteFooter kind="notes" />
      </div>
      <NoteEffects />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
