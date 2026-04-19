"use client";

import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import type { LegacyGalleryItem } from "@/lib/legacy-gallery-data";

type LegacyGallerySectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: LegacyGalleryItem[];
  columns?: 3 | 4;
};

export default function LegacyGallerySection({
  eyebrow = "Realizace",
  title,
  description,
  items,
  columns = 3,
}: LegacyGallerySectionProps) {
  const gridClassName =
    columns === 4 ? "sm:grid-cols-2 xl:grid-cols-4" : "sm:grid-cols-2 xl:grid-cols-3";
  const sizes =
    columns === 4
      ? "(min-width: 1280px) 22vw, (min-width: 640px) 44vw, 92vw"
      : "(min-width: 1280px) 30vw, (min-width: 640px) 44vw, 92vw";

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto w-[92%]">
        <AnimateOnScroll className="mb-14 max-w-3xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
            {eyebrow}
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-sm leading-7 text-foreground/60">{description}</p>
          ) : null}
        </AnimateOnScroll>

        <div className={`grid gap-5 ${gridClassName}`}>
          {items.map((item, index) => (
            <AnimateOnScroll key={`${item.title}-${item.image}`} delay={index * 60}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_12px_40px_rgba(15,29,74,0.06)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={sizes}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/15 to-transparent" />
                  {item.kind === "video" ? (
                    <div className="absolute right-4 top-4 rounded-full bg-white/14 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                      Video
                    </div>
                  ) : null}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-sm font-semibold text-white md:text-base">
                      {item.title}
                    </p>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
