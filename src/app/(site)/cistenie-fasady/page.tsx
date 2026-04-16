import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CistenieFasadyQuoteForm from "@/components/site/CistenieFasadyQuoteForm";

export const metadata: Metadata = {
  title: "Čistenie fasády | ESPRON",
  description:
    "Profesionálnym čistením sa zbavte nevzhľadných zelených škvrn, machov a plesní a eliminujte možné alergie. Čistenie fasády 5,5 – 9,5 EUR/m².",
};

const PROBLEMS = [
  { label: "Tvorba plesní a machov" },
  { label: "Degradácia stavebných materiálov" },
  { label: "Zníženie izolačných vlastností" },
  { label: "Zníženie estetickej hodnoty" },
];

const WHY = [
  {
    title: "Odbornosť",
    desc: "Práce vykonávané pod dohľadom autorizovaného stavbyvedúceho na Slovensku a v Česku.",
  },
  {
    title: "Špecialistu na práce v interiéri a exteriéri",
    desc: "Ponúkame komplexné stavebné práce, vrátane interiérových a exteriérových úprav.",
  },
  {
    title: "Pôsobíme na celom Slovensku",
    desc: "V mestách Bratislava, Nitra, Košice, Prešov, Poprad, Spišská Nová Ves, Žilina, Banská Bystrica, Trnava, Trenčín, Martin, Liptovský Mikuláš a ich okolí.",
  },
];

export default function CistenieFasadyPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto grid w-[95vw] gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
              Čistenie fasády
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
              Čistenie fasády
            </h1>
            <p className="mt-3 text-2xl font-light text-white/80 md:text-3xl">
              Vráťte svojmu domu pôvodný šmrnc
            </p>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
              Profesionálnym čistením sa zbavte nevzhľadných zelených škvrn, machov a plesní a eliminujte možné alergie.
            </p>
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
              alt="Čistenie fasády"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ─────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[95vw] px-6 md:px-10">
          <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Problémy spôsobené špinavou fasádou
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {PROBLEMS.map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-primary/20 bg-white">
                  <svg className="h-7 w-7 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-sm font-medium leading-5 text-foreground/75">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid w-[95vw] gap-12 px-6 md:px-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Kto sa o vás postará?
            </h2>
            <p className="mt-2 text-lg font-medium text-foreground/60">
              Sme ESPRON stavebná spoločnosť s ľudským prístupom
            </p>
            <p className="mt-6 text-sm leading-7 text-foreground/70">
              Rozumieme, že stavebné projekty sú finančne náročné a že za každým z nich stoja ľudia so svojimi snami a očakávaniami. Nie je to len o odbornosti, ale aj o ľudskom porozumení. Našou prioritou je transparentnosť a otvorená komunikácia s klientom.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/70">
              Sme firma zo Spišskej Novej Vsi pôsobiaca po celom Slovensku a Česku. Poskytujeme kvalitné a odborné stavebné služby pod dohľadom certifikovaného stavbyvedúceho v oboch krajinách.
            </p>
            <Link
              href="/o-nas"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90"
            >
              Viac o nás a našich hodnotách
            </Link>
          </div>
          <div className="relative hidden aspect-[3/4] max-h-[480px] overflow-hidden rounded-3xl lg:block">
            <Image
              src="/images/realizacie/b0408c_2883303b07a4489798740af9878cc2db~mv2.avif"
              alt="ESPRON tím"
              fill
              sizes="45vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ── WHY ──────────────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[95vw] px-6 md:px-10">
          <h2 className="mb-14 text-center text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Prečo vyčistiť fasádu s nami?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {WHY.map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <svg className="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-sm leading-6 text-foreground/65">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[95vw] max-w-3xl px-6 md:px-10">
          <h2 className="mb-10 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Cena čistenia fasády
          </h2>
          <p className="mb-8 text-sm leading-7 text-foreground/70">
            S nami nemusíte hádať, aká bude cena po tom, čo nás kontaktujete. Transparentne uvádzame rozpätie, v ktorom sa ceny pohybujú. Cena zahŕňa všetky potrebné práce, vrátane rozloženia lešenia, aplikácie čistiacich a impregnačných prostriedkov a dôkladného opláchnutia.
          </p>
          <div className="space-y-3">
            <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_8px_24px_rgba(15,29,74,0.05)]">
              <span className="font-bold text-foreground">Čistenie fasády:</span>{" "}
              <span className="text-foreground/75">5,5 – 9,5 EUR/m²</span>
            </div>
            <div className="rounded-2xl border border-border bg-white p-6 shadow-[0_8px_24px_rgba(15,29,74,0.05)]">
              <span className="font-bold text-foreground">Impregnácia fasády:</span>{" "}
              <span className="text-foreground/75">0,5 – 1,5 EUR/m²</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────────────── */}
      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto w-[95vw] max-w-3xl px-6 md:px-10">
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Ako nás kontaktovať?
          </h2>
          <p className="mb-10 text-sm text-foreground/55">
            Po obdržaní informácií vám pošleme cenovú ponuku max do 5 dní (zvyčajne do 1–2 dní). Po akceptovaní cenovej ponuky si stanovíme termín realizácie.
          </p>
          <CistenieFasadyQuoteForm />
        </div>
      </section>
    </>
  );
}
