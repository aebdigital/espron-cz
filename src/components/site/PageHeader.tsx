"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  isNavigationItemActive,
  PRIMARY_SUBPAGE_LINKS,
} from "@/lib/site-navigation";
import SiteMenuOverlay from "@/components/site/SiteMenuOverlay";

export default function PageHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-primary/92 shadow-[0_18px_60px_rgba(8,15,40,0.22)] backdrop-blur-xl"
            : "bg-gradient-to-b from-primary-dark/65 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-[95vw] items-center justify-between px-6 md:h-24 md:px-10">
          <Link
            href="/"
            className="text-lg font-black uppercase tracking-[0.28em] text-white md:text-xl"
          >
            ESPRON
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {PRIMARY_SUBPAGE_LINKS.map((item) => {
              const active = isNavigationItemActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs font-semibold uppercase tracking-[0.24em] transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-white after:transition-transform after:duration-300 ${
                    active ? "text-white after:scale-x-100" : "text-white/60 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10"
          >
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px w-full rounded-full bg-white" />
              <span className="h-px w-full rounded-full bg-white" />
            </span>
            Menu
          </button>
        </div>
      </header>

      <SiteMenuOverlay
        open={open}
        onClose={() => setOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
