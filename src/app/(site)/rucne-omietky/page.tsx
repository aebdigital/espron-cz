import type { Metadata } from "next";
import Link from "next/link";
import RucneOmietkyQuoteForm from "@/components/site/RucneOmietkyQuoteForm";

export const metadata: Metadata = {
  title: "Ručné omietky | ESPRON",
  description:
    "Ručné omietky pre rekonštrukcie a menšie objekty. Ponúkame po celom Slovensku. Cena od 12 EUR za m².",
};

const CITIES =
  "Bratislava, Nitra, Košice, Prešov, Poprad, Spišská Nová Ves, Žilina, Banská Bystrica, Trnava, Trenčín, Martin, Liptovský Mikuláš a ich okolí";

const STEPS = [
  {
    num: "1",
    title: "Príprava povrchu",
    desc: "Odstránime prach a nečistoty. Ak sú na stenách väčšie nerovnosti, vyrovnáme ich jadrovou omietkou.",
  },
  {
    num: "2",
    title: "Základný (penetračný) náter",
    desc: "Pred aplikáciou omietky nanesieme základný náter. Tento krok zabezpečuje lepšiu priľnavosť omietky na povrch.",
  },
  {
    num: "3",
    title: "Aplikácia a vyhladenie omietky",
    desc: "Omietku nanesieme na stenu pomocou hladítka alebo špachtle. Po nanesení omietky ju vyhladzujeme a odstraňujeme prebytočnú omietku, čím vytvoríme požadovaný povrch.",
  },
  {
    num: "4",
    title: "Dokončenie",
    desc: "Po vyschnutí je povrch možné ešte jemne prebrúsiť brúsivom alebo jemným šmirglom.",
  },
];

const WHY = [
  {
    title: "Kontrola textúry a štruktúry",
    desc: "Pri ručnom omietaní môžeme kontrolovať textúru a drsnosť povrchu.",
  },
  {
    title: "Variabilné využitie",
    desc: "Ich tradičná jemná štruktúra sa hodí do každého interiéru aj exteriéru. Sú vhodné pri rekonštrukciách (na staré murivo) a na menšie plochy.",
  },
  {
    title: "Vhodné do miestností so zvýšenou vlhkosťou",
    desc: "Ručné omietky sú vhodné aj do miestností zaťažených vlhkosťou, ako sú kúpeľne alebo garáže.",
  },
];

export default function RucneOmietkyPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto w-[95vw] px-6 md:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
            Ručné omietky
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Ručné omietky
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Ručné omietky sú vhodným riešením pri rekonštrukciách alebo menších objektoch s plochou do 200 m².
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
            Ponúkame po celom Slovensku
          </p>
          <p className="mt-2 text-sm leading-7 text-foreground/65">
            V mestách {CITIES}.
          </p>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[95vw] px-6 md:px-10">
          <div className="mb-14">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Ručné omietky
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Postup prác
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {STEPS.map((s) => (
              <div key={s.num} className="rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.05)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-sm font-extrabold text-primary">{s.num}</span>
                </div>
                <h3 className="mb-3 text-base font-bold text-foreground">{s.title}</h3>
                <p className="text-sm leading-7 text-foreground/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ──────────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[95vw] px-6 md:px-10">
          <div className="mb-14">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Ručné omietky
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Prečo použiť ručné omietky namiesto strojových?
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
              Ručné omietky
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Cena
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.05)]">
            <p className="text-sm leading-7 text-foreground/70">
              Cena závisí od typu omietky, hrúbky vrstvy a od rozsahu prípravných prác predchádzajúcim omietaniu. Na základe poskytnutých informácií vám ponúkneme nezáväznú cenovú ponuku.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/60">Cena za prácu</p>
                <p className="mt-1 text-2xl font-extrabold text-primary">od 12 EUR/m²</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-foreground/55">
              Po akceptovaní cenovej ponuky si stanovíme termín realizácie. Pred nástupom sa zaplatí záloha za materiál.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[95vw] max-w-3xl px-6 md:px-10">
          <div className="mb-3">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Ručné omietky
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Ako nás kontaktovať?
            </h2>
          </div>
          <p className="mb-10 text-sm text-foreground/55">
            Po obdržaní informácií vám pošleme cenovú ponuku max do 5 dní (zvyčajne do 1–2 dní). Tá bude obsahovať odhadované náklady na omietacie práce a materiál.
          </p>
          <RucneOmietkyQuoteForm />
        </div>
      </section>
    </>
  );
}
