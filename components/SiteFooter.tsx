interface SiteFooterProps {
  kind?: "guide" | "notes" | "stacks";
}

function readingFooterCopy(kind: "notes" | "stacks"): string {
  switch (kind) {
    case "notes":
      return "Notes are dated workflows and commentary, not official Paper documentation.";
    case "stacks":
      return "Stacks are community-cited recipes, not official Paper documentation. Tweet URLs are the source of record.";
    default: {
      const exhaustive: never = kind;
      return exhaustive;
    }
  }
}

export function SiteFooter({ kind = "guide" }: SiteFooterProps) {
  switch (kind) {
    case "notes":
    case "stacks":
      return (
        <footer className="sitefooter sitefooter-notes">
          <p>
            <svg className="mark" aria-hidden="true">
              <use href="#ic-paper" />
            </svg>
            Paper.tips is an independent field guide. {readingFooterCopy(kind)}
          </p>
          <p className="byline">
            Made with{" "}
            <svg className="heart" aria-hidden="true">
              <use href="#ic-heart" />
            </svg>
            <span className="sr">love</span> by{" "}
            <a href="https://x.com/sethjenks" rel="me noopener">
              Seth Jenks
            </a>
          </p>
        </footer>
      );
    case "guide":
      break;
    default: {
      const exhaustive: never = kind;
      return exhaustive;
    }
  }

  return (
    <footer className="sitefooter">
      <p>
        <svg className="mark" aria-hidden="true">
          <use href="#ic-paper" />
        </svg>
        Compiled from the <a href="https://paper.design/build-log">Paper build log</a>{" "}
        and <a href="https://paper.design/docs">docs</a> — tokens, vector editing,
        paste, MCP, and support — September 2026. Shortcuts shown for macOS. Styled
        after paper.design; Matter and Paper Mono are commercial faces, so this page
        uses Inter and Geist Mono as stand-ins.
      </p>
      <p className="fine">
        The Paper and Figma logos are trademarks of their respective owners and appear
        here only to identify the products described. This is an independent guide, not
        affiliated with or endorsed by either company.
      </p>
      <p className="byline">
        Made with{" "}
        <svg className="heart" aria-hidden="true">
          <use href="#ic-heart" />
        </svg>
        <span className="sr">love</span> by{" "}
        <a href="https://x.com/sethjenks" rel="me noopener">
          Seth Jenks
        </a>
      </p>
    </footer>
  );
}
