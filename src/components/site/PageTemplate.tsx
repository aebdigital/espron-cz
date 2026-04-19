import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FaqAccordion from "@/components/site/FaqAccordion";
import { CONTACT_INFO } from "@/lib/site-navigation";
import type { ContentBlock, SitePage } from "@/lib/espron-content";

type PageTemplateProps = {
  page: SitePage;
};

function formatDate(input: string): string | null {
  if (!input) {
    return null;
  }

  try {
    return new Intl.DateTimeFormat("cs-CZ", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(input));
  } catch {
    return null;
  }
}

function renderBlock(block: ContentBlock) {
  if (block.type === "paragraphs") {
    return (
      <AnimateOnScroll key={block.title}>
        <section className="rounded-[2rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.05)] md:p-10">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
            Obsah
          </p>
          <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {block.title}
          </h2>
          <div className="mt-6 max-w-4xl space-y-4 text-base leading-8 text-foreground/78">
            {block.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </AnimateOnScroll>
    );
  }

  if (block.type === "facts") {
    return (
      <section key={block.title} className="space-y-6">
        <AnimateOnScroll>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Fakty
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {block.title}
            </h2>
          </div>
        </AnimateOnScroll>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {block.items.map((item, index) => (
            <AnimateOnScroll key={item.label} delay={index * 70}>
              <div className="rounded-[1.75rem] border border-border bg-light p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/55">
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-semibold leading-snug text-foreground">
                  {item.value}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "pairs") {
    return (
      <section key={block.title} className="space-y-6">
        <AnimateOnScroll>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Přehled
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {block.title}
            </h2>
          </div>
        </AnimateOnScroll>
        <div className="grid gap-4 md:grid-cols-2">
          {block.items.map((item, index) => (
            <AnimateOnScroll key={item.title} delay={index * 70}>
              <div className="rounded-[1.75rem] border border-border bg-white p-6 shadow-[0_12px_36px_rgba(15,29,74,0.04)]">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-foreground/72">
                  {item.body}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "steps") {
    return (
      <section key={block.title} className="space-y-6">
        <AnimateOnScroll>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Postup
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {block.title}
            </h2>
          </div>
        </AnimateOnScroll>
        <div className="grid gap-4">
          {block.items.map((item, index) => (
            <AnimateOnScroll key={item.title} delay={index * 80}>
              <div className="grid gap-5 rounded-[1.75rem] border border-border bg-white p-6 shadow-[0_12px_36px_rgba(15,29,74,0.04)] md:grid-cols-[84px_1fr]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  {item.body ? (
                    <p className="mt-3 text-sm leading-7 text-foreground/75">
                      {item.body}
                    </p>
                  ) : null}
                  {item.details && item.details.length > 0 ? (
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-foreground/72">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "faq") {
    return (
      <section key={block.title} className="space-y-6">
        <AnimateOnScroll>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              FAQ
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {block.title}
            </h2>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={80}>
          <FaqAccordion items={block.items} />
        </AnimateOnScroll>
      </section>
    );
  }

  return (
    <AnimateOnScroll key={block.title}>
      <section className="rounded-[2rem] border border-border bg-light p-8 md:p-10">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
          Původní obsah
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {block.title}
        </h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="rounded-[1.2rem] border border-white/70 bg-white/80 px-5 py-4 text-sm leading-7 text-foreground/74"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </AnimateOnScroll>
  );
}

export default function PageTemplate({ page }: PageTemplateProps) {
  const publishedDate = formatDate(page.lastmod);

  return (
    <main className="bg-[linear-gradient(180deg,#f5f7fb_0%,#ffffff_18%,#ffffff_100%)]">
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        {page.heroImage ? (
          <div className="absolute inset-y-0 right-0 hidden w-[44vw] opacity-30 lg:block">
            <Image
              src={page.heroImage}
              alt={page.label}
              fill
              sizes="44vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-primary-dark/20 via-primary-dark/40 to-primary-dark" />
          </div>
        ) : null}

 <div className="relative mx-auto grid w-[92%] gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="max-w-4xl">
            <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
              {page.eyebrow}
            </p>
            <h1 className="animate-fade-up-delay-1 mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
              {page.label}
            </h1>
            <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              {page.description}
            </p>

            <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition-colors hover:bg-white/90"
              >
                Kontaktovat nás
              </Link>
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/10"
              >
                Napsat e-mail
              </Link>
            </div>
          </div>

          <div className="animate-fade-up-delay-4 grid gap-3">
            {page.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[1.4rem] border border-white/12 bg-white/8 px-5 py-4 backdrop-blur-sm"
              >
                <p className="text-sm leading-6 text-white/82">{highlight}</p>
              </div>
            ))}
            {publishedDate ? (
              <div className="rounded-[1.4rem] border border-white/12 bg-white/8 px-5 py-4 backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  Poslední změna
                </p>
                <p className="mt-2 text-sm text-white/82">{publishedDate}</p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

 <div className="mx-auto w-[92%] pb-20 pt-12 md:pb-24 md:pt-16">
        {page.galleryImages.length > 0 ? (
          <section className="mb-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.galleryImages.map((image, index) => (
              <AnimateOnScroll key={image} delay={index * 80}>
                <div
                  className={`relative overflow-hidden rounded-[1.9rem] border border-border bg-light ${
                    index === 0 ? "md:col-span-2 xl:col-span-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image}
                      alt={page.label}
                      fill
                      sizes={index === 0 ? "(min-width: 1280px) 66vw, 100vw" : "(min-width: 1280px) 22vw, 100vw"}
                      className="object-cover"
                    />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </section>
        ) : null}

        <div className="space-y-16">
          {page.blocks.map((block) => renderBlock(block))}
        </div>

        {page.related.length > 0 ? (
          <section className="mt-20 rounded-[2rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.05)] md:p-10">
            <AnimateOnScroll>
              <div>
                <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
                  Dále na webu
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Související podstránky
                </h2>
              </div>
            </AnimateOnScroll>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {page.related.map((item, index) => (
                <AnimateOnScroll key={item.href} delay={index * 80}>
                  <Link
                    href={item.href}
                    className="group rounded-[1.6rem] border border-border bg-light px-6 py-6 transition-all hover:-translate-y-1 hover:border-primary/25 hover:bg-white"
                  >
                    <p className="text-lg font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground/65">
                      Otevřít podstránku s navázaným obsahem z původního webu.
                    </p>
                    <span className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                      Otevřít
                    </span>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
