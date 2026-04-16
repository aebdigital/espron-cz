import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TepovanieQuoteForm from "@/components/site/TepovanieQuoteForm";

export const metadata: Metadata = {
  title: "Prémiové tepovanie kobercov a sedačiek | ESPRON",
  description:
    "Škvrna na koberci alebo zašpinená sedačka? Žiadny problém. Pošli foto. Do 24 h pošleme cenu a termín. Do rána suché, bez zápachu.",
};

const WHO = [
  {
    title: "Náročné domácnosti",
    icon: (
      <svg className="h-8 w-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      "Celý deň upratujete, a napriek tomu na koberci zostanú škvrny od detí?",
      "Gauč vyzerá ako rodinná kronika nehôd než nový kus nábytku?",
      "Pred príchodom návštevy máte chuť všetko radšej zakryť dekami?",
    ],
  },
  {
    title: "Kancelárie",
    icon: (
      <svg className="h-8 w-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    items: [
      "Sedačka na recepcii si pamätá ešte prvý firemný teambuilding?",
      "Koberec v zasadačke nesie stopy kávy, topánok aj nekonečných porád?",
      "Chcete, aby prvý dojem z kancelárie pôsobil profesionálne, nie ošúchane?",
    ],
  },
  {
    title: "Hotely & apartmány",
    icon: (
      <svg className="h-8 w-8 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    items: [
      "Víkend skončil, hostia odišli a na koberci ostali škvrny od nápojov?",
      "Sedačku v izbe radšej ani nedávate na fotky, aby si ju hostia nevšimli?",
      "Chcete recenzie typu 'čisto a útulne', nie 'škvrny na koberci'?",
    ],
  },
];

const PROCESS = [
  {
    num: "1",
    title: "Vysávanie s HEPA filtrom",
    desc: "Dôkladným povysávaním odstránime prach, peľ aj chlpy, znížime množstvo alergénov a pripravíme povrch na hlbkové čistenie.",
  },
  {
    num: "2",
    title: "Nanesenie čistiacej chémie",
    desc: "Na celý povrch nastriekame profesionálny čistiaci roztok. Uvoľní nečistoty a škvrny hlboko vo vláknach.",
  },
  {
    num: "3",
    title: "Vykefovanie škvrn",
    desc: "Najšpinavšie miesta vykefujeme. Špina sa tak mechanicky naruší a čistenie je účinnejšie.",
  },
  {
    num: "4",
    title: "Extrakcia/odsatie",
    desc: "Na záver všetko prepláchneme a odsajeme extraktorom. Nábytok zostane čistý a len mierne vlhký.",
  },
];

const REASONS = [
  {
    title: "7 dňová garancia",
    desc: "Ak sa škvrna vráti, prídem znova a bezplatne ju pretepujeme.",
  },
  {
    title: "Bezpečné prípravky",
    desc: "Používame šetrné profesionálne čistiace prostriedky, po zaschnutí bezpečné pre deti aj domáce zvieratá.",
  },
  {
    title: "Presný príchod",
    desc: "Dohodneme si 30-minútové časové okno, aby ste nemuseli čakať celý deň. Vieme prísť aj večer alebo cez víkend.",
  },
  {
    title: "Rýchle schnutie",
    desc: "Povrch zostane len jemne vlhký, nie mokrý – pri bežných podmienkach býva suchý do rána.",
  },
];

const PRICING = [
  {
    category: "Čalúnený sedací nábytok",
    items: [
      "Sedačky 10 – 15 EUR/miesto",
      "Kresla od 20 EUR",
      "Sedačky v aute od 7 EUR/sedačka",
    ],
  },
  {
    category: "Koberce plošné",
    items: [
      "s výškou vlasu do 1 cm od 2 EUR/m²",
      "s výškou vlasu nad 1 cm od 3 EUR/m²",
      "Koberce kusové od 6 EUR/m²",
    ],
  },
  {
    category: "Matrace",
    items: [
      "Matrac jedna strana od 16 EUR",
      "Matrac obojstranne od 23 EUR",
    ],
  },
];

export default function TepovaniePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto grid w-[95vw] gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Prémiové tepovanie kobercov a sedačiek
            </h1>
            <p className="mt-5 text-lg font-medium text-white/75">
              Škvrna na koberci alebo zašpinená sedačka? Žiadny problém.
            </p>
            <p className="mt-3 text-base leading-7 text-white/65">
              Pošli foto. Do 24 h pošleme cenu a termín. Do rána suché, bez zápachu.
            </p>
            <p className="mt-3 text-sm font-semibold text-amber-400">
              7-dňová garancia spokojnosti.
            </p>
            <div className="mt-5 text-sm text-white/55">
              <span className="font-semibold text-white/70">Lokalita:</span>{" "}
              Spišská Nová Ves a okolie • Poprad • Prešov
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/kontakt"
                className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary transition-colors hover:bg-white/90"
              >
                Chcem nezáväznú cenovú ponuku
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-amber-400">★★★★★</span>
              <span className="text-sm text-white/55">Hodnotenie na google</span>
            </div>
          </div>
          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl lg:block">
            <Image
              src="/images/realizacie/b0408c_2883303b07a4489798740af9878cc2db~mv2.avif"
              alt="Tepovanie kobercov a sedačiek"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── WHO ──────────────────────────────────────────────────────── */}
      <section className="bg-primary py-20 text-white md:py-28">
        <div className="mx-auto w-[95vw] px-6 md:px-10">
          <div className="mb-14 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Kto a kedy si nás volá?
            </h2>
            <p className="mt-3 text-sm text-white/60">
              Spoznáte sa v niektorej z týchto situácií?
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {WHO.map((group) => (
              <div key={group.title} className="rounded-[1.5rem] border border-white/12 bg-white/8 p-8 backdrop-blur-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  {group.icon}
                </div>
                <h3 className="mb-5 text-base font-bold text-white">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-white/70">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[95vw] px-6 md:px-10">
          <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Ako prebieha prémiové tepovanie
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((s) => (
              <div key={s.num} className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <span className="text-sm font-extrabold text-primary">{s.num}</span>
                </div>
                <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                <p className="text-sm leading-6 text-foreground/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REASONS ──────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto grid w-[95vw] gap-12 px-6 md:px-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Prečo nám zveriť tepovanie
            </h2>
          </div>
          <div className="space-y-6">
            {REASONS.map((r) => (
              <div key={r.title}>
                <p className="font-bold text-foreground">{r.title}</p>
                <p className="mt-1 text-sm leading-6 text-foreground/70">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section className="bg-primary-dark py-20 text-white md:py-28">
        <div className="mx-auto w-[95vw] px-6 md:px-10">
          <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-white md:text-3xl">
            Cena
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {PRICING.map((col) => (
              <div key={col.category}>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">
                  {col.category}
                </p>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-sm text-white/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-sm text-white/60">
            Minimálna suma objednávky je{" "}
            <strong className="text-white">35 EUR</strong>.
          </p>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[95vw] max-w-3xl px-6 md:px-10">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Ako nás kontaktovať?
          </h2>
          <p className="mb-10 text-sm text-foreground/55">
            Po obdržaní informácií vám pošleme cenovú ponuku max do 2 dní. Po akceptovaní cenovej ponuky si stanovíme termín realizácie.
          </p>
          <TepovanieQuoteForm />
        </div>
      </section>
    </>
  );
}
