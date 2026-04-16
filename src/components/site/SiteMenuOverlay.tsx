"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  CONTACT_INFO,
  isNavigationItemActive,
  NAVIGATION_GROUPS,
} from "@/lib/site-navigation";

type SiteMenuOverlayProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

const mainLinks = NAVIGATION_GROUPS.find((g) => g.title === "Hlavné stránky")?.items ?? [];
const groupedLinks = NAVIGATION_GROUPS.filter(
  (group) =>
    group.title !== "Hlavné stránky" &&
    group.title !== "Zateplenie v praxi" &&
    group.title !== "Ďalšie",
);

export default function SiteMenuOverlay({
  open,
  onClose,
  pathname,
}: SiteMenuOverlayProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed top-0 z-[60] flex h-screen inset-x-0 flex-col overflow-hidden border-b border-white/10 bg-primary shadow-2xl md:h-[70vh]"
        >
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage: "url('/texture.svg')",
              backgroundSize: "cover",
              filter: "invert(1)",
            }}
          />

          <div className="relative z-10 mx-auto flex h-24 w-[95vw] items-center justify-between px-6 md:px-10">
            <div className="flex items-center">
              <span className="text-xl font-black uppercase tracking-wider text-white md:text-2xl">
                ESPRON
              </span>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="group flex items-center gap-3 rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
              >
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-[1.5px] w-full rotate-45 rounded-full bg-white" />
                  <span className="absolute h-[1.5px] w-full -rotate-45 rounded-full bg-white" />
                </span>
                <span className="hover-split-text">
                  <span className="hover-split-text-inner" data-text="Zavrieť">
                    Zavrieť
                  </span>
                </span>
              </button>
            </div>
          </div>

          <div className="relative z-10 flex flex-1 items-center overflow-y-auto pb-8">
            <div className="mx-auto grid w-[95vw] grid-cols-1 gap-12 px-6 py-10 md:grid-cols-[1fr_2fr] md:gap-20 md:px-10 md:py-0">
              <div className="hidden flex-col md:flex">
                <span className="mb-8 block text-xs uppercase tracking-widest text-white/30">
                  Kontakt & Informácie
                </span>

                <div className="mb-8">
                  <p className="mb-2 text-xl font-black tracking-tight text-white">
                    {CONTACT_INFO.company}
                  </p>
                  <p className="text-sm font-light leading-relaxed text-white/50">
                    IČO: {CONTACT_INFO.ico}
                    <br />
                    {CONTACT_INFO.addressLines[0]}
                    <br />
                    {CONTACT_INFO.addressLines[1]}
                    <br />
                    {CONTACT_INFO.addressLines[2]}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Kontaktné údaje
                  </span>
                  <Link
                    href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, "")}`}
                    className="block text-xl font-light text-white transition-colors hover:text-white/70"
                  >
                    {CONTACT_INFO.phone}
                  </Link>
                  <Link
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="block text-lg font-light text-white/60 transition-colors hover:text-white"
                  >
                    {CONTACT_INFO.email}
                  </Link>
                </div>

                <div>
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                    Kedy nás kontaktovať
                  </span>
                  <p className="text-sm font-light text-white/70">
                    {CONTACT_INFO.hours}
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.4 }}
                  >
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
                      Hlavné stránky
                    </p>
                    <div className="space-y-2">
                      {mainLinks.map((item) => {
                        const active = isNavigationItemActive(pathname, item.href);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className={`group block text-base transition-colors md:text-xl ${
                              active ? "text-white" : "text-white/68 hover:text-white"
                            }`}
                          >
                            <span className="hover-split-text leading-tight">
                              <span className="hover-split-text-inner" data-text={item.label}>
                                {item.label}
                              </span>
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>

                  {groupedLinks.map((group, groupIndex) => (
                    <motion.div
                      key={group.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + groupIndex * 0.06, duration: 0.4 }}
                    >
                      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
                        {group.title}
                      </p>
                      <div className="space-y-2">
                        {group.items.map((item) => {
                          const active = isNavigationItemActive(pathname, item.href);
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={onClose}
                              className={`group block text-base transition-colors md:text-xl ${
                                active ? "text-white" : "text-white/68 hover:text-white"
                              }`}
                            >
                              <span className="hover-split-text leading-tight">
                                <span className="hover-split-text-inner" data-text={item.label}>
                                  {item.label}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
