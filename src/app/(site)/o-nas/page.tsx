import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "O nás | ESPRON",
  description:
    "Sme ESPRON – stavebná spoločnosť, ktorá spája odbornosť, transparentnosť a osobný prístup. Zistite, prečo sme vznikli a kto tvorí náš tím.",
};

const TEAM = [
  {
    name: "Ing. arch. Lucia Richnavská",
    role: "Riaditeľka interiérového dizajnu",
    image: "/lucia.avif",
  },
  {
    name: "Mgr. Tomáš Richnavský",
    role: "Riaditeľ predaja",
    image: "/tomas.avif",
  },
];

const SERVICES = [
  {
    href: "/zateplenie-fasady",
    label: "Zatepľovacie práce",
    image: "/images/realizacie/b0408c_2883303b07a4489798740af9878cc2db~mv2.avif",
  },
  {
    href: "/interierovy-dizajn",
    label: "Interiérový dizajn",
    image: "/images/interier.jpg",
  },
  {
    href: "/cistenie-fasady",
    label: "Čistenie fasády",
    image: "/images/cistenie.jpg",
  },
];

export default function ONasPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
 <div className="relative mx-auto w-[92%]">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
            ESPRON
          </p>
          <h1 className="animate-fade-up-delay-1 mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            O nás
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Stavebná spoločnosť, ktorá spája odbornosť, transparentnosť a osobný prístup.
          </p>
        </div>
      </section>

      {/* ── PREČO VZNIKOL ESPRON ─────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid w-[92%] gap-12 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
          <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1 lg:max-w-[420px]">
            {TEAM.map((member, index) => (
              <AnimateOnScroll key={member.name} delay={index * 90}>
                <div className="flex flex-col">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 46vw, (max-width: 1024px) 40vw, 200px"
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="mt-4 text-xs text-foreground/55">{member.role}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{member.name}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Text */}
          <AnimateOnScroll className="order-1 lg:order-2 lg:pt-4 lg:pl-8 xl:pl-14">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Prečo vznikol ESPRON
            </h2>
            <p className="mt-6 text-sm leading-7 text-foreground/70">
              Všetko to začalo, keď sme sa pustili do rekonštrukcie vlastného domu. S nadšením, ale aj obavami, sme stáli pred otázkami, ktoré pozná takmer každý:
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Kde nájsť spoľahlivého majstra, ktorý svoju prácu naozaj ľúbi?",
                "Ako sa vyhnúť zbytočnému predražovaniu, vykrúcaniam a nekonečnému ťahaniu?",
                "Dá sa projekt zvládnuť načas – bez stresu a zbytočných kompromisov?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/75">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-foreground/70">
              Naša vlastná skúsenosť nám na vlastnej koži ukázala mnohé nedostatky. Nedodržané termíny, slabá komunikácia a nekvalitnosť boli na dennom poriadku.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/70">
              Preto sme si uvedomili, že musí existovať lepší spôsob, ako robiť stavebné projekty – firmou, spoľahlivo a s rešpektom k zákazníkom.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/70">
              A tak vznikol <strong className="text-foreground">ESPRON</strong> – spoločnosť, ktorá spája odbornosť, transparentnosť a osobný prístup.
            </p>
            <p className="mt-4 text-sm leading-7 text-foreground/70">
              Naším cieľom je priniesť do stavebníctva to, čo nám samotným chýbalo:{" "}
              <strong className="text-foreground">dôveru, kvalitu a výsledky, na ktoré sa môžete spoľahnúť.</strong>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[92%] text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Tešíme sa na spoluprácu
            </h2>
            <p className="mt-3 text-base text-foreground/60">
              Už si len stačí vybrať niektorú z našich služieb
            </p>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {SERVICES.map((s, index) => (
              <AnimateOnScroll key={s.href} delay={index * 80}>
                <Link
                  href={s.href}
                  className="group relative overflow-hidden rounded-3xl"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={s.image}
                      alt={s.label}
                      fill
                      sizes="(max-width: 640px) 95vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary-dark/55 transition-opacity duration-300 group-hover:bg-primary-dark/40" />
                    <div className="absolute inset-0 flex items-end p-6">
                      <div>
                        <p className="text-lg font-bold text-white">{s.label}</p>
                        <p className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-white/70 transition-colors group-hover:text-white">
                          Zistiť viac
                          <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
