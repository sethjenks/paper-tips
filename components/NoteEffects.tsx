"use client";

import { useEffect } from "react";

export function NoteEffects() {
  useEffect(() => {
    const timers = new Set<ReturnType<typeof setTimeout>>();

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const button = event.target.closest<HTMLButtonElement>("[data-prompt-copy]");
      const code = button?.closest(".prompt-block")?.querySelector("code");

      if (!button || !code?.textContent) {
        return;
      }

      const text = code.textContent;
      const before = button.textContent;

      const flash = (ok: boolean) => {
        button.dataset.copyState = ok ? "success" : "failure";
        button.textContent = ok ? "Copied" : "Press ⌘C";

        const timer = setTimeout(() => {
          button.removeAttribute("data-copy-state");
          button.textContent = before;
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

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
      timers.forEach(clearTimeout);
    };
  }, []);

  return null;
}
