"use client";

import { useState, type ReactNode } from "react";

type FaqRichItem = { question: string; answer: ReactNode };

export default function FaqRichAccordion({ items }: { items: FaqRichItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="rounded-2xl border border-border bg-white">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-start justify-between gap-6 px-8 py-7 text-left"
          >
            <span
              className="text-xl font-semibold leading-snug text-primary-dark md:text-2xl"
              style={{ color: "var(--color-primary-dark, #0f1d4a)" }}
            >
              {item.question}
            </span>
            <span
              className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                open === i ? "bg-primary-dark" : "border border-border bg-white"
              }`}
            >
              <svg
                className={`h-4 w-4 transition-transform duration-200 ${open === i ? "text-white rotate-0" : "text-foreground/60 rotate-180"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-8 pb-8 pt-2 text-sm leading-7 text-foreground/75">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
