import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | ESPRON",
  description:
    "Tipy, postupy a naše skúsenosti zo sveta zatepľovania, rekonštrukcií a stavebných prác.",
};

export default function BlogPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto w-[95vw] px-6 md:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">Blog</p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Tipy, postupy a naše skúsenosti
          </h1>
        </div>
      </section>

      {/* Single post */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[95vw] px-6 md:px-10">
          <Link
            href="/blog/zateplenie-fasady-svojpomocne"
            className="group block max-w-3xl"
          >
            <div className="relative mb-6 aspect-[16/7] overflow-hidden rounded-3xl">
              <Image
                src="/images/realizacie/b0408c_2883303b07a4489798740af9878cc2db~mv2.avif"
                alt="Zateplenie fasády svojpomocne"
                fill
                sizes="(max-width: 1024px) 95vw, 768px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-primary/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                Návod
              </span>
            </div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-3xl">
              Zateplenie fasády svojpomocne – postup prác krok za krokom
            </h2>
            <p className="mb-5 text-sm leading-7 text-foreground/65">
              Rozhodli ste sa pre zateplenie domu svojpomocne? Správny technologický postup je kľúčový pre dlhú životnosť, energetickú úsporu a estetický vzhľad fasády. Nižšie nájdete prehľad krokov, porovnanie zateplenia polystyrénom a minerálnou vatou, odporúčané náradie a užitočné tipy.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Čítať článok
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
