import Link from "next/link";
import CookieSettingsButton from "@/components/cookies/CookieSettingsButton";

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-primary text-white">
 <div className="mx-auto w-[92%] py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Address */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-white/60">
              Adresa
            </h4>
            <p className="text-sm font-light leading-relaxed text-white/80">
              ESPRON s.r.o
              <br />
              IČO: 50915380
              <br />
              Slovenská 31
              <br />
              Spišská Nová Ves, 05201 - Slovensko
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-white/60">
              Kontaktné údaje
            </h4>
            <div className="space-y-3">
              <Link
                href="tel:+421944624685"
                className="block text-sm font-light text-white/80 hover:text-white transition-colors"
              >
                +421 944 624 685
              </Link>
              <Link
                href="mailto:info@espron.sk"
                className="block text-sm font-light text-white/80 hover:text-white transition-colors"
              >
                info@espron.sk
              </Link>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase mb-6 text-white/60">
              Doba kedy nás môžete kontaktovať
            </h4>
            <p className="text-sm font-light text-white/80">
              Po – Pi
            </p>
            <p className="text-sm font-light text-white/80">
              8:00 – 17:00
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light text-white/40">
            ©2023 – 2026 by ESPRON
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs font-light text-white/40 hover:text-white/70 transition-colors"
            >
              Domov
            </Link>
            <Link
              href="#sluzby"
              className="text-xs font-light text-white/40 hover:text-white/70 transition-colors"
            >
              Služby
            </Link>
            <Link
              href="#kontakt"
              className="text-xs font-light text-white/40 hover:text-white/70 transition-colors"
            >
              Kontakt
            </Link>
            <CookieSettingsButton className="text-xs font-light text-white/40 hover:text-white/70 transition-colors">
              Cookies
            </CookieSettingsButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
