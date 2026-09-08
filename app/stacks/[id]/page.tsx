import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteChrome } from "../../../components/SiteChrome";
import { SiteFooter } from "../../../components/SiteFooter";
import { StackChips } from "../../../components/StackChips";
import {
  blockKindLabel,
  blockOutboundLinks,
  formatMetricCount,
  formatStackDate,
  getAllStacks,
  getResolvedStack,
  stackHandle,
  stackStatusLabel,
  type ResolvedStack,
  type StackMetrics,
} from "../../../lib/stacks";

interface StackPageProps {
  params: Promise<{ id: string }>;
}

function metricItems(metrics: StackMetrics): { label: string; value: number }[] {
  const items: { label: string; value: number | undefined }[] = [
    { label: "impressions", value: metrics.impressions },
    { label: "likes", value: metrics.likes },
    { label: "bookmarks", value: metrics.bookmarks },
    { label: "replies", value: metrics.replies },
    { label: "reposts", value: metrics.reposts },
  ];

  return items.filter((item): item is { label: string; value: number } => item.value !== undefined);
}

export function generateStaticParams() {
  return getAllStacks().map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: StackPageProps): Promise<Metadata> {
  const { id } = await params;
  const stack = getResolvedStack(id);

  if (!stack) {
    return {};
  }

  return {
    title: stack.title,
    description: stack.outcome,
    alternates: {
      canonical: `/stacks/${stack.id}`,
    },
    openGraph: {
      title: `${stack.title} · Paper.tips`,
      description: stack.outcome,
      url: `/stacks/${stack.id}`,
      type: "article",
    },
  };
}

function StackMetricsRow({ stack }: { stack: ResolvedStack }) {
  const metrics = stack.source.metrics;
  if (!metrics) {
    return null;
  }

  const items = metricItems(metrics);
  if (items.length === 0) {
    return null;
  }

  return (
    <p className="stack-metrics">
      {items.map((item, index) => (
        <span key={item.label}>
          {index > 0 ? <span aria-hidden="true"> · </span> : null}
          {formatMetricCount(item.value)} {item.label}
        </span>
      ))}
      {metrics.captured ? <span> · captured {metrics.captured}</span> : null}
    </p>
  );
}

export default async function StackPage({ params }: StackPageProps) {
  const { id } = await params;
  const stack = getResolvedStack(id);

  if (!stack) {
    notFound();
  }

  const status = stackStatusLabel(stack.status);
  const posted = formatStackDate(stack.source.posted_at);
  const authorName = stack.source.author.name ?? stackHandle(stack);
  const workJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: stack.title,
    description: stack.outcome,
    citation: stack.source.url,
    datePublished: stack.source.posted_at,
    author: {
      "@type": "Person",
      name: authorName,
      url: stack.source.author.profile_url ?? stack.source.url,
    },
    publisher: {
      "@type": "Organization",
      name: "Paper.tips",
      url: "https://paper.tips",
    },
  };

  return (
    <>
      <SiteChrome active="stacks" />
      <div className="reading-shell">
        <main className="stack-main">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/stacks">Builder stacks</Link>
              </li>
              <li className="breadcrumb-separator" aria-hidden="true">
                /
              </li>
              <li aria-current="page">{stack.title}</li>
            </ol>
          </nav>
          <article className="stack-frame">
            <header className="stack-header">
              <div className="stack-meta">
                <span>Builder stack</span>
                {status ? (
                  <>
                    <i aria-hidden="true"></i>
                    <span className="stack-status">{status}</span>
                  </>
                ) : null}
                {posted ? (
                  <>
                    <i aria-hidden="true"></i>
                    <time dateTime={stack.source.posted_at}>{posted}</time>
                  </>
                ) : null}
              </div>
              <h1 className="stack-title">{stack.title}</h1>
              <p className="stack-outcome">{stack.outcome}</p>
              {stack.summary ? <p className="stack-summary">{stack.summary}</p> : null}
            </header>

            <StackChips blocks={stack.blocks} />

            {stack.source.quote ? (
              <blockquote className="stack-quote">
                <p>{stack.source.quote}</p>
              </blockquote>
            ) : null}

            <section className="stack-roles" aria-labelledby="stack-roles-title">
              <h2 id="stack-roles-title">In this recipe</h2>
              <ol>
                {stack.blocks.map((entry) => {
                  const links = blockOutboundLinks(entry.block);

                  return (
                    <li key={`${entry.ref}-${entry.optional ? "optional" : "required"}`}>
                      <div className="stack-role-head">
                        {links[0] ? (
                          <a href={links[0].href} rel="noopener noreferrer">
                            {entry.block.name}
                          </a>
                        ) : (
                          <span>{entry.block.name}</span>
                        )}
                        <span className="stack-role-kind">{blockKindLabel(entry.block.kind)}</span>
                        {entry.optional ? <span className="stack-status">Optional</span> : null}
                      </div>
                      <p>{entry.role}</p>
                      {links.length > 0 ? (
                        <p className="stack-role-links">
                          {links.map((link, index) => (
                            <span key={`${link.label}-${link.href}`}>
                              {index > 0 ? <span aria-hidden="true"> · </span> : null}
                              <a href={link.href} rel="noopener noreferrer">
                                {link.label}
                              </a>
                            </span>
                          ))}
                        </p>
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            </section>

            <section className="stack-citation" aria-labelledby="stack-citation-title">
              <h2 id="stack-citation-title">Cited from</h2>
              <p>
                <a href={stack.source.url} rel="noopener noreferrer">
                  {stackHandle(stack)}
                </a>
                {stack.source.author.name ? <span> · {stack.source.author.name}</span> : null}
                {posted ? (
                  <>
                    <span aria-hidden="true"> · </span>
                    <time dateTime={stack.source.posted_at}>{posted}</time>
                  </>
                ) : null}
              </p>
              <p>
                <a href={stack.source.url} rel="noopener noreferrer">
                  {stack.source.url}
                </a>
              </p>
              <StackMetricsRow stack={stack} />
            </section>

            <nav className="stack-links" aria-label="Builder stack navigation">
              <Link className="stack-back" href="/stacks">
                ← All builder stacks
              </Link>
              <span className="stack-related">
                <span className="stack-related-label">Related on the guide</span>
                <Link href="/#mcp">MCP &amp; agents →</Link>
              </span>
            </nav>
          </article>
        </main>
        <SiteFooter kind="stacks" />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
