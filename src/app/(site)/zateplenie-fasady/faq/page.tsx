import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FaqRichAccordion from "@/components/site/FaqRichAccordion";

export const metadata: Metadata = {
  title: "FAQ – Zateplení fasády | ESPRON",
  description:
    "Nejčastější otázky o zateplení fasády. Kolik to stojí, jak dlouho práce trvají, jaké materiály používáme a co vše je zahrnuto v ceně.",
};

const FAQ_ITEMS = [
  {
    question: "Realizujete zateplení fasád po celém Česku i na Slovensku?",
    answer: (
      <p>
        Ano, realizujeme zateplování domů a budov{" "}
        <strong>po celém Česku i na Slovensku</strong>. Pracujeme v různých
        regionech a po domluvě <strong>přijedeme i k vám</strong>.
        <br />
        <br />
        <Link href="/zateplenie-fasady" className="text-primary underline underline-offset-2 hover:opacity-70">
          → Podívejte se na více informací o našich zateplovacích pracích
        </Link>
      </p>
    ),
  },
  {
    question: "Mohu si zateplení realizovat svépomocí, nebo je lepší najmout firmu?",
    answer: (
      <>
        <p>
          Zateplení svépomocí je sice možné, ale jde o{" "}
          <strong>technologicky náročný proces</strong>. Při nesprávném postupu
          často vznikají <strong>chyby jako tepelné mosty, tvorba plísní</strong>{" "}
          a dochází také <strong>k pronikání vlhkosti</strong>, což může výrazně
          zkrátit životnost fasády. Mezi časté nedostatky patří chybějící
          kotvení, nedostatečná penetrace nebo špatně napojené detaily kolem
          oken.
        </p>
        <p className="mt-4">Realizací přes firmu ESPRON získáte:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>správné technologické postupy podle platných norem,</li>
          <li>důraz na detaily, které rozhodují o výsledku,</li>
          <li>úsporu času a stresu.</li>
        </ul>
        <p className="mt-4">
          Pokud se ale chcete podívat, jak tento náročný proces vypadá,
          připravili jsme pro vás podrobný návod na stránce:
          <br />
          <Link href="/blog/zateplenie-fasady-svojpomocne" className="text-primary underline underline-offset-2 hover:opacity-70">
            → zateplení fasády svépomocí
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Za jak dlouho zateplíte rodinný dům?",
    answer: (
      <>
        <p>
          Rychlost zateplení závisí na velikosti domu, jeho členitosti a
          přístupnosti. Naše zkušenosti ukazují, že u standardního rodinného
          domu (např. cca 150 m² fasády) zvládneme celou realizaci za{" "}
          <strong>8 až 9 dní</strong>, včetně finální omítky.
        </p>
        <p className="mt-4">
          Při ideálních podmínkách (např. bungalov s dobrým přístupem, bez
          nutnosti složitých přestaveb lešení) dokážeme udělat až{" "}
          <strong>20 m² denně kompletně</strong>, což zahrnuje lepení izolace,
          armování i aplikaci omítky.
        </p>
        <p className="mt-4">
          Nezdržujeme se, náš tým je sehraný a má jasně rozdělené úkoly.
          Pracujeme rychle, precizně a bez zbytečných prostojů. Právě proto si
          nás zákazníci cení jako{" "}
          <strong>profesionální a spolehlivou firmu</strong>.
        </p>
      </>
    ),
  },
  {
    question: "Zateplujete i starší domy? Jaká jsou omezení?",
    answer: (
      <p>
        Ano, zateplujeme i starší stavby. Důležité je ale posoudit technický
        stav původní fasády. Odlupující se omítka, praskliny nebo zvýšená
        vlhkost mohou vyžadovat opravu ještě před samotným zateplením. V rámci
        realizace zajišťujeme také přípravu podkladu, aby nové vrstvy fungovaly
        spolehlivě a měly dlouhou životnost.
      </p>
    ),
  },
  {
    question: "Proč je zateplení staršího domu často dražší než u novostavby?",
    answer: (
      <>
        <p>
          U starších domů se často objevují{" "}
          <strong>nepředvídatelné problémy</strong>, které zvyšují náročnost a
          náklady realizace, například uvolněná nebo nesoudržná omítka, skryté
          praskliny, nerovnosti zdiva nebo vysoká vlhkost. Někdy je potřeba
          původní omítku kompletně odstranit a podklad technicky upravit.
        </p>
        <p className="mt-4">
          Tyto práce si často{" "}
          <strong>vyžádají více času a zásahů</strong>, než by se na první
          pohled zdálo. I když některá rizika dokážeme odhadnout při obhlídce,
          mnoho skutečností se ukáže až{" "}
          <strong>během samotné realizace</strong>, například po odstranění
          původní omítky. Tehdy se mohou objevit nepevné vrstvy, poškozené
          zdivo nebo jiné technické komplikace, které celý proces prodraží i
          prodlouží.
        </p>
        <p className="mt-4">
          <Link href="/zateplenie-fasady" className="text-primary underline underline-offset-2 hover:opacity-70">
            → Přečtěte si, co vše jsme museli vyřešit při zateplení staršího domu v Hlohovci
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Jaké materiály používáte při zateplení fasády?",
    answer: (
      <>
        <p>
          Používáme certifikované a ověřené materiály v souladu s technickými
          normami a doporučeními výrobců. Mezi nejčastěji používané patří:
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            <strong>EPS polystyren (bílý nebo šedý grafitový)</strong> –
            vhodný pro většinu běžných objektů, výhodný poměr cena/výkon,
          </li>
          <li>
            <strong>minerální vata</strong> – ideální pro difuzně otevřené
            konstrukce nebo pasivní domy,
          </li>
          <li>
            systémová lepidla, penetrační nátěry, výztužné síťky, rohové
            profily a finální tenkovrstvé omítky.
          </li>
        </ul>
        <p className="mt-4">
          Výběr materiálu vždy přizpůsobujeme typu stavby, jejímu stavu,
          požadavkům zákazníka a požadované energetické třídě. Naši klienti
          často oceňují i vizuální možnosti, omítky nabízíme v různých
          strukturách a barvách.
        </p>
      </>
    ),
  },
  {
    question: "Jak probíhá zateplování krok za krokem?",
    answer: (
      <>
        <p>Standardní postup zateplení:</p>
        <ol className="mt-2 list-decimal pl-5 space-y-1">
          <li>Příprava podkladu – čištění, opravy, penetrační nátěr,</li>
          <li>Lepení izolačních desek,</li>
          <li>Kotvení,</li>
          <li>Armování výztužnou síťkou a lepidlem,</li>
          <li>Přebroušení a opravy základní vrstvy,</li>
          <li>Penetrační nátěr,</li>
          <li>
            Aplikace finální tenkovrstvé omítky (v různých strukturách a
            odstínech).
          </li>
        </ol>
        <p className="mt-4">
          Každý krok realizujeme <strong>podle technologických norem</strong>.
        </p>
      </>
    ),
  },
  {
    question: "Je nutná příprava fasády před zateplením?",
    answer: (
      <p>
        Ano. Základem kvalitního zateplení je pevný, čistý a suchý podklad. V
        rámci přípravy fasádu zbavíme nečistot, poškozených částí a trhlin.
        Poté nanášíme penetrační nátěr, který sjednocuje savost a zvyšuje
        přilnavost lepidla. Přípravu podkladu provádíme jako součást naší
        služby.
      </p>
    ),
  },
  {
    question: "Jak se měří plocha fasády pro určení ceny?",
    answer: (
      <>
        <p>
          Plochu fasády měříme nejčastěji jako celkovou výměru{" "}
          <strong>bez odečtení otvorů</strong> (okna a dveře). Je to běžná
          praxe, protože i kolem otvorů je mnoho detailní práce.
        </p>
        <p className="mt-4">
          V případě potřeby umíme udělat výpočet i s odečtením otvorů. Tehdy se
          špalety (ostění) účtují samostatně podle běžného metru. Způsob
          výpočtu si vždy předem odsouhlasíme se zákazníkem.
        </p>
      </>
    ),
  },
  {
    question: "Co vše je zahrnuto v ceně prací?",
    answer: (
      <>
        <p>V ceně prací je standardně zahrnuto:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>penetrování podkladu (2x),</li>
          <li>lepení izolace,</li>
          <li>vyztužení síťkou a nanesení armovací vrstvy,</li>
          <li>přebroušení,</li>
          <li>aplikace finální omítky.</li>
        </ul>
        <p className="mt-4">
          Cena materiálu zahrnuje: EPS/minerální vatu, lepidlo, síťku,
          hmoždinky (kotvy), penetraci, omítku.{" "}
          <strong>Lešení se účtuje samostatně</strong>, orientačně cca 500 € /
          100 m².
        </p>
      </>
    ),
  },
  {
    question: "Mohu nalepit nový polystyren na starý?",
    answer: (
      <p>
        Je to možné, ale je nezbytné, aby stav původního zateplení posoudil
        odborník s autorizací (<strong>projektant nebo statik</strong>). Jako
        realizační firma neposuzujeme vhodnost podkladu, ale po dodání posudku
        zajistíme bezchybnou realizaci zateplení podle doporučení.
      </p>
    ),
  },
  {
    question: "Bojím se, že mě cena za zateplení zruinuje. Kolik to bude stát?",
    answer: (
      <>
        <p>
          Rozumíme, že cena je pro mnoho lidí rozhodující. Proto máme na stránce
          zveřejněné <strong>orientační rozpětí cen</strong>, abyste si udělali
          představu o rozpočtu ještě předtím, než nás kontaktujete. Zateplení
          domu není levná investice, ale správně provedené vám{" "}
          <strong>sníží náklady na vytápění a zvýší hodnotu nemovitosti</strong>.
        </p>
        <p className="mt-4">
          Když jde o větší zásah do vašeho domova,{" "}
          <strong>často jednou za život</strong>, je důležité svěřit ho{" "}
          <strong>do rukou spolehlivých a zkušených odborníků</strong>. Výběr
          správné firmy rozhoduje o tom, zda se vám investice skutečně vrátí.
        </p>
        <p className="mt-4">
          Pokud máte zájem o nacenění, přejděte do sekce{" "}
          <Link href="/kontakt" className="text-primary underline underline-offset-2 hover:opacity-70">
            → Jak nás kontaktovat
          </Link>
          , kde najdete všechny informace, které od vás k nacenění potřebujeme:
          lokalitu, rozměry fasády a ideálně i pár fotografií.
        </p>
      </>
    ),
  },
  {
    question: "Děláte i podhledy (tzv. štablóny)?",
    answer: (
      <>
        <p>
          Standardně by měli nosnou konstrukci podhledu realizovat střechaři
          nebo tesaři, protože jde o součást střešní konstrukce.
        </p>
        <p className="mt-4">
          V případě potřeby dokážeme zajistit i kompletní provedení včetně
          konstrukce. Jde však o{" "}
          <strong>
            nadstandardní službu mimo základní cenu za zateplení fasády
          </strong>
          .
        </p>
        <p className="mt-4">Cena se určuje podle rozsahu:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            u užších podhledů účtujeme podle <strong>běžného metru</strong>,
          </li>
          <li>
            u širších řešení podle <strong>m² plochy</strong>.
          </li>
        </ul>
        <p className="mt-4">
          Celý podhled esteticky sladíme s fasádou, včetně detailů a zakončení.
        </p>
      </>
    ),
  },
];

export default function ZateplenieFaqPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto w-[92%]">
          <p className="animate-fade-up text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">
            Zateplení fasády
          </p>
          <h1 className="animate-fade-up-delay-1 mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Často kladené otázky
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Odpovědi na to, na co se nás zákazníci ptají nejčastěji.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[92%] max-w-4xl">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Nejčastější otázky o zateplení fasády,{" "}
              <span className="font-light text-foreground/60">
                které byste měli znát
              </span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/60">
              Kolik to bude stát? Jak dlouho to trvá? A co když to chci udělat
              svépomocí? Právě na tyto otázky se nás zákazníci ptají
              nejčastěji. Odpovědi jsme shrnuli na jednom místě, abyste se
              mohli rychleji rozhodnout, vyhnout se chybám a svěřit fasádu do
              správných rukou.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={80}>
            <FaqRichAccordion items={FAQ_ITEMS} />
          </AnimateOnScroll>

          <AnimateOnScroll delay={140}>
            <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-7">
              <p className="text-sm font-semibold text-foreground">
                Nenašli jste odpověď na svou otázku?
              </p>
              <p className="mt-1 text-sm text-foreground/60">
                Napište nám nebo zavolejte – rádi zodpovíme jakýkoli dotaz.
              </p>
              <Link
                href="/kontakt"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-2"
              >
                Kontaktovat nás
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
