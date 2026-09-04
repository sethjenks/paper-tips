import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CommandKeyDemo } from "../../../components/CommandKeyDemo";
import { NoteEffects } from "../../../components/NoteEffects";
import { SiteChrome } from "../../../components/SiteChrome";
import { SiteFooter } from "../../../components/SiteFooter";
import {
  getAllNotes,
  getNote,
  getNoteBlocks,
  noteImageSizes,
  studyImageSrcSet,
  type NoteBlock,
} from "../../../lib/notes";

interface NotePageProps {
  params: Promise<{ slug: string }>;
}

function NoteBodyImage({
  src,
  alt,
  variant,
}: {
  src: string;
  alt: string;
  variant: "study" | "default";
}) {
  if (variant === "study") {
    return (
      <figure className="note-study">
        <img
          src={src}
          srcSet={studyImageSrcSet(src)}
          sizes={noteImageSizes}
          alt={alt}
          width={1600}
          height={1200}
          loading="lazy"
          decoding="async"
        />
      </figure>
    );
  }

  return (
    <figure className="note-figure">
      <div className="note-figure-frame">
        <Image src={src} alt={alt} fill quality={90} sizes={noteImageSizes} />
      </div>
    </figure>
  );
}

function renderNoteBlock(block: NoteBlock, index: number) {
  switch (block.kind) {
    case "html":
      return <div key={index} className="note-html" dangerouslySetInnerHTML={{ __html: block.html }} />;
    case "cmd-key":
      return <CommandKeyDemo key={index} />;
    case "image":
      return <NoteBodyImage key={index} src={block.src} alt={block.alt} variant={block.variant} />;
    default: {
      const exhaustive: never = block;
      return exhaustive;
    }
  }
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
                <a href="https://x.com/sethjenks" rel="me noopener">
                  By Seth Jenks
                </a>
                <time className="sr" dateTime={note.date}>
                  {note.date}
                </time>
              </div>
              <h1 className="note-title">
                {/[.!?]$/.test(note.title) ? note.title : `${note.title}.`}
              </h1>
              <p className="note-summary">{note.summary}</p>
            </header>

            <figure className="note-hero">
              <div className="note-hero-frame">
                <Image
                  src={note.image}
                  alt={note.imageAlt}
                  fill
                  loading="eager"
                  quality={90}
                  sizes={noteImageSizes}
                />
              </div>
              {note.imageCredit ? (
                <figcaption>
                  Original by{" "}
                  {note.imageCreditHref ? (
                    <a href={note.imageCreditHref} rel="noopener noreferrer">
                      {note.imageCredit}
                    </a>
                  ) : (
                    note.imageCredit
                  )}
                </figcaption>
              ) : null}
            </figure>

            <div className="note-body">
              {getNoteBlocks(note.html).map((block, index) => renderNoteBlock(block, index))}
            </div>

            <nav className="note-links" aria-label="Field note navigation">
              <Link className="note-back" href="/notes">
                ← All field notes
              </Link>
              <span className="note-related">
                <span className="note-related-label">Related on the guide</span>
                <Link href={note.guideHref ?? "/#mcp"}>
                  {note.guideLabel ?? "MCP & agents"} →
                </Link>
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
