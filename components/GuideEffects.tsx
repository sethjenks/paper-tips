"use client";

import { useEffect } from "react";

interface CardPart {
  cap: boolean;
  text: string;
  width: number;
}

interface CardCell {
  keysWidth: number;
  label: string;
  parts: CardPart[];
}

declare global {
  interface Window {
    buildCardSVG?: () => string;
  }
}

function buildCardSVG() {
  const mono = "Geist Mono, ui-monospace, monospace";
  const sans = "Inter, system-ui, sans-serif";
  const monoCss = '"Geist Mono", ui-monospace, monospace';
  const sansCss = '"Inter", system-ui, sans-serif';
  const context = document.createElement("canvas").getContext("2d");

  if (!context) {
    throw new Error("Canvas 2D context is unavailable");
  }
  const measurementContext = context;

  function measure(text: string, font: string) {
    measurementContext.font = font;
    return measurementContext.measureText(text).width;
  }

  const capFont = `400 12px ${monoCss}`;
  const labelFont = `400 13px ${sansCss}`;
  const escapeText = (text: string) =>
    text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const paddingX = 18;
  const headerHeight = 44;
  const rowHeight = 46;
  const columns = 3;
  const capHeight = 21;
  const footerHeight = 28;

  const cells = Array.from(document.querySelectorAll<HTMLElement>(".qc-grid > div")).map(
    (cell): CardCell => {
      const key = cell.querySelector<HTMLElement>(".k");
      const label = cell.querySelector<HTMLElement>(".d");

      if (!key || !label) {
        throw new Error("The Twelve card markup is incomplete");
      }

      const parts = Array.from(key.children).map((element): CardPart => {
        const text = element.textContent?.trim() ?? "";
        const cap = element.tagName === "KBD";
        return {
          text,
          cap,
          width: cap ? Math.max(22, measure(text, capFont) + 16) : measure(text, capFont),
        };
      });

      return {
        parts,
        label: label.textContent?.trim() ?? "",
        keysWidth: 0,
      };
    },
  );

  let columnWidth = 0;
  cells.forEach((cell) => {
    cell.keysWidth = cell.parts.reduce((total, part) => total + part.width + 5, 0) - 5;
    columnWidth = Math.max(
      columnWidth,
      paddingX * 2 + cell.keysWidth + 14 + measure(cell.label, labelFont),
    );
  });

  const rows = Math.ceil(cells.length / columns);
  columnWidth = Math.ceil(columnWidth);
  const gridHeight = rows * rowHeight + (rows - 1);
  const width = columnWidth * columns + (columns - 1);
  const height = headerHeight + gridHeight + footerHeight;

  const output = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">`,
  ];
  output.push(
    `<rect x=".5" y=".5" width="${width - 1}" height="${height - 1}" rx="8" fill="#1E1E1E" stroke="#333333"/>`,
  );
  output.push(
    `<text x="${paddingX}" y="27" font-family="${mono}" font-size="11" letter-spacing="0.9" fill="#EFEFE4">THE TWELVE</text>`,
  );
  output.push(
    `<text x="${paddingX + 88}" y="27" font-family="${mono}" font-size="11" letter-spacing="0.7" fill="#878787">get up and running quickly</text>`,
  );
  output.push(
    `<rect x="1" y="${headerHeight}" width="${width - 2}" height="1" fill="#2A2A2A"/>`,
  );

  cells.forEach((cell, index) => {
    const column = index % columns;
    const row = Math.floor(index / columns);
    const x0 = column * (columnWidth + 1);
    const y0 = headerHeight + 1 + row * (rowHeight + 1);

    if (column) {
      output.push(
        `<rect x="${x0 - 1}" y="${y0}" width="1" height="${rowHeight}" fill="#2A2A2A"/>`,
      );
    }
    if (row) {
      output.push(
        `<rect x="${x0}" y="${y0 - 1}" width="${columnWidth}" height="1" fill="#2A2A2A"/>`,
      );
    }

    let x = x0 + paddingX;
    const middleY = y0 + rowHeight / 2;

    cell.parts.forEach((part) => {
      if (part.cap) {
        output.push(
          `<rect x="${x.toFixed(1)}" y="${(middleY - capHeight / 2).toFixed(1)}" width="${part.width.toFixed(1)}" height="${capHeight}" rx="4" fill="#262626" stroke="#3A3A3A"/>`,
        );
        output.push(
          `<text x="${(x + part.width / 2).toFixed(1)}" y="${(middleY + 4).toFixed(1)}" font-family="${mono}" font-size="12" fill="#EFEFE4" text-anchor="middle">${escapeText(part.text)}</text>`,
        );
      } else {
        output.push(
          `<text x="${(x + part.width / 2).toFixed(1)}" y="${(middleY + 4).toFixed(1)}" font-family="${mono}" font-size="12" fill="#6E6E6E" text-anchor="middle">${escapeText(part.text)}</text>`,
        );
      }
      x += part.width + 5;
    });

    output.push(
      `<text x="${(x0 + paddingX + cell.keysWidth + 14).toFixed(1)}" y="${(middleY + 4.5).toFixed(1)}" font-family="${sans}" font-size="13" fill="#9E9E9E">${escapeText(cell.label)}</text>`,
    );
  });

  output.push(
    `<rect x="1" y="${headerHeight + gridHeight}" width="${width - 2}" height="1" fill="#2A2A2A"/>`,
  );
  output.push(
    `<text x="${paddingX}" y="${height - 10}" font-family="${mono}" font-size="9" letter-spacing="0.6" fill="#6E6E6E">paper.tips</text>`,
  );
  output.push("</svg>");

  return output.join("\n");
}

export function GuideEffects() {
  useEffect(() => {
    const railLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>(".rail a"));
    const linksById = new Map(
      railLinks.map((link) => [link.getAttribute("href")?.slice(1) ?? "", link]),
    );
    const visibleSections = new Set<string>();
    const observer =
      railLinks.length > 0 && "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  visibleSections.add(entry.target.id);
                } else {
                  visibleSections.delete(entry.target.id);
                }
              });
              const current = Array.from(linksById.keys()).find((id) =>
                visibleSections.has(id),
              );
              railLinks.forEach((link) => {
                link.setAttribute(
                  "aria-current",
                  link.getAttribute("href") === `#${current}` ? "true" : "false",
                );
              });
            },
            { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
          )
        : null;

    document
      .querySelectorAll<HTMLElement>(".artboard")
      .forEach((section) => observer?.observe(section));

    const timers = new Set<ReturnType<typeof setTimeout>>();

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const element = event.target.closest<HTMLElement>("[data-copy],[data-copy-svg]");
      if (!element) {
        return;
      }

      const text = element.hasAttribute("data-copy-svg")
        ? buildCardSVG()
        : (element.dataset.copy ?? "");
      const isButton = element.classList.contains("copy");
      const before = element.textContent;

      const flash = (ok: boolean) => {
        element.dataset.done = ok ? "1" : "0";
        if (isButton) {
          element.textContent = ok ? "copied" : "press ⌘C";
        }
        const timer = setTimeout(() => {
          element.removeAttribute("data-done");
          if (isButton) {
            element.textContent = before;
          }
          timers.delete(timer);
        }, 1600);
        timers.add(timer);
      };

      const fallback = () => {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.cssText = "position:fixed;top:0;left:-9999px";
        document.body.appendChild(textarea);
        textarea.select();

        let ok = false;
        try {
          ok = document.execCommand("copy");
        } catch {
          ok = false;
        }

        textarea.remove();
        flash(ok);
      };

      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text).then(() => flash(true), fallback);
      } else {
        fallback();
      }
    };

    window.buildCardSVG = buildCardSVG;
    document.addEventListener("click", handleClick);

    return () => {
      observer?.disconnect();
      document.removeEventListener("click", handleClick);
      timers.forEach(clearTimeout);
      delete window.buildCardSVG;
    };
  }, []);

  return null;
}
