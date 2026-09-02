import Link from "next/link";

interface SiteChromeProps {
  active: "guide" | "notes";
}

export function SiteChrome({ active }: SiteChromeProps) {
  return (
    <>
      <div className="ruler" aria-hidden="true"></div>
      <nav className="sitenav" aria-label="Site">
        <Link className="sitenav-brand" href="/">
          Paper.tips
        </Link>
        <div>
          <Link href="/" aria-current={active === "guide" ? "page" : undefined}>
            Guide
          </Link>
          <Link href="/notes" aria-current={active === "notes" ? "page" : undefined}>
            Notes
          </Link>
        </div>
      </nav>
    </>
  );
}
