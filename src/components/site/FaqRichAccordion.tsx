"use client";

import type { ReactNode } from "react";
import InteractiveFaqAccordion from "@/components/site/InteractiveFaqAccordion";

type FaqRichItem = { question: string; answer: ReactNode };

export default function FaqRichAccordion({ items }: { items: FaqRichItem[] }) {
  return <InteractiveFaqAccordion items={items} variant="rich" />;
}
