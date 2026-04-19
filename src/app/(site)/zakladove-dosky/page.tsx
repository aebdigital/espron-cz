import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FloatingQuoteButton from "@/components/site/FloatingQuoteButton";
import ServiceRealizationGallery from "@/components/site/ServiceRealizationGallery";
import QuoteScrollButton from "@/components/site/QuoteScrollButton";
import ServiceIntroSection from "@/components/site/ServiceIntroSection";
import BuilderContactForm, { type BuilderContactField } from "@/components/site/BuilderContactForm";
import { CONTACT_INFO, PAGE_OVERRIDES } from "@/lib/site-navigation";
import type { LegacyGalleryItem } from "@/lib/legacy-gallery-data";

export const metadata: Metadata = {
  title: "Základové desky | ESPRON",
  description:
    "Kvalitní základová deska na klíč s garancí kvality. Odborné realizace v Praze a jižních Čechách pod dohledem certifikovaného stavbyvedoucího. Cena od 500 000 Kč.",
};

const PROBLEMS = [
  {
    label: "Statické poruchy",
    desc: "Nekvalitní podloží nebo betonáž způsobují praskání nosných zdí a poklesy stavby.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10" />
      </svg>
    ),
  },
  {
    label: "Vlhkost a plísně",
    desc: "Špatná hydroizolace vede k vzlínání zemní vlhkosti a vzniku zdraví škodlivých plísní.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5" />
      </svg>
    ),
  },
  {
    label: "Geometrické nepřesnosti",
    desc: "Nerovná deska prodražuje pokládku podlah a komplikuje montáž hrubé stavby.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "Snížená životnost",
    desc: "Nekvalitní materiály vedou k degradaci betonu a korozi armatury v základech.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const WHY = [
  {
    title: "Odbornost",
    desc: "Práce prováděné pod dohledem autorizovaného stavbyvedoucího v Česku i na Slovensku.",
  },
  {
    title: "Specialisté na interiér i exteriér",
    desc: "Nabízíme komplexní stavební služby — od základové desky přes hrubou stavbu až po dokončovací práce.",
  },
  {
    title: "Působíme v okolí Prahy a na jihu Čech",
    desc: "Realizujeme v Praze, Českých Budějovicích a okolních krajích.",
  },
];

const INCLUDED = [
  {
    label: "Vytyčení polohy",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Výkopové práce",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0l2-2m4 4l2-2" />
      </svg>
    ),
  },
  {
    label: "Průchodky (IS)",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    label: "Armování a betonáž",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 10h16M4 14h16M10 4v16M14 4v16" />
      </svg>
    ),
  },
  {
    label: "Vibro-shutnění",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const LEGACY_REALIZATIONS: LegacyGalleryItem[] = [
  {
    title: "Praha",
    alt: "Základová deska — realizace v Praze",
    image: "https://static.wixstatic.com/media/11062b_52669a954ee44f869d54e8018d13f653~mv2.jpg",
  },
  {
    title: "České Budějovice",
    alt: "Základová deska — realizace v Českých Budějovicích",
    image: "https://static.wixstatic.com/media/11062b_f9d5b18192af4498ba7ea4c24b39794c~mv2.jpg",
  },
  {
    title: "Praha — okolí",
    alt: "Základová deska — realizace v okolí Prahy",
    image: "https://static.wixstatic.com/media/11062b_3713205551c14d93815f24f31dacae2c~mv2.jpg",
  },
  {
    title: "Jižní Čechy",
    alt: "Základová deska — realizace v jižních Čechách",
    image: "https://static.wixstatic.com/media/b96c1ff1d8f44a62b3a46f48b230d29f.jpg",
  },
  {
    title: "Příprava terénu",
    alt: "Příprava terénu pro základovou desku",
    image: "https://static.wixstatic.com/media/11062b_7c13d53ba87a43c5b3ff8e73ee261a61~mv2.jpg",
  },
  {
    title: "Výkop a štěrk",
    alt: "Výkopové práce a shrnutí štěrku pod deskou",
    image: "https://static.wixstatic.com/media/1bdf38229a3e48f5aa5bf33a7c65ca92.jpg",
  },
  {
    title: "Zaměření geodetem",
    alt: "Zaměření základové desky geodetem",
    image: "https://static.wixstatic.com/media/11062b_09cea57d90d74a888d605bd9afdd6da7~mv2.jpg",
  },
  {
    title: "Vyztužení a betonáž",
    alt: "Vyztužení kari sítěmi a betonáž desky",
    image: "https://static.wixstatic.com/media/11062b_ba1ebba084cc42269d63cbad8cc9a929~mv2.jpg",
  },
];

const FORM_FIELDS: BuilderContactField[] = [
  { id: "name", name: "name", label: "Jméno a příjmení", type: "text", required: true, width: "half" },
  { id: "email", name: "email", label: "E-mail", type: "email", required: true, width: "half" },
  { id: "phone", name: "phone", label: "Telefon", type: "tel", required: true, width: "half" },
  { id: "size", name: "size", label: "Velikost základové desky (m²)", type: "text", width: "half" },
  { id: "terrain", name: "terrain", label: "Terén pozemku (rovina / kopec)", type: "text", width: "half" },
  { id: "access", name: "access", label: "Přístup na pozemek", type: "text", width: "half" },
  { id: "location", name: "location", label: "Lokalita (město a oblast)", type: "text", width: "full" },
  { id: "message", name: "message", label: "Zpráva / Upřesnění", type: "textarea", width: "full" },
];

const CATEGORY = PAGE_OVERRIDES["/zakladove-dosky"].eyebrow;

export default function ZakladoveDoskyPage() {
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
            Základová deska na klíč s garancí kvality
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Kvalitní základovou deskou zajistíte stabilitu a bezpečnost vašeho domu,
            předejdete nežádoucím pohybům stavby a zvýšíte životnost vaší nemovitosti.
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
        title="Základová deska na klíč"
        subtitle="Pevný základ pro váš dům"
        description="Kvalitně provedená základová deska je předpokladem dlouhé životnosti stavby. Zajistíme všechny potřebné kroky — od vytyčení polohy až po vylití desky."
        imageSrc="https://static.wixstatic.com/media/11062b_52669a954ee44f869d54e8018d13f653~mv2.jpg"
        imageAlt="Realizace základové desky"
        titleSize="large"
      />

      {/* ── PROBLEMS ─────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll className="mb-14 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Problémy spôsobené nekvalitnou základovou doskou
            </h2>
            <p className="mt-3 text-sm text-foreground/55">Proč investovat do kvalitního základu?</p>
          </AnimateOnScroll>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROBLEMS.map((p, index) => (
              <AnimateOnScroll key={p.label} delay={index * 100}>
                <div className="group rounded-[2rem] border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_50px_rgba(15,29,74,0.06)]">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {p.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{p.label}</h3>
                  <p className="text-sm leading-7 text-foreground/60">{p.desc}</p>
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
              Jsme ESPRON — stavební společnost s lidským přístupem
            </p>
            <p className="mt-6 text-sm leading-7 text-foreground/70">
              Rozumíme, že stavební projekty jsou finančně náročné a že za každým z nich stojí lidé se svými sny a očekáváními. Není to jen o odbornosti, ale také o lidském porozumění. Naší prioritou je transparentnost a otevřená komunikace s klienty.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/70">
              Jsme firma ze Spišské Nové Vsi působící po celém Slovensku a Česku. Poskytujeme kvalitní a odborné stavební služby pod dohledem certifikovaného stavbyvedoucího v obou zemích.
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
              src="https://static.wixstatic.com/media/b0408c_635a001688e544d9951b9c8c4d5f91c2~mv2.jpg"
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
              Proč na základové desky s námi?
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
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Cena za základovou desku
            </h2>
            <p className="mb-8 text-sm leading-7 text-foreground/70">
              Cena za základovou desku závisí na několika faktorech. Mezi hlavní patří
              velikost a složitost projektu, tloušťka betonu, geologické podmínky na pozemku
              a potřebné práce při přípravě a úpravě terénu.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={80}>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center shadow-[0_8px_24px_rgba(15,29,74,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">
                Cena začíná od
              </p>
              <p className="mt-3 text-3xl font-extrabold text-foreground md:text-4xl">
                500 000 Kč
              </p>
              <p className="mt-3 text-sm text-foreground/60">
                Cena zahrnuje všechny potřebné činnosti pro realizaci.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── INCLUDED ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll className="mb-14 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.26em] text-primary/55">
              Základové desky
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Všechny potřebné úkony v ceně
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
            {INCLUDED.map((item, index) => (
              <AnimateOnScroll key={item.label} delay={index * 80}>
                <div className="flex flex-col items-center gap-5 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-white text-primary shadow-sm transition-transform hover:scale-110">
                    {item.icon}
                  </div>
                  <p className="text-sm font-bold text-foreground/80 leading-tight">{item.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section
        id="cenova-ponuka"
        className="scroll-mt-32 bg-light py-20 md:scroll-mt-40 md:py-28"
      >
        <div className="mx-auto w-[92%] max-w-4xl">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Jak nás kontaktovat?
            </h2>
            <p className="mx-auto max-w-2xl text-base text-foreground/60">
              Pokud máte vypracovaný projekt pro základovou desku, prosím, pošlete nám jej e-mailem na{" "}
              <a href={`mailto:${CONTACT_INFO.email}`} className="font-bold text-primary underline">
                {CONTACT_INFO.email}
              </a>.
            </p>
          </AnimateOnScroll>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <AnimateOnScroll delay={100}>
              <div className="rounded-3xl border border-border bg-white p-8 md:p-10">
                <h3 className="mb-6 text-xl font-bold text-foreground">Poptávkový formulář</h3>
                <p className="mb-8 text-sm leading-7 text-foreground/60">
                  Pokud nemáte projekt, vyplňte prosím tento formulář. Po obdržení informací vám pošleme cenovou nabídku maximálně do 5 dnů (obvykle do 1–2 dnů).
                </p>
                <BuilderContactForm
                  fields={FORM_FIELDS}
                  subject="Poptávka: Základová deska (CZ)"
                  buttonText="Odeslat poptávku"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200} className="space-y-8">
              <div>
                <h3 className="mb-4 text-xl font-bold text-foreground">Další kroky</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">1</div>
                    <div>
                      <h4 className="font-bold text-foreground">Cenová nabídka</h4>
                      <p className="mt-1 text-sm text-foreground/60">Obsahuje odhadované náklady na výkopové práce a zhotovení základové desky včetně materiálu a práce.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">2</div>
                    <div>
                      <h4 className="font-bold text-foreground">Termín realizace</h4>
                      <p className="mt-1 text-sm text-foreground/60">Po akceptování cenové nabídky si stanovíme závazný termín realizace.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">3</div>
                    <div>
                      <h4 className="font-bold text-foreground">Záloha za materiál</h4>
                      <p className="mt-1 text-sm text-foreground/60">Před nástupem našich pracovníků na stavbu se zaplatí záloha za materiál.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-primary/5 p-8">
                <h4 className="mb-4 font-bold text-foreground">Přímý kontakt</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <a href={`tel:+420720045365`} className="flex flex-col rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary/30">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Telefon (CZ)</span>
                    <span className="mt-1 font-bold text-foreground">+420 720 045 365</span>
                  </a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="flex flex-col rounded-2xl border border-border bg-white p-5 transition-colors hover:border-primary/30">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary/50">Email</span>
                    <span className="mt-1 font-bold text-foreground">{CONTACT_INFO.email}</span>
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <ServiceRealizationGallery
        serviceSlug="zakladove-dosky"
        site="cz"
        title="Realizace základových desek"
        description="Vybrané realizace v Praze a jižních Čechách."
        legacyItems={LEGACY_REALIZATIONS}
        columns={4}
      />
      <FloatingQuoteButton />
    </>
  );
}
