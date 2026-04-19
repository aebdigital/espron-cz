import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FloatingQuoteButton from "@/components/site/FloatingQuoteButton";
import ServiceRealizationGallery from "@/components/site/ServiceRealizationGallery";
import InterierQuoteForm from "@/components/site/InterierQuoteForm";
import QuoteScrollButton from "@/components/site/QuoteScrollButton";
import ServiceIntroSection from "@/components/site/ServiceIntroSection";
import { CONTACT_INFO, PAGE_OVERRIDES } from "@/lib/site-navigation";

export const metadata: Metadata = {
  title: "Interiérový design | ESPRON",
  description:
    "Interiérový design pro rodinné domy, byty a komerční prostory. Nabízíme po celém Česku. Dispoziční návrh od 200 EUR.",
};

export const revalidate = 0;

const CITIES =
  "Praha, Brno, Ostrava, Plzeň, Olomouc, Liberec, Hradec Králové, České Budějovice, Ústí nad Labem, Pardubice a jejich okolí";

const STEPS = [
  {
    num: "1",
    title: "Koncept a analýza (1–2 týdny)",
    desc: "Designer se spojí s klientem. Setkání proběhne online. Cílem je pochopit potřeby klienta a zjistit, jakým způsobem bude prostor používán. Designer si důkladně prohlédne prostor, který má být navržen. Pozoruje dispozici místností, světelné podmínky, výšku stropů, umístění oken a dveří. Na základě analýzy a pochopení potřeb klienta se definují cíle projektu. Vytvoří se koncept, který zahrnuje návrhy na změnu dispozice, výběr barev, materiálů a nábytku.",
  },
  {
    num: "2",
    title: "Vizualizace (2–4 týdny)",
    desc: "Na základě cíle projektu se vytvoří 2D plány a 3D modely prostoru. 2D plány obsahují umístění stěn, dveří, oken, elektrických rozvodů a potrubí. Na plánech jsou zobrazeny i rozměry místností a nábytku. 3D modely umožňují klientovi vidět, jak bude prostor vypadat z různých úhlů – s barvami stěn, nábytkem, osvětlením a dalšími detaily. Výsledkem jsou realistické obrázky nebo animace, které klientovi pomáhají lépe pochopit návrh a rozhodovat se.",
  },
  {
    num: "3",
    title: "Výběr materiálů a nábytku (1–2 týdny)",
    desc: "V této fázi designer společně s klientem vybírá materiály, které se použijí, a zohledňuje estetické i praktické aspekty prostoru.",
  },
  {
    num: "4",
    title: "Realizace interiéru",
    desc: "Po schválení návrhu klientem začneme s realizací. Ta zahrnuje nákup materiálu, stavební práce a dohled nad celým procesem.",
  },
];

const WHY = [
  {
    title: "Optimalizace prostoru",
    desc: "Naši designéři mají zkušenosti s efektivním využíváním prostoru. Pomohou vám získat maximální potenciál z každé místnosti, ať už jde o byt, dům nebo komerční prostor.",
  },
  {
    title: "Úspora času a stresu",
    desc: "Nemusíte ztrácet čas hledáním inspirace, výběrem barev a nábytku. Máme přehled o aktuálních trendech a dokážeme vám pomoci se rychle rozhodnout.",
  },
  {
    title: "Zapracování osobních preferencí",
    desc: "Každý klient má svůj osobní styl a preference. Dbáme na to, abychom zohlednili všechny preference a vytvořili jedinečný design, který bude odrážet osobnost klienta.",
  },
];

const PRICING = [
  { label: "Dispoziční návrh", price: "od 200 EUR" },
  { label: "3D vizualizace", price: "od 550 EUR" },
  { label: "Vypracování projektu", price: "od 950 EUR" },
];

const CATEGORY = PAGE_OVERRIDES["/interierovy-dizajn"].eyebrow;

export default function InterierovyDizajnPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
 <div className="relative mx-auto w-[92%]">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
            {CATEGORY}
          </p>
          <h1 className="animate-fade-up-delay-1 mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Interiérový design
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Interiérový design představuje ideální řešení pro majitele rodinných domů, bytových domů a komerčních budov, kteří chtějí vytvořit příjemné a atraktivní prostředí pro sebe nebo své zákazníky.
          </p>
          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-3">
            <QuoteScrollButton className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition-colors hover:bg-white/90">
              Kontaktovat nás
            </QuoteScrollButton>
            <Link href={`mailto:${CONTACT_INFO.email}`} className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/10">
              Napsat e-mail
            </Link>
          </div>
        </div>
      </section>

      <ServiceIntroSection
        eyebrow={CATEGORY}
        title="Interiérový design, který začne praktickou dispozicí"
        subtitle="Od prvního konceptu po realizaci prostoru, ve kterém se dobře žije."
        description="Navrhneme řešení pro byty, rodinné domy i komerční prostory tak, aby dobře fungovalo v každodenním používání a zároveň působilo přirozeně."
        bullets={[
          "Dispoziční návrh a analýza prostoru",
          "3D vizualizace, materiály a nábytek",
          "Možnost navázat přímo na realizaci interiéru",
        ]}
        imageSrc="/images/interier.jpg"
        imageAlt="Interiérový design"
      />

      {/* ── COVERAGE ─────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-light py-10">
        <AnimateOnScroll className="mx-auto w-[92%]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
            Nabízíme po celém Česku
          </p>
          <p className="mt-2 text-sm leading-7 text-foreground/65">
            Ve městech {CITIES}.
          </p>
        </AnimateOnScroll>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll className="mb-14">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Interiérový design
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Postup prací
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-8 md:grid-cols-2">
            {STEPS.map((s, index) => (
              <AnimateOnScroll key={s.num} delay={index * 80}>
                <div className="rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.05)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-sm font-extrabold text-primary">{s.num}</span>
                  </div>
                  <h3 className="mb-3 text-base font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm leading-7 text-foreground/70">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ──────────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll className="mb-14">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Interiérový design
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Proč si nechat udělat interiérový design od profesionální firmy?
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-6 md:grid-cols-3">
            {WHY.map((item, index) => (
              <AnimateOnScroll key={item.title} delay={index * 80}>
                <div className="rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.04)]">
                  <h3 className="mb-3 text-base font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-7 text-foreground/70">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll className="mb-14">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Interiérový design
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Cena
            </h2>
          </AnimateOnScroll>
          <div className="grid gap-6 md:grid-cols-3">
            {PRICING.map((p, index) => (
              <AnimateOnScroll key={p.label} delay={index * 80}>
                <div className="rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.05)]">
                  <p className="mb-2 text-sm font-bold text-foreground">{p.label}</p>
                  <p className="text-2xl font-extrabold text-primary">{p.price}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────── */}
      <section
        id="cenova-ponuka"
        className="scroll-mt-32 bg-light py-20 md:scroll-mt-40 md:py-28"
      >
        <AnimateOnScroll className="mx-auto w-[92%] max-w-3xl">
          <div className="mb-3">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Interiérový design
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Jak nás kontaktovat?
            </h2>
          </div>
          <p className="mb-10 text-sm text-foreground/55">
            Po obdržení informací vám pošleme cenovou nabídku maximálně do 5 dnů (obvykle do 1–2 dnů). Po akceptaci cenové nabídky si stanovíme termín prvního předání návrhů. Před zahájením prací se platí záloha.
          </p>
          <InterierQuoteForm />
        </AnimateOnScroll>
      </section>
      <ServiceRealizationGallery
        serviceSlug="interierovy-dizajn"
        site="cz"
        title="Realizace interiérového designu"
      />
      <FloatingQuoteButton />
    </>
  );
}
