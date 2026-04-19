import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CistenieFasadyQuoteForm from "@/components/site/CistenieFasadyQuoteForm";
import FloatingQuoteButton from "@/components/site/FloatingQuoteButton";
import ServiceRealizationGallery from "@/components/site/ServiceRealizationGallery";
import QuoteScrollButton from "@/components/site/QuoteScrollButton";
import ServiceIntroSection from "@/components/site/ServiceIntroSection";
import { CISTENIE_FASADY_REALIZATIONS } from "@/lib/legacy-gallery-data";
import { CONTACT_INFO, PAGE_OVERRIDES } from "@/lib/site-navigation";

export const metadata: Metadata = {
  title: "Čištění fasády | ESPRON",
  description:
    "Profesionálním čištěním se zbavte nevzhledných zelených skvrn, mechů a plísní a eliminujte možné alergie. Čištění fasády 5,5 – 9,5 EUR/m².",
};

const PROBLEMS = [
  { label: "Tvorba plísní a mechů" },
  { label: "Degradace stavebních materiálů" },
  { label: "Snížení izolačních vlastností" },
  { label: "Snížení estetické hodnoty" },
];

const WHY = [
  {
    title: "Odbornost",
    desc: "Práce prováděné pod dohledem autorizovaného stavbyvedoucího v Česku i na Slovensku.",
  },
  {
    title: "Specialisté na práce v interiéru i exteriéru",
    desc: "Nabízíme komplexní stavební práce včetně interiérových a exteriérových úprav.",
  },
  {
    title: "Působíme po celém Česku",
    desc: "V Praze, Brně, Ostravě, Plzni, Olomouci, Liberci, Hradci Králové, Českých Budějovicích, Ústí nad Labem, Pardubicích a v jejich okolí.",
  },
];

const CATEGORY = PAGE_OVERRIDES["/cistenie-fasady"].eyebrow;

export default function CistenieFasadyPage() {
  return (
    <>
      {/* ── STANDARD HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto w-[92%]">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
            {CATEGORY}
          </p>
          <h1 className="animate-fade-up-delay-1 mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Čištění fasády
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Profesionální čištění fasády, které odstraní mechy, plísně a zelené skvrny
            a pomůže vrátit domu čistý a udržovaný vzhled.
          </p>
          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-3">
            <QuoteScrollButton className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition-colors hover:bg-white/90">
              Kontaktovat nás
            </QuoteScrollButton>
            <Link
              href={`mailto:${CONTACT_INFO.email}`}
              className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/10"
            >
              Napsat e-mail
            </Link>
          </div>
        </div>
      </section>

      <ServiceIntroSection
        eyebrow={CATEGORY}
        title="Čištění fasády"
        subtitle="Vraťte svému domu původní šmrnc"
        description="Profesionálním čištěním se zbavte nevzhledných zelených skvrn, mechů a plísní a eliminujte možné alergie."
        imageSrc="/images/old-site/cistenie-fasady/tatranska-lomnica-03.webp"
        imageAlt="Čištění fasády"
        titleSize="large"
      />

      {/* ── PROBLEMS ─────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll>
            <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Problémy způsobené špinavou fasádou
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {PROBLEMS.map((p, index) => (
              <AnimateOnScroll key={p.label} delay={index * 70}>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-primary/20 bg-white">
                    <svg className="h-7 w-7 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium leading-5 text-foreground/75">{p.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid w-[92%] gap-12 lg:grid-cols-2 lg:items-center">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Kdo se o vás postará?
            </h2>
            <p className="mt-2 text-lg font-medium text-foreground/60">
              Jsme ESPRON – stavební společnost s lidským přístupem
            </p>
            <p className="mt-6 text-sm leading-7 text-foreground/70">
              Rozumíme tomu, že stavební projekty jsou finančně náročné a že za každým z nich stojí lidé se svými sny a očekáváními. Nejde jen o odbornost, ale také o lidské porozumění. Naší prioritou je transparentnost a otevřená komunikace s klientem.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/70">
              Jsme firma působící po celém Česku i na Slovensku. Poskytujeme kvalitní a odborné stavební služby pod dohledem certifikovaného stavbyvedoucího v obou zemích.
            </p>
            <Link
              href="/o-nas"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90"
            >
              Více o nás a našich hodnotách
            </Link>
          </AnimateOnScroll>
          <AnimateOnScroll delay={120} className="relative hidden aspect-[3/4] max-h-[480px] overflow-hidden rounded-3xl lg:block">
            <Image
              src="/tomas.avif"
              alt="Mgr. Tomáš Richnavský"
              fill
              sizes="45vw"
              className="object-cover object-top"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── WHY ──────────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll>
            <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Proč vyčistit fasádu s námi?
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-8 md:grid-cols-3">
            {WHY.map((item, index) => (
              <AnimateOnScroll key={item.title} delay={index * 80}>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-6 text-foreground/65">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[92%] max-w-3xl">
          <AnimateOnScroll>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Cena čištění fasády
            </h2>
            <p className="mb-8 text-sm leading-7 text-foreground/70">
              S námi nemusíte hádat, jaká bude cena poté, co nás kontaktujete. Transparentně uvádíme rozpětí, ve kterém se ceny pohybují. Cena zahrnuje všechny potřebné práce, včetně postavení lešení, aplikace čisticích a impregnačních prostředků a důkladného opláchnutí.
            </p>
          </AnimateOnScroll>
          <div className="space-y-3">
            <AnimateOnScroll delay={60}>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_8px_24px_rgba(15,29,74,0.05)]">
                <span className="font-bold text-foreground">Čištění fasády:</span>{" "}
                <span className="text-foreground/75">5,5 – 9,5 EUR/m²</span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={120}>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_8px_24px_rgba(15,29,74,0.05)]">
                <span className="font-bold text-foreground">Impregnace fasády:</span>{" "}
                <span className="text-foreground/75">0,5 – 1,5 EUR/m²</span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────── */}
      <section
        id="cenova-ponuka"
        className="scroll-mt-32 bg-light py-20 md:scroll-mt-40 md:py-28"
      >
        <AnimateOnScroll className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Jak nás kontaktovat?
          </h2>
          <p className="mb-10 text-sm text-foreground/55">
            Po obdržení informací vám pošleme cenovou nabídku maximálně do 5 dnů (obvykle do 1–2 dnů). Po akceptaci cenové nabídky si stanovíme termín realizace.
          </p>
          <CistenieFasadyQuoteForm />
        </AnimateOnScroll>
      </section>
      <ServiceRealizationGallery
        serviceSlug="cistenie-fasady"
        site="cz"
        title="Ukázky čištění fasád"
        description="Vybrané realizace čištění fasád – mechy, plísně i vodní kámen zmizí."
        legacyItems={CISTENIE_FASADY_REALIZATIONS}
        columns={3}
      />
      <FloatingQuoteButton />
    </>
  );
}
