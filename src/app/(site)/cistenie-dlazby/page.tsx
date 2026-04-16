import type { Metadata } from "next";
import Link from "next/link";
import CistenieDlazbyQuoteForm from "@/components/site/CistenieDlazbyQuoteForm";

export const metadata: Metadata = {
  title: "Čistenie dlažby | ESPRON",
  description:
    "Vysokotlakové čistenie dlažby, chodníkov, príjazdových ciest a parkovísk. Ponúkame na východnom Slovensku. Cena 2 – 7 EUR/m².",
};

const WHY = [
  {
    title: "Zvýšenie estetiky a hodnoty vašej nehnuteľnosti",
    desc: "Dlažba bude vyzerať ako nová, bez škvŕn, šmúh alebo zafarbenia.",
  },
  {
    title: "Predĺženie životnosti a funkčnosti vašej dlažby",
    desc: "Dlažba bude lepšie odolávať poveternostným vplyvom, mechanickému poškodeniu a nárazom.",
  },
  {
    title: "Zlepšenie bezpečnosti",
    desc: "Dlažba nebude klzká, nerovná alebo popraskaná, čo môže spôsobiť úrazy alebo pády.",
  },
];

export default function CistenieDlazbyPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto w-[95vw] px-6 md:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
            Čistenie dlažby
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Čistenie dlažby
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Chcete, aby vaša dlažba, chodník, príjazdová cesta, alebo parkovisko bolo opäť čisté, pekné a bezpečné? Práve pre vás je určená naša služba vysokotlakového čistenia dlažby.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/kontakt" className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition-colors hover:bg-white/90">
              Kontaktovať nás
            </Link>
            <Link href="mailto:info@espron.sk" className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:bg-white/10">
              Napísať e-mail
            </Link>
          </div>
        </div>
      </section>

      {/* ── COVERAGE ─────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-light py-10">
        <div className="mx-auto w-[95vw] px-6 md:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
            Ponúkame na východnom Slovensku
          </p>
          <p className="mt-2 text-sm leading-7 text-foreground/65">
            V mestách Prešov, Poprad a Spišská Nová Ves.
          </p>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[95vw] max-w-3xl px-6 md:px-10">
          <div className="mb-6">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Čistenie dlažby
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Efektívne riešenie pre váš dvor
            </h2>
          </div>
          <p className="text-sm leading-7 text-foreground/70">
            Čistenie dlažby spočíva v odstránení všetkých nečistôt, machov, plesní a olejov. Na dlažbu aplikujeme vodu pod vysokým tlakom, ktorá odstráni všetky tieto nečistoty. Používame moderné technológie a ekologické prostriedky, ktoré neškodia vašej dlažbe ani životnému prostrediu.
          </p>
        </div>
      </section>

      {/* ── WHY ──────────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[95vw] px-6 md:px-10">
          <div className="mb-14">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Čistenie dlažby
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Prečo si nechať vyčistiť dlažbu?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {WHY.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.04)]">
                <h3 className="mb-3 text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-7 text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[95vw] max-w-3xl px-6 md:px-10">
          <div className="mb-8">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Čistenie dlažby
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Cena
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.05)]">
            <p className="text-sm leading-7 text-foreground/70">
              Cena čistenia dlažby závisí od veľkosti, typu, stavu a materiálu vašej dlažby a od toho, aké metódy a prostriedky použijeme na jej čistenie. Na základe vašich požiadaviek vám ponúkneme nezáväznú cenovú ponuku.
            </p>
            <div className="mt-6">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/60">
                Cena sa pohybuje v rozmedzí
              </p>
              <p className="text-3xl font-extrabold text-primary">2 – 7 EUR/m²</p>
            </div>
            <p className="mt-6 text-sm text-foreground/55">
              Po akceptovaní cenovej ponuky si stanovíme termín realizácie. Pred nástupom sa zaplatí záloha.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[95vw] max-w-3xl px-6 md:px-10">
          <div className="mb-3">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Čistenie dlažby
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Ako nás kontaktovať?
            </h2>
          </div>
          <p className="mb-10 text-sm text-foreground/55">
            Po obdržaní informácií vám pošleme cenovú ponuku max do 5 dní (zvyčajne do 1–2 dní).
          </p>
          <CistenieDlazbyQuoteForm />
        </div>
      </section>
    </>
  );
}
