"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SiteMenuOverlay from "@/components/site/SiteMenuOverlay";
import {
  FEATURED_FACADE_IMAGE,
  INTERIOR_DESIGN_IMAGE,
  getServicePreviewImage,
} from "@/lib/service-page-media";
import {
  isNavigationItemActive,
  NAVIGATION_GROUPS,
} from "@/lib/site-navigation";

type MegaMenuId = "stavebni" | "architektonicke" | "cisticí";

type MegaMenuItem = {
  href: string;
  label: string;
  image: string;
  description: string;
};

type MegaMenuPanel = {
  eyebrow: string;
  title: string;
  description: string;
  items: MegaMenuItem[];
};

type DesktopNavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "menu"; label: string; menuId: MegaMenuId };

const PANEL_TRANSITION = {
  duration: 0.8,
  ease: [0.76, 0, 0.24, 1] as const,
};

const DESKTOP_NAV_ITEMS: DesktopNavItem[] = [
  { kind: "link", label: "Domů", href: "/" },
  { kind: "link", label: "O nás", href: "/o-nas" },
  { kind: "link", label: "Blog", href: "/blog" },
  { kind: "menu", label: "Stavební práce", menuId: "stavebni" },
  {
    kind: "menu",
    label: "Architektonické služby",
    menuId: "architektonicke",
  },
  { kind: "menu", label: "Čisticí práce", menuId: "cisticí" },
  { kind: "link", label: "Kontakt", href: "/kontakt" },
];

const PREVIEW_CONTENT: Record<string, Pick<MegaMenuItem, "image" | "description">> = {
  "/zateplenie-fasady": {
    image: FEATURED_FACADE_IMAGE,
    description: "Kompletní zateplení fasád a ETICS systémy po celém Česku.",
  },
  "/zakladove-dosky": {
    image: getServicePreviewImage(
      "/zakladove-dosky",
      "https://static.wixstatic.com/media/11062b_52669a954ee44f869d54e8018d13f653~mv2.jpg",
    ),
    description: "Základové desky na klíč včetně zemních prací a izolací.",
  },
  "/interierovy-dizajn": {
    image: INTERIOR_DESIGN_IMAGE,
    description: "Návrh dispozice, 3D vizualizace a interiér na míru.",
  },
  "/cistenie-fasady": {
    image: "/images/old-site/cistenie-fasady/tatranska-lomnica-03.webp",
    description: "Odstranění mechů, plísní a skvrn z fasády s impregnací.",
  },
};

function buildMegaMenuPanel(
  {
    groupTitle,
    eyebrow,
    title,
    description,
  }: Omit<MegaMenuPanel, "items"> & { groupTitle: string },
): MegaMenuPanel {
  const groupItems =
    NAVIGATION_GROUPS.find((group) => group.title === groupTitle)?.items ?? [];

  return {
    eyebrow,
    title,
    description,
    items: groupItems.map((item) => ({
      ...item,
      image: PREVIEW_CONTENT[item.href]?.image ?? "/images/hero.jpg",
      description: PREVIEW_CONTENT[item.href]?.description ?? item.label,
    })),
  };
}

const MEGA_MENU_PANELS: Record<MegaMenuId, MegaMenuPanel> = {
  stavebni: buildMegaMenuPanel({
    groupTitle: "Stavební práce",
    eyebrow: "Stavební práce",
    title: "Realizace od základů po finální detail.",
    description:
      "Po najetí na položku se panel přepne bez zavírání a ukáže přesně ty služby, které do dané kategorie patří.",
  }),
  architektonicke: buildMegaMenuPanel({
    groupTitle: "Architektonické služby",
    eyebrow: "Architektonické služby",
    title: "Interiérový design s vizualizací a jasným procesem.",
    description:
      "V této sekci najdete kompletní interiérový design od prvního konceptu až po vizualizace a cenovou nabídku.",
  }),
  cisticí: buildMegaMenuPanel({
    groupTitle: "Čisticí práce",
    eyebrow: "Čisticí práce",
    title: "Čištění fasád jako samostatná obrazová karta.",
    description:
      "Odstraňujeme mechy, plísně a skvrny a chráníme fasádu impregnací, aby si udržela čistý vzhled na roky dopředu.",
  }),
};

function isMenuActive(pathname: string, menuId: MegaMenuId) {
  return MEGA_MENU_PANELS[menuId].items.some((item) =>
    isNavigationItemActive(pathname, item.href),
  );
}

export default function PageHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MegaMenuId | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  function clearCloseTimer() {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }

  function openMenu(menuId: MegaMenuId | null) {
    clearCloseTimer();
    setActiveMenu(menuId);
  }

  function scheduleClose() {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveMenu(null);
      closeTimerRef.current = null;
    }, 120);
  }

  function closeMenus() {
    clearCloseTimer();
    setActiveMenu(null);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        clearCloseTimer();
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  const currentPanel = activeMenu ? MEGA_MENU_PANELS[activeMenu] : null;
  const showSolidHeader = scrolled || activeMenu !== null;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          showSolidHeader
            ? "border-b border-white/10 bg-primary/92 shadow-[0_18px_60px_rgba(8,15,40,0.22)] backdrop-blur-xl"
            : "bg-gradient-to-b from-primary-dark/65 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 w-[92%] items-center justify-between md:h-24">
          <Link
            href="/"
            className="relative z-10 flex items-center"
            onMouseEnter={closeMenus}
            aria-label="ESPRON domů"
          >
            <Image
              src="/espron-logo.png"
              alt="ESPRON"
              width={367}
              height={86}
              priority
              className="h-7 w-auto md:h-9"
              sizes="(min-width: 768px) 157px, 122px"
            />
          </Link>

          <nav
            className="hidden items-center lg:flex"
            onMouseLeave={scheduleClose}
            aria-label="Hlavní navigace"
          >
            {DESKTOP_NAV_ITEMS.map((item) => {
              if (item.kind === "link") {
                const active = isNavigationItemActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={closeMenus}
                    onFocus={closeMenus}
                    className={`group relative px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition-colors ${
                      active ? "text-white" : "text-white/60 hover:text-white"
                    }`}
                  >
                    <span className="hover-split-text">
                      <span
                        className="hover-split-text-inner"
                        data-text={item.label}
                      >
                        {item.label}
                      </span>
                    </span>
                    {active ? (
                      <span className="absolute bottom-0 left-4 right-4 h-px rounded-full bg-white" />
                    ) : null}
                  </Link>
                );
              }

              const active =
                activeMenu === item.menuId || isMenuActive(pathname, item.menuId);

              return (
                <button
                  key={item.menuId}
                  type="button"
                  aria-expanded={activeMenu === item.menuId}
                  aria-haspopup="true"
                  aria-controls={`mega-menu-${item.menuId}`}
                  onMouseEnter={() => openMenu(item.menuId)}
                  onFocus={() => openMenu(item.menuId)}
                  className={`group relative flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition-colors ${
                    active ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                >
                  <span className="hover-split-text">
                    <span
                      className="hover-split-text-inner"
                      data-text={item.label}
                    >
                      {item.label}
                    </span>
                  </span>
                  <svg
                    className={`h-3 w-3 transition-transform duration-200 ${
                      activeMenu === item.menuId ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  {active ? (
                    <span className="absolute bottom-0 left-4 right-4 h-px rounded-full bg-white" />
                  ) : null}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px w-full rounded-full bg-white" />
              <span className="h-px w-full rounded-full bg-white" />
            </span>
            <span className="hover-split-text">
              <span className="hover-split-text-inner" data-text="Menu">
                Menu
              </span>
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {currentPanel ? (
          <motion.div
            id={`mega-menu-${activeMenu}`}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={PANEL_TRANSITION}
            className="fixed inset-x-0 top-20 z-40 overflow-hidden border-b border-white/10 bg-primary shadow-[0_30px_80px_rgba(8,15,40,0.35)] md:top-24"
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleClose}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage: "url('/texture.svg')",
                backgroundSize: "cover",
                filter: "invert(1)",
              }}
            />

            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto grid w-[92%] gap-8 py-8 md:grid-cols-[minmax(240px,0.9fr)_minmax(0,1.7fr)] md:py-10"
            >
              <div className="max-w-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">
                  {currentPanel.eyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-black tracking-tight text-white md:text-3xl">
                  {currentPanel.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {currentPanel.description}
                </p>
              </div>

              <div
                className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
              >
                {currentPanel.items.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.22 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenus}
                      className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] transition-colors hover:border-white/30"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.label}
                          fill
                          sizes="(min-width: 1280px) 22vw, (min-width: 768px) 28vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/18 to-transparent" />
                      </div>

                      <div className="flex items-start justify-between gap-3 px-5 py-4">
                        <div>
                          <p className="text-sm font-bold text-white">
                            <span className="hover-split-text">
                              <span
                                className="hover-split-text-inner"
                                data-text={item.label}
                              >
                                {item.label}
                              </span>
                            </span>
                          </p>
                          <p className="mt-1 text-[11px] leading-5 text-white/50">
                            {item.description}
                          </p>
                        </div>
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-white/30 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {activeMenu ? (
          <motion.button
            type="button"
            aria-label="Zavřít mega menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-30 cursor-default bg-primary-dark/5"
            onClick={closeMenus}
          />
        ) : null}
      </AnimatePresence>

      <SiteMenuOverlay
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
