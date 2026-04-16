import type { Metadata } from "next";
import Link from "next/link";
import KontaktForm from "@/components/site/KontaktForm";
import { CONTACT_INFO } from "@/lib/site-navigation";

export const metadata: Metadata = {
  title: "Kontakt | ESPRON",
  description:
    "Kontaktujte ESPRON – stavebná spoločnosť s ľudským prístupom. Zavolajte, napíšte e-mail alebo vyplňte formulár.",
};

const CONTACT_ITEMS = [
  {
    label: "Adresa",
    value: `${CONTACT_INFO.company}, ${CONTACT_INFO.addressLines.join(", ")}`,
    href: undefined,
  },
  {
    label: "Telefón",
    value: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`,
  },
  {
    label: "E-mail",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    label: "Dostupnosť",
    value: CONTACT_INFO.hours,
    href: undefined,
  },
];

export default function KontaktPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto w-[95vw] px-6 md:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
            Spojme sa
          </p>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Kontakt
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/72 md:text-lg">
            Máte otázku alebo projekt? Ozvite sa nám — radi vám pomôžeme.
          </p>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid w-[95vw] gap-16 px-6 md:px-10 lg:grid-cols-[1fr_1.6fr] lg:items-start">

          {/* Left — contact info */}
          <div>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground">
              Kontaktné informácie
            </h2>
            <div className="space-y-6">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label}>
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/55">
                    {item.label}
                  </p>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Quick CTA links */}
            <div className="mt-10 space-y-3 border-t border-border pt-10">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/40">
                Rýchly kontakt
              </p>
              <Link
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                {CONTACT_INFO.phone}
              </Link>
              <Link
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                {CONTACT_INFO.email}
              </Link>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-[2rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.07)] md:p-10">
            <h2 className="mb-2 text-xl font-bold text-foreground">
              Napíšte nám
            </h2>
            <p className="mb-8 text-sm text-foreground/55">
              Odpovieme vám do 1 pracovného dňa.
            </p>
            <KontaktForm />
          </div>

        </div>
      </section>
    </>
  );
}
