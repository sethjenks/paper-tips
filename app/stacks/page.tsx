import type { Metadata } from "next";
import Link from "next/link";

import { SiteChrome } from "../../components/SiteChrome";
import { SiteFooter } from "../../components/SiteFooter";
import { StackChips } from "../../components/StackChips";
import {
  getResolvedStacks,
  stackHandle,
  stackStatusLabel,
} from "../../lib/stacks";

export const metadata: Metadata = {
  title: "Builder stacks",
  description:
    "Community-cited tool stacks that put Paper in the loop — recipes people actually post, not official Paper documentation.",
  alternates: {
    canonical: "/stacks",
  },
  openGraph: {
    title: "Builder stacks · Paper.tips",
    description:
      "Community-cited tool stacks that put Paper in the loop — recipes people actually post, not official Paper documentation.",
    url: "/stacks",
    type: "website",
  },
};

export default function StacksPage() {
  const stacks = getResolvedStacks();

  return (
    <>
      <SiteChrome active="stacks" />
      <div className="reading-shell">
        <main className="stacks-index">
          <header className="stacks-masthead">
            <span className="stacks-kicker">
              Builder stacks / {String(stacks.length).padStart(2, "0")}
            </span>
            <h1 className="stacks-title">Recipes people actually post.</h1>
            <p className="stacks-lede">
              Outcome-to-tool-stack pairings with Paper in the loop. Each row is
              cited to an original post — unofficial, community-sourced, not a
              shortcut list.
            </p>
          </header>

          <section className="stacks-list" aria-label="All builder stacks">
            {stacks.map((stack) => {
              const status = stackStatusLabel(stack.status);
              const featured = stack.id === "paper-dock-hero";

              return (
                <article
                  className={featured ? "stack-card stack-card-featured" : "stack-card"}
                  key={stack.id}
                >
                  <header className="stack-card-copy">
                    {featured || status ? (
                      <div className="stack-card-meta">
                        {featured ? <span className="stack-card-pin">Pinned</span> : null}
                        {status ? <span className="stack-status">{status}</span> : null}
                      </div>
                    ) : null}
                    <h2>
                      <Link href={`/stacks/${stack.id}`}>{stack.title}</Link>
                    </h2>
                    <p>{stack.outcome}</p>
                  </header>
                  <StackChips blocks={stack.blocks} />
                  <footer className="stack-card-source">
                    <a href={stack.source.url} rel="noopener noreferrer">
                      {stackHandle(stack)}
                    </a>
                    <span aria-hidden="true">·</span>
                    <a href={stack.source.url} rel="noopener noreferrer">
                      Original post
                    </a>
                  </footer>
                </article>
              );
            })}
          </section>
        </main>
        <SiteFooter kind="stacks" />
      </div>
    </>
  );
}
