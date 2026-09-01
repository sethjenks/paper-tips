export function IconSprite() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }} focusable="false">
      <symbol id="ic-canvas" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3v18M16 3v18M3 8h18M3 16h18"/>
      </symbol>
      <symbol id="ic-select" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 3l13 8.2-5.6 1.3L10 19z"/>
      </symbol>
      <symbol id="ic-resize" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="1.5"/><path d="M10 14l4-4M14 14v-4h-4"/>
      </symbol>
      <symbol id="ic-type" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6V4h11v2M9.5 4v16M7 20h5M15 12v-1h5v1M17.5 11v9M16 20h3"/>
      </symbol>
      <symbol id="ic-pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l5 5-5 11-5-11z"/><path d="M7 8h10"/><circle cx="12" cy="9.5" r="1.4"/>
      </symbol>
      <symbol id="ic-ai" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 3l1.7 4.6L17.3 9l-4.6 1.7L11 15l-1.7-4.3L4.7 9l4.6-1.4z"/><path d="M17.5 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/>
      </symbol>
      <symbol id="ic-color" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3.5s5.5 6.1 5.5 9.6a5.5 5.5 0 1 1-11 0C6.5 9.6 12 3.5 12 3.5z"/><path d="M9.4 13.4a2.7 2.7 0 0 0 2.6 2.7"/>
      </symbol>
      <symbol id="ic-export" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15V4M12 4L8.5 7.5M12 4l3.5 3.5"/><path d="M4.5 14v4.5a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5V14"/>
      </symbol>
      <symbol id="ic-comment" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12.5a6.5 6.5 0 0 1-6.5 6.5H9l-4 2.5.9-3.3A6.5 6.5 0 0 1 9.5 6h4a6.5 6.5 0 0 1 6.5 6.5z"/>
      </symbol>
      <symbol id="ic-mcp" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5" width="17" height="14" rx="1.5"/><path d="M7.5 10l2.5 2-2.5 2M12.5 14.5h4"/>
      </symbol>
      {/* brand marks. Third-party logos, used nominatively to identify the
           products this guide documents. Both carry their own fill rules, so
           they sit outside the monochrome stroke system above.
           Paper mark: paper.design header lockup. Figma mark: figma.com
           favicon.svg (current palette — the 2024 refresh, not the legacy
           #F24E1E / #A259FF set). */}
      <symbol id="ic-paper" viewBox="0 0 21 21">
        <path d="M3 0H21V13H13V3H3ZM0 3H3V13H13V21H0Z" fill="currentColor"/>
      </symbol>
      <symbol id="ic-figma" viewBox="12 2 40 60">
        <path d="M12 52c0-5.523 4.477-10 10-10h10v10c0 5.523-4.477 10-10 10s-10-4.477-10-10z" fill="#24CB71"/>
        <path d="M32 2v20h10c5.523 0 10-4.477 10-10S47.523 2 42 2L32 2z" fill="#FF7237"/>
        <circle cx="41.9166" cy="32" r="10" fill="#00B6FF"/>
        <path d="M12 12c0 5.523 4.477 10 10 10h10V2H22c-5.523 0-10 4.477-10 10z" fill="#FF3737"/>
        <path d="M12 32c0 5.523 4.477 10 10 10h10V22H22c-5.523 0-10 4.477-10 10z" fill="#874FFF"/>
      </symbol>
    
      {/* inline utility icons */}
      <symbol id="ic-bulb" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 17h5M10 20h4M12 3a5.5 5.5 0 0 0-3.2 10c.6.5 1 1.2 1.1 2h4.2c.1-.8.5-1.5 1.1-2A5.5 5.5 0 0 0 12 3z"/>
      </symbol>
      <symbol id="ic-heart" viewBox="0 0 24 24">
        <path d="M12 20.4l-1.5-1.35C5.4 14.5 2.5 11.9 2.5 8.7 2.5 6.1 4.6 4 7.2 4c1.5 0 2.9.7 3.8 1.8L12 6.9l1-1.1C13.9 4.7 15.3 4 16.8 4 19.4 4 21.5 6.1 21.5 8.7c0 3.2-2.9 5.8-8 10.35L12 20.4z" fill="currentColor"/>
      </symbol>
      <symbol id="ic-warn" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4.5l8.5 15h-17z"/><path d="M12 10v4M12 16.8v.1"/>
      </symbol>
      <symbol id="ic-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 12.5l5 5 10-11"/>
      </symbol>
      <symbol id="ic-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 6l12 12M18 6L6 18"/>
      </symbol>
    </svg>
  );
}
