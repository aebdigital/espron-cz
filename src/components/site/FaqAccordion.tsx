"use client";

import { useState } from "react";

type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border">
      {items.map((item, i) => (
        <div key={i} className="py-5">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-start justify-between gap-4 text-left"
          >
            <span className="text-base font-medium text-foreground">{item.question}</span>
            <span className="mt-0.5 shrink-0 text-primary transition-transform duration-200" style={{ transform: open === i ? "rotate(45deg)" : "none" }}>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          {open === i && (
            <p className="mt-3 text-sm leading-7 text-foreground/70">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
