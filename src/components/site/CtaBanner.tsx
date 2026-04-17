import Link from "next/link";
import { FEATURED_FACADE_IMAGE } from "@/lib/service-page-media";
import { CONTACT_INFO } from "@/lib/site-navigation";

export default function CtaBanner() {
  return (
    <section className="relative z-10 overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FEATURED_FACADE_IMAGE}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/90 to-primary" />

      <div className="relative z-10 py-20 text-center md:py-32">
 <div className="mx-auto w-[92%]">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-7xl">
            Plánujete stavať alebo rekonštruovať?
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg font-light italic leading-relaxed text-white/50 md:text-xl">
            Kontaktujte nás a získajte nezáväznú cenovú ponuku do 48 hodín.
          </p>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-sm font-bold text-primary shadow-xl transition-colors hover:bg-white/90"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hover-split-text">
                <span className="hover-split-text-inner" data-text={CONTACT_INFO.phone}>{CONTACT_INFO.phone}</span>
              </span>
            </Link>
            <Link
              href={`mailto:${CONTACT_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-10 py-5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="hover-split-text">
                <span className="hover-split-text-inner" data-text={CONTACT_INFO.email}>{CONTACT_INFO.email}</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
