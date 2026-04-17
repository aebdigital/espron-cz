"use client";

import InteractiveFaqAccordion from "@/components/site/InteractiveFaqAccordion";

type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return <InteractiveFaqAccordion items={items} variant="default" />;
}
