import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FaqAccordion from "@/components/site/FaqAccordion";
import FloatingQuoteButton from "@/components/site/FloatingQuoteButton";
import InsulationQuoteForm from "@/components/site/InsulationQuoteForm";
import ServiceRealizationGallery from "@/components/site/ServiceRealizationGallery";
import QuoteScrollButton from "@/components/site/QuoteScrollButton";
import ServiceIntroSection from "@/components/site/ServiceIntroSection";
import { getSitePageByPath } from "@/lib/espron-content";
import { ZATEPLENIE_FASADY_REALIZATIONS } from "@/lib/legacy-gallery-data";
import { CONTACT_INFO } from "@/lib/site-navigation";

export const metadata: Metadata = {
  title: "Zateplení fasády | ESPRON",
  description:
    "Kompletní zateplení rodinných domů kdekoli v Česku. Bez estetických chyb a skrytých poplatků. Ceny od 94 €/m².",
};

export const revalidate = 0;

const PROBLEMS = [
  {
    label: "Tepelné mosty",
    desc: "Nesprávné detaily vedou k únikům tepla a vzniku chladných míst v interiéru.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    label: "Vlhnutí stěn",
    desc: "Nekvalitní zateplení brání stěnám 'dýchat', což vede ke srážení vlhkosti a plísním.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5" />
      </svg>
    ),
  },
  {
    label: "Praskliny na fasádě",
    desc: "Nedodržení technologických pauz způsobuje napětí a vznik trhlin v omítce.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" />
      </svg>
    ),
  },
  {
    label: "Zatékání vody",
    desc: "Špatně osazené parapety a lišty umožňují vodě pronikat pod izolant a ničit konstrukci.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    ),
  },
];

const INCLUDED = [
  {
    label: "Postavení lešení",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0l2-2m4 4l2-2m-2 2v2m-4-6V3m0 0L7 5m2-2l2 2" />
      </svg>
    ),
  },
  {
    label: "Zakrytí oken a dlažby",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "Penetrace podkladu",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Lepení izolantu",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0l2-2m4 4l2-2" />
      </svg>
    ),
  },
  {
    label: "Zápustné kotvení",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
  },
  {
    label: "APU lišty a profily",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    label: "Síťka a lepidlo (1.v.)",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 10h16M4 14h16M10 4v16M14 4v16" />
      </svg>
    ),
  },
  {
    label: "Penetrace pod omítku",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Finální fasádní omítka",
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
      </svg>
    ),
  },
];

const BONUSES = [
  {
    num: "Bonus #1",
    title: "Extra záruka +365 dní v základu",
    desc: "V tomto balíčku automaticky prodlužujeme zákonnou záruku. Jsme si jistí kvalitou naší práce, proto za vaši fasádu ručíme déle, než vyžaduje zákon.",
  },
  {
    num: "Bonus #2",
    title: "Dokumentace pro dotační programy",
    desc: "Připravíme za vás technickou dokumentaci: smlouvu o dílo, podrobný soupis prací a potvrzení o ekologické likvidaci odpadu. Vy jen podáte žádost, o zbytek se postaráme my.",
  },
  {
    num: "Bonus #3",
    title: "Fixní cena lešení (žádné doplatky)",
    desc: "Na rozdíl od základního balíčku zde máte nájem lešení už v ceně díla. Neriskujete doplatky za pronájem lešení při nepřízni počasí. Máte jistotu, že dohodnutá částka se v průběhu prací nenavýší.",
  },
];

const PACKAGES = [
  {
    name: "Balíček JISTOTA",
    sub: "Základ poctivé fasády",
    highlight: false,
    items: [
      "Kompletní 10krokový technologický postup ESPRON",
      "Montáž / demontáž a doprava lešení",
      "Ekologický odvoz a likvidace odpadu",
      "Zákonná záruka 2 roky",
    ],
    price: "94 €/m² (EPS) | 104 €/m² (Vata)",
  },
  {
    name: "Balíček BEZSTAROSTI",
    sub: "- Nejoblíbenější -",
    highlight: true,
    items: [
      "Vše z balíčku JISTOTA",
      "+ Extra záruka +365 dní navíc (celkem 3 roky)",
      "+ Nájem lešení v ceně (neriskujete doplatky za lešení. Máte fixní cenu po celou dobu realizace)",
      "+ Sada ochranné impregnace (chrání fasádu před plísněmi a mechy)",
      "+ Prioritní termín realizace (garance nástupu v dohodnutém kalendářním okně)",
      "+ Dokumentace pro dotační programy (připravíme za vás veškeré technické podklady ze strany zhotovitele)",
      "+ Denní foto-report (každý večer dostanete na WhatsApp fotky z průběhu prací pro vaši 100% kontrolu)",
    ],
    price: "99 €/m² (EPS) | 109 €/m² (Vata)",
  },
  {
    name: "Balíček RESTART",
    sub: "Pro nejnáročnější",
    highlight: false,
    items: [
      "Vše z balíčku BEZSTAROSTI",
      "+ Záruka 5 let na celistvost a funkčnost fasády",
      "+ Odborná aplikace impregnace: kompletní ošetření fasády naším týmem",
      "+ Hloubkové čištění okolí: profesionální vyčištění zámkové dlažby a chodníků průmyslovým WAPem",
      "+ Čištění střechy: hloubkové čištění krytiny od mechů a lišejníků pro dokonalý vizuální soulad s novou fasádou",
      "+ Interiérový bonus: profesionální tepování gauče a koberců, aby byl váš domov po rekonstrukci jako nový i uvnitř",
    ],
    price: "144 €/m² (EPS) | 149 €/m² (Vata)",
  },
];

const FAQ = [
  {
    question: "Pracujete po celé České republice?",
    answer: "Ano, zateplení realizujeme po celém Česku. Dojíždíme bez příplatků do všech lokalit.",
  },
  {
    question: "Co když se realizace kvůli počasí protáhne? Budu doplácet za lešení?",
    answer: "V balíčku BEZSTAROSTI a RESTART máte nájem lešení zahrnutý v ceně. Neriskujete žádné doplatky, ať už realizace trvá jakkoli dlouho.",
  },
  {
    question: "Budu mít kontrolu nad prací, i když nejsem doma?",
    answer: "Ano. V balíčku BEZSTAROSTI a RESTART dostáváte každý večer denní foto-report na WhatsApp s fotkami z průběhu prací.",
  },
  {
    question: "Jak je to s platbou?",
    answer: "Po akceptaci cenové nabídky se platí záloha na materiál. Zbytek se doplatí po dokončení prací.",
  },
  {
    question: "V jakém stavu zůstane můj pozemek po vašem odchodu?",
    answer: "Ekologický odvoz a likvidace odpadu jsou součástí každého balíčku. Pozemek předáváme v pořádku.",
  },
  {
    question: "Můžu si dům zateplit svépomocí?",
    answer: "Svépomoc je možná, ale doporučujeme profesionální realizaci – garantuje správný technologický postup, záruku a eliminuje riziko tepelných mostů či prasklin.",
  },
];

export default async function ZateplenieFasadyPage() {
  const page = await getSitePageByPath("/zateplenie-fasady");
  const hiddenHeroHighlights = new Set([
    "Postavenie lešenia",
    "Zakrytie okien a dlažby",
    "Penetrácia podkladu",
    "Lepenie izolantu",
  ]);
  const heroHighlights =
    page?.highlights.filter((highlight) => !hiddenHeroHighlights.has(highlight)) ?? [];

  return (
    <>
      {/* ── HERO (original PageTemplate style) ───────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        {page?.heroImage ? (
          <div className="absolute inset-y-0 right-0 hidden w-[44vw] opacity-30 lg:block">
            <Image src={page.heroImage} alt={page.label} fill sizes="44vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-l from-primary-dark/20 via-primary-dark/40 to-primary-dark" />
          </div>
        ) : null}

 <div className="relative mx-auto grid w-[92%] gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
          <div className="max-w-4xl">
            <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
              {page?.eyebrow ?? "Zateplení fasády"}
            </p>
            <h1 className="animate-fade-up-delay-1 mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
              {page?.label ?? "Zateplení fasády"}
            </h1>
            <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
              {page?.description}
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

          {heroHighlights.length > 0 ? (
            <div className="animate-fade-up-delay-4 grid gap-3">
              {heroHighlights.map((highlight) => (
                <div key={highlight} className="rounded-[1.4rem] border border-white/12 bg-white/8 px-5 py-4 backdrop-blur-sm">
                  <p className="text-sm leading-6 text-white/82">{highlight}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <ServiceIntroSection
        titleSize="compact"
        title={
          <>
            Kompletní zateplení rodinných domů{" "}
            <span className="underline underline-offset-4">kdekoli v Česku.</span>
            <br />
            <span className="font-light text-foreground/70">
              Bez estetických chyb a skrytých poplatků.
            </span>
          </>
        }
        description="Díky práci sehraných 4členných týmů a přísným technologickým postupům eliminujeme běžné chyby, jako jsou trhliny nebo viditelné spoje na omítce."
        secondaryDescription="Zatímco jiní si tyto věci účtují jako příplatky, my je považujeme za základ slušně odvedené práce:"
        bullets={[
          "Postavení a doprava lešení",
          "Kompletní zakrytí oken a dlažby",
          "Odvoz a likvidace odpadu",
        ]}
        note={{
          label: "Poslední šance: zateplení za staré ceny",
          body: (
            <>
              + Bonus <em>„Čistý domov“</em> (tepování a strojové čištění okolí domu)
            </>
          ),
          footer: "Poslední 2 volné termíny",
        }}
        imageSrc="/images/realizacie/b0408c_2883303b07a4489798740af9878cc2db~mv2.avif"
        imageAlt="Zateplení fasády"
      />

      {/* ── PROBLEMS ─────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll className="mb-14 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Problémy způsobené nekvalitním zateplením
            </h2>
            <p className="mt-3 text-sm text-foreground/55">Proč si vybrat odbornou realizaci?</p>
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

      {/* ── INCLUDED ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
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

      {/* ── BONUSES ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll className="mb-14 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Proč naši klienti milují balíček <span className="uppercase">BEZSTAROSTI</span>
            </h2>
            <p className="mt-3 text-sm text-foreground/55">
              Tyto výhody najdete v našem nejoblíbenějším balíčku, který volí až{" "}
              <strong>85 % majitelů domů.</strong>
            </p>
          </AnimateOnScroll>
          <div className="grid gap-8 md:grid-cols-3">
            {BONUSES.map((bonus, index) => (
              <AnimateOnScroll key={bonus.num} delay={index * 80}>
                <div className="rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.05)]">
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em] text-primary/55">{bonus.num}</p>
                  <h3 className="mb-4 text-base font-bold text-foreground">{bonus.title}</h3>
                  <p className="text-sm leading-7 text-foreground/70">{bonus.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[92%]">
          <AnimateOnScroll className="mb-14 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Jasné ceny bez skrytých poplatků
            </h2>
            <p className="mt-3 text-sm text-foreground/55">
              Vyberte si úroveň péče, která nejvíce vyhovuje vašim plánům
            </p>
          </AnimateOnScroll>
          <div className="grid gap-6 md:grid-cols-3">
            {PACKAGES.map((pkg, index) => (
              <AnimateOnScroll key={pkg.name} delay={index * 80}>
                <div
                  className={`rounded-[1.5rem] border p-8 ${
                    pkg.highlight
                      ? "border-primary bg-primary text-white shadow-xl"
                      : "border-border bg-white shadow-[0_12px_40px_rgba(15,29,74,0.05)]"
                  }`}
                >
                  <h3 className={`mb-1 text-base font-extrabold uppercase tracking-tight ${pkg.highlight ? "text-white" : "text-foreground"}`}>
                    {pkg.name}
                  </h3>
                  <p className={`mb-6 text-[11px] font-semibold uppercase tracking-[0.2em] ${pkg.highlight ? "text-white/60" : "text-primary/55"}`}>
                    {pkg.sub}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <svg className={`mt-0.5 h-4 w-4 shrink-0 ${pkg.highlight ? "text-white/70" : "text-primary"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={pkg.highlight ? "text-white/90" : "text-foreground/75"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`text-sm font-bold ${pkg.highlight ? "text-white" : "text-foreground"}`}>
                    Cena: {pkg.price}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── URGENCY ──────────────────────────────────────────────────── */}
      <section className="bg-primary py-20 text-center md:py-28">
        <AnimateOnScroll className="mx-auto w-[92%] max-w-3xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-amber-400">
            Poslední 2 volné termíny
          </p>
          <h2 className="text-2xl font-extrabold uppercase tracking-tight text-white md:text-3xl lg:text-4xl">
            (3 z 5 jsou už obsazené)
          </h2>
          <p className="mt-6 text-base leading-8 text-white/70">
            Zajistěte si místo v kalendáři za aktuální ceny, než začne hlavní sezóna.
          </p>
          <p className="mt-6 text-sm leading-8 text-white/70">
            Rezervujte si zateplení teď a získejte bonus „KOMPLETNÍ RESTART&quot; v hodnotě{" "}
            <strong className="text-amber-400">750 €</strong> úplně zdarma:
          </p>
          <ul className="mt-4 space-y-2 text-sm font-semibold text-white/90">
            <li>+ Hloubkové tepování sedačky a koberců</li>
            <li>+ Strojové čištění okolí domu profi technikou</li>
          </ul>
          <Link
            href="/kontakt"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-sm font-bold text-primary transition-colors hover:bg-white/90"
          >
            Chci si zajistit termín
          </Link>
        </AnimateOnScroll>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[92%] max-w-3xl">
          <AnimateOnScroll>
            <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Často se nás ptáte (FAQ)
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={80}>
            <FaqAccordion items={FAQ} />
          </AnimateOnScroll>
          <AnimateOnScroll delay={120}>
            <p className="mt-10 text-sm text-foreground/55">
              Další nejčastější otázky a odpovědi najdete na{" "}
              <Link href="/zateplenie-fasady/faq" className="text-primary underline underline-offset-2 hover:opacity-70">
                /zateplenie-fasady/faq
              </Link>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────── */}
      <section
        id="cenova-ponuka"
        className="scroll-mt-32 bg-light py-20 md:scroll-mt-40 md:py-28"
      >
        <AnimateOnScroll className="mx-auto w-[92%] max-w-3xl">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Máte zájem o cenovou nabídku na zateplení fasády?
          </h2>
          <p className="mb-10 text-sm text-foreground/55">
            Po obdržení informací vám pošleme cenovou nabídku do 1–2 pracovních dnů.
          </p>
          <InsulationQuoteForm />
        </AnimateOnScroll>
      </section>
      <ServiceRealizationGallery
        serviceSlug="zateplenie-fasady"
        site="cz"
        title="Ukázky zateplení fasád"
        description="Realizace z celé České republiky i Slovenska včetně videoukázky z původní galerie."
        legacyItems={ZATEPLENIE_FASADY_REALIZATIONS}
        columns={4}
      />
      <FloatingQuoteButton />
    </>
  );
}
