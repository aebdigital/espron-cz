import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FloatingQuoteButton from "@/components/site/FloatingQuoteButton";
import ServiceRealizationGallery from "@/components/site/ServiceRealizationGallery";
import QuoteScrollButton from "@/components/site/QuoteScrollButton";
import ServiceIntroSection from "@/components/site/ServiceIntroSection";
import { CONTACT_INFO, PAGE_OVERRIDES } from "@/lib/site-navigation";
import type { LegacyGalleryItem } from "@/lib/legacy-gallery-data";

export const metadata: Metadata = {
  title: "Základové desky | ESPRON",
  description:
    "Kvalitní základová deska na klíč s garancí kvality. Odborné realizace v Praze a jižních Čechách pod dohledem certifikovaného stavbyvedoucího. Cena od 500 000 Kč.",
};

const PROBLEMS = [
  { label: "Praskliny ve stěnách" },
  { label: "Problémy s vlhkostí" },
  { label: "Problémy s odvodněním" },
  { label: "Snížená životnost stavby" },
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
  { label: "Vytyčení polohy", icon: "📐" },
  { label: "Shrnutí ornice", icon: "🚜" },
  { label: "Výkopové práce", icon: "⛏️" },
  { label: "Shrnutí štěrku pod deskou", icon: "🪨" },
  { label: "Osazení hromosvodu", icon: "⚡" },
  { label: "Zalití základových pásů", icon: "🪣" },
  { label: "Zaměření geodetem", icon: "📡" },
  { label: "DT tvárnice — 2 řady", icon: "🧱" },
  { label: "Kari sítě a vyztužení roxory", icon: "🔩" },
  { label: "Vylití desky", icon: "💧" },
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
          <AnimateOnScroll>
            <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Problémy nekvalitní základové desky
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
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll className="mb-14 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Všechny potřebné úkony v ceně
            </h2>
            <p className="mt-3 text-sm text-foreground/55">S námi máte garanci kvality</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5">
            {INCLUDED.map((item, index) => (
              <AnimateOnScroll key={item.label} delay={index * 50}>
                <div className="flex flex-col items-center gap-3 text-center">
                  <span className="text-4xl">{item.icon}</span>
                  <p className="text-xs leading-5 text-foreground/70">{item.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section
        id="cenova-ponuka"
        className="scroll-mt-32 bg-white py-20 md:scroll-mt-40 md:py-28"
      >
        <AnimateOnScroll className="mx-auto w-[92%] max-w-3xl text-center">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Jak nás kontaktovat?
          </h2>
          <p className="mb-10 text-sm text-foreground/55">
            Pokud máte vypracovaný projekt pro základovou desku, pošlete nám jej e-mailem.
            Po obdržení informací vám pošleme cenovou nabídku max. do 5 dnů
            (obvykle do 1–2 dnů).
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="rounded-2xl border border-border bg-light p-6 text-left transition-all hover:-translate-y-0.5 hover:border-primary/30"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/55">
                Email
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">{CONTACT_INFO.email}</p>
            </a>
            <a
              href="tel:+420720045365"
              className="rounded-2xl border border-border bg-light p-6 text-left transition-all hover:-translate-y-0.5 hover:border-primary/30"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/55">
                Telefon (CZ)
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">+420 720 045 365</p>
            </a>
            <div className="rounded-2xl border border-border bg-light p-6 text-left">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-primary/55">
                Adresa
              </p>
              <p className="mt-2 text-sm leading-6 text-foreground/80">
                Korunní 2569/108<br />Praha, Česká republika
              </p>
            </div>
          </div>
        </AnimateOnScroll>
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
