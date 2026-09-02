import { ImageResponse } from "next/og";

import { PaperMark } from "../lib/PaperMark";
import { brand } from "../lib/brand";

export const alt = "Paper.tips — Get fast in Paper. Every shortcut worth knowing, plus how to put agents to work.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadInter(weight: 300 | 400) {
  const response = await fetch(
    `https://cdn.jsdelivr.net/fontsource/fonts/inter@5.2.8/latin-${weight}-normal.woff`,
  );
  if (!response.ok) {
    throw new Error(`Could not load Inter ${weight}`);
  }
  return response.arrayBuffer();
}

export default async function OpenGraphImage() {
  const [inter300, inter400] = await Promise.all([loadInter(300), loadInter(400)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: brand.bg,
          backgroundImage:
            "linear-gradient(to right, rgba(239,239,228,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(239,239,228,0.045) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          padding: "56px 72px 52px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 18,
            letterSpacing: "0.08em",
            color: brand.label,
            fontFamily: "Inter",
            fontWeight: 400,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: brand.ink,
              borderRadius: 6,
            }}
          >
            <PaperMark size={24} />
          </div>
          unofficial field guide
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              fontFamily: "Inter",
              fontWeight: 300,
              color: brand.ink,
            }}
          >
            Paper
            <span style={{ color: brand.muted, marginLeft: 18 }}>Tips</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              fontSize: 28,
              lineHeight: 1.4,
              fontFamily: "Inter",
              fontWeight: 400,
              color: brand.muted,
              maxWidth: 900,
            }}
          >
            <span style={{ color: brand.ink, fontWeight: 400 }}>Get fast in Paper.</span>
            <span>Every shortcut worth knowing, plus how to put agents to work.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 18,
            letterSpacing: "0.06em",
            color: brand.label,
            fontFamily: "Inter",
            fontWeight: 400,
          }}
        >
          <span>paper.tips</span>
          <span>macos · compiled september 2026</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: inter300, weight: 300, style: "normal" },
        { name: "Inter", data: inter400, weight: 400, style: "normal" },
      ],
    },
  );
}
