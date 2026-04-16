import type { Metadata } from "next";
import Link from "next/link";
import InterierQuoteForm from "@/components/site/InterierQuoteForm";

export const metadata: Metadata = {
  title: "Interiérový dizajn | ESPRON",
  description:
    "Interiérový dizajn pre rodinné domy, byty a komerčné priestory. Ponúkame po celom Slovensku. Dispozičný návrh od 200 EUR.",
};

const CITIES =
  "Bratislava, Nitra, Košice, Prešov, Poprad, Spišská Nová Ves, Žilina, Banská Bystrica, Trnava, Trenčín, Martin, Liptovský Mikuláš a ich okolí";

const STEPS = [
  {
    num: "1",
    title: "Koncept a analýza (1–2 týždne)",
    desc: "Dizajnér sa spojí s klientom. Toto stretnutie prebehne online. Cieľom je pochopiť potreby klienta a zistiť, akým spôsobom bude priestor používaný. Dizajnér si dôkladne prezrie priestor, ktorý má byť navrhnutý. Pozoruje dispozíciu miestností, svetelné podmienky, výšku stropov, umiestnenie okien a dverí. Na základe analýzy a pochopenia potrieb klienta sa definujú ciele projektu. Vytvorí sa koncept, ktorý zahŕňa návrhy na zmenu dispozície, výber farieb, materiálov a nábytku.",
  },
  {
    num: "2",
    title: "Vizualizácia (2–4 týždne)",
    desc: "Na základe cieľa projektu sa vytvoria 2D plány a 3D modely priestoru. 2D plány obsahujú umiestnenie stien, dverí, okien, elektrických rozvodov a potrubí. Na plánoch sú zobrazené aj rozmery miestností a nábytku. 3D modely umožňujú klientovi vidieť, ako bude priestor vyzerať z rôznych uhlov — s farbami stien, nábytkom, osvetlením a ďalšími detailmi. Výsledkom sú realistické obrázky alebo animácie, ktoré klientovi pomáhajú lepšie pochopiť návrh a rozhodovať sa.",
  },
  {
    num: "3",
    title: "Výber materiálov a nábytku (1–2 týždne)",
    desc: "V tejto fáze dizajnér spolu s klientom vyberajú materiály, ktoré sa použijú, pričom berú do úvahy estetiku a praktické aspekty priestoru.",
  },
  {
    num: "4",
    title: "Realizácia interiéru",
    desc: "Po schválení návrhu klientom začneme s realizáciou. Tá zahŕňa nákup materiálu, stavebné práce a dohľad nad celým procesom.",
  },
];

const WHY = [
  {
    title: "Optimalizácia priestoru",
    desc: "Naši dizajnéri majú skúsenosti s efektívnym využívaním priestoru. Pomôžu vám získať maximálny potenciál z každej miestnosti, či už ide o byt, dom alebo komerčný priestor.",
  },
  {
    title: "Úspora času a stresu",
    desc: "Nemusíte strácať čas hľadaním inšpirácie, výberom farieb a nábytku. Máme prehľad o aktuálnych trendoch a dokážeme vám pomôcť sa rýchlo rozhodnúť.",
  },
  {
    title: "Zapracovanie osobných preferencií",
    desc: "Každý klient má svoj osobný štýl a preferencie. Dbáme na to, aby sme zohľadnili všetky preferencie a vytvorili unikátny dizajn, ktorý bude odrážať osobnosť klienta.",
  },
];

const PRICING = [
  { label: "Dispozičný návrh", price: "od 200 EUR" },
  { label: "3D vizualizácie", price: "od 550 EUR" },
  { label: "Vypracovanie projektu", price: "od 950 EUR" },
];

export default function InterierovyDizajnPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto w-[95vw] px-6 md:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
            Interiérový dizajn
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Interiérový dizajn
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Interiérový dizajn predstavuje ideálne riešenie pre vlastníkov rodinných domov, bytových domov a komerčných budov, ktorí chcú vytvoriť príjemné a atraktívne prostredie pre seba alebo svojich zákazníkov.
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
              Interiérový dizajn
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
              Interiérový dizajn
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Prečo si nechať urobiť interiérový dizajn od profesionálnej firmy?
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
        <div className="mx-auto w-[95vw] px-6 md:px-10">
          <div className="mb-14">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Interiérový dizajn
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Cena
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {PRICING.map((p) => (
              <div key={p.label} className="rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.05)]">
                <p className="mb-2 text-sm font-bold text-foreground">{p.label}</p>
                <p className="text-2xl font-extrabold text-primary">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[95vw] max-w-3xl px-6 md:px-10">
          <div className="mb-3">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Interiérový dizajn
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Ako nás kontaktovať?
            </h2>
          </div>
          <p className="mb-10 text-sm text-foreground/55">
            Po obdržaní informácií vám pošleme cenovú ponuku max do 5 dní (zvyčajne do 1–2 dní). Po akceptovaní cenovej ponuky si stanovíme termín prvého odovzdania návrhov. Pred začiatkom prác sa zaplatí záloha.
          </p>
          <InterierQuoteForm />
        </div>
      </section>
    </>
  );
}
