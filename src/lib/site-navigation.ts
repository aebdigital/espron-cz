export type PageFamily =
  | "about"
  | "contact"
  | "service"
  | "tepovanie"
  | "insulation-main"
  | "insulation-city"
  | "insulation-case-study"
  | "insulation-guide"
  | "faq"
  | "staffing";

export type PageOverride = {
  label: string;
  eyebrow: string;
  family: PageFamily;
  related: string[];
};

export type NavigationGroup = {
  title: string;
  items: Array<{
    href: string;
    label: string;
  }>;
};

export const CONTACT_INFO = {
  company: "ESPRON s.r.o",
  ico: "50915380",
  addressLines: ["Slovenská 31", "Spišská Nová Ves, 05201", "Slovensko"],
  phone: "+421 944 624 685",
  email: "info@espron.cz",
  hours: "Po – Pá · 8:00 – 17:00",
} as const;

export const PAGE_OVERRIDES: Record<string, PageOverride> = {
  "/o-nas": {
    label: "O nás",
    eyebrow: "ESPRON",
    family: "about",
    related: ["/zateplenie-fasady", "/zakladove-dosky", "/interierovy-dizajn", "/kontakt"],
  },
  "/kontakt": {
    label: "Kontakt",
    eyebrow: "Spojme se",
    family: "contact",
    related: ["/o-nas", "/zateplenie-fasady", "/cistenie-fasady"],
  },
  "/zateplenie-fasady": {
    label: "Zateplení fasády",
    eyebrow: "Stavební práce",
    family: "insulation-main",
    related: [
      "/zakladove-dosky",
      "/cistenie-fasady",
      "/interierovy-dizajn",
      "/kontakt",
    ],
  },
  "/zakladove-dosky": {
    label: "Základové desky",
    eyebrow: "Stavební práce",
    family: "service",
    related: ["/zateplenie-fasady", "/interierovy-dizajn", "/kontakt"],
  },
  "/interierovy-dizajn": {
    label: "Interiérový design",
    eyebrow: "Architektonické služby",
    family: "service",
    related: ["/o-nas", "/zateplenie-fasady", "/kontakt"],
  },
  "/cistenie-fasady": {
    label: "Čištění fasády",
    eyebrow: "Čisticí práce",
    family: "service",
    related: ["/zateplenie-fasady", "/interierovy-dizajn", "/kontakt"],
  },
} as const;

export const PRIMARY_SUBPAGE_LINKS = [
  { href: "/o-nas", label: "O nás" },
  { href: "/zateplenie-fasady", label: "Zateplení" },
  { href: "/zakladove-dosky", label: "Základové desky" },
  { href: "/cistenie-fasady", label: "Čištění fasády" },
  { href: "/interierovy-dizajn", label: "Interiérový design" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export function isNavigationItemActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export const NAVIGATION_GROUPS: NavigationGroup[] = [
  {
    title: "Hlavní stránky",
    items: [
      { href: "/", label: "Domů" },
      { href: "/o-nas", label: "O nás" },
      { href: "/blog", label: "Blog" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  {
    title: "Stavební práce",
    items: [
      { href: "/zateplenie-fasady", label: "Zateplení fasády" },
      { href: "/zakladove-dosky", label: "Základové desky" },
    ],
  },
  {
    title: "Architektonické služby",
    items: [{ href: "/interierovy-dizajn", label: "Interiérový design" }],
  },
  {
    title: "Čisticí práce",
    items: [
      { href: "/cistenie-fasady", label: "Čištění fasády" },
    ],
  },
];
