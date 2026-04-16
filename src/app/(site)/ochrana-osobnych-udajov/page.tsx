import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov | ESPRON",
  description:
    "Zásady ochrany osobných údajov spoločnosti AEB Digital s. r. o. v súvislosti s používaním webovej stránky a kontaktných formulárov.",
};

type Section = {
  heading: string;
  items: Array<{ label: string; content: string }>;
};

const SECTIONS: Section[] = [
  {
    heading: "I. Kontaktný formulár",
    items: [
      {
        label: "Účel",
        content:
          "Na stránke prevádzkujeme kontaktný formulár na dvoch samostatných stránkach, ktorého účelom je umožniť vám položiť otázku k našim produktom a službám alebo požiadať o cenovú ponuku.",
      },
      {
        label: "Rozsah spracúvaných údajov",
        content: "Meno a priezvisko, e-mailová adresa, telefónne číslo.",
      },
      {
        label: "Účel spracovania",
        content:
          "Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.",
      },
      {
        label: "Právny základ",
        content:
          "Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.",
      },
      {
        label: "Doba uchovávania",
        content:
          "Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.",
      },
    ],
  },
  {
    heading: "II. Súbory cookies",
    items: [
      {
        label: "Nevyhnutné cookies",
        content:
          "Zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).",
      },
      {
        label: "Štatistické (analytické) cookies",
        content:
          "Pomáhajú nám pochopiť, ako návštevníci stránku používajú. Nasadzujeme ich len so súhlasom používateľa.",
      },
      {
        label: "Správa súhlasov",
        content:
          "Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.",
      },
    ],
  },
  {
    heading: "III. Práva dotknutej osoby",
    items: [
      {
        label: "Vaše práva",
        content:
          "Podľa nariadenia GDPR máte právo na prístup k osobným údajom, ich opravu alebo vymazanie (právo zabudnutia), obmedzenie spracovania, prenosnosť údajov a odvolanie súhlasu. Máte tiež právo podať sťažnosť u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk).",
      },
      {
        label: "Kontakt pre uplatnenie práv",
        content:
          "reachout@aebdig.com alebo +421 917 422 245",
      },
    ],
  },
];

export default function OchranaOsobnychUdajovPage() {
  return (
    <main className="mx-auto w-[95vw] max-w-4xl px-6 py-20 md:py-28">
      {/* Header */}
      <div className="mb-14 border-b border-border pb-10">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
          Právne informácie
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Ochrana osobných údajov
        </h1>
        <p className="mt-4 text-sm text-foreground/55">
          Účinnosť od 25. 4. 2025
        </p>
      </div>

      {/* Operator */}
      <div className="mb-12 rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.05)]">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Adresa
            </p>
            <div className="space-y-1 text-sm leading-7 text-foreground/78">
              <p className="text-base font-semibold text-foreground">ESPRON s.r.o</p>
              <p>IČO: 50915380</p>
              <p>Slovenská 31</p>
              <p>Spišská Nová Ves, 05201 – Slovensko</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/55">
              Kontaktné údaje
            </p>
            <div className="space-y-1 text-sm leading-7 text-foreground/78">
              <p>
                <a href="tel:+421944624685" className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity">
                  +421 944 624 685
                </a>
              </p>
              <p>
                <a href="mailto:info@espron.sk" className="text-primary underline underline-offset-2 hover:opacity-70 transition-opacity">
                  info@espron.sk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <p className="mb-12 text-base leading-8 text-foreground/78">
        Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.
      </p>

      {/* Sections */}
      <div className="space-y-10">
        {SECTIONS.map((section) => (
          <section
            key={section.heading}
            className="rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.05)] md:p-10"
          >
            <h2 className="mb-6 text-xl font-bold tracking-tight text-foreground md:text-2xl">
              {section.heading}
            </h2>
            <dl className="space-y-5">
              {section.items.map((item) => (
                <div key={item.label}>
                  <dt className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/55">
                    {item.label}
                  </dt>
                  <dd className="text-sm leading-7 text-foreground/78">{item.content}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </main>
  );
}
