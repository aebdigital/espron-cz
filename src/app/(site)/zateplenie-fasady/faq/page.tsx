import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FaqRichAccordion from "@/components/site/FaqRichAccordion";

export const metadata: Metadata = {
  title: "FAQ – Zateplenie fasády | ESPRON",
  description:
    "Najčastejšie otázky o zateplení fasády. Koľko to stojí, ako dlho trvá, aké materiály používame a čo všetko je zahrnuté v cene.",
};

const FAQ_ITEMS = [
  {
    question: "Realizujete zateplenie fasád po celom Slovensku?",
    answer: (
      <p>
        Áno, realizujeme zatepľovanie domov a budov{" "}
        <strong>na celom území Slovenska</strong>. Najčastejšie pracujeme
        v oblastiach ako Bratislava, Trnava, Hlohovec, Nitra, Trenčín, Žilina
        či Košice, no <strong>prideme kamkoľvek</strong>.
        <br />
        <br />
        <Link href="/zateplenie-fasady" className="text-primary underline underline-offset-2 hover:opacity-70">
          → Pozrite si viac o našich zateplovacích prácach
        </Link>
      </p>
    ),
  },
  {
    question: "Môžem si zateplenie realizovať svojpomocne, alebo je lepšie najať firmu?",
    answer: (
      <>
        <p>
          Zateplenie svojpomocne je síce možné, no ide o{" "}
          <strong>technologicky náročný proces</strong>. Pri nesprávnom postupe
          často vznikajú <strong>chyby ako tepelné mosty, tvorba plesní</strong>{" "}
          a dochádza aj <strong>k prenikaniu vlhkosti</strong> – čo môže mať za
          následok výrazne kratšiu životnosť fasády. Medzi časté nedostatky
          patrí aj chýbajúce kotvenie, nedostatočná penetrácia alebo zle
          napojené detaily okolo okien.
        </p>
        <p className="mt-4">Realizáciou cez firmu ESPRON získate:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>správne technologické postupy podľa platných noriem,</li>
          <li>dôraz na detaily, ktoré rozhodujú o výsledku,</li>
          <li>úsporu času a stresu.</li>
        </ul>
        <p className="mt-4">
          Ak by ste si však chceli pozrieť, ako vyzerá tento náročný proces,
          pripravili sme pre vás podrobný návod na stránke:
          <br />
          <Link href="/blog/zateplenie-fasady-svojpomocne" className="text-primary underline underline-offset-2 hover:opacity-70">
            → svojpomocné zateplenie fasády
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Za ako dlho zateplíte rodinný dom?",
    answer: (
      <>
        <p>
          Rýchlosť zateplenia závisí od veľkosti domu, jeho členitosti a
          prístupnosti. Naše skúsenosti ukazujú, že pri štandardnom rodinnom
          dome (napr. cca 150 m² fasády) zvládneme celú realizáciu za{" "}
          <strong>8 až 9 dní</strong> – vrátane finálnej omietky.
        </p>
        <p className="mt-4">
          Pri ideálnych podmienkach (napr. bungalov s dobrým prístupom, bez
          nutnosti zložitých prestavieb lešenia) vieme spraviť až{" "}
          <strong>20 m² denne na komplet</strong>, čo zahŕňa lepenie izolácie,
          armovanie aj aplikáciu omietky.
        </p>
        <p className="mt-4">
          Nezdržujeme sa, náš tím je zohriatý a má jasne rozdelené úlohy.
          Pracujeme rýchlo, precízne a bez zbytočných prestojov. Práve preto si
          nás zákazníci cenia ako{" "}
          <strong>profesionálnu a spoľahlivú firmu</strong>.
        </p>
      </>
    ),
  },
  {
    question: "Zatepľujete aj staršie domy? Aké sú obmedzenia?",
    answer: (
      <p>
        Áno, zatepľujeme aj staršie stavby. Dôležité je však posúdiť technický
        stav pôvodnej fasády – odlupujúca sa omietka, praskliny či zvýšená
        vlhkosť si môžu vyžadovať opravu pred samotným zateplením. V rámci
        realizácie zabezpečujeme aj prípravu podkladu, aby nové vrstvy
        fungovali spoľahlivo a mali dlhú životnosť.
      </p>
    ),
  },
  {
    question: "Prečo je zateplenie staršieho domu často drahšie ako pri novostavbe?",
    answer: (
      <>
        <p>
          Pri starších domoch sa často objavujú{" "}
          <strong>nepredvídateľné problémy</strong>, ktoré zvyšujú náročnosť a
          náklady realizácie – napríklad uvoľnená alebo nesúdržná omietka,
          skryté praskliny, nerovnosti muriva alebo vysoká vlhkosť. Niekedy je
          potrebné pôvodnú omietku kompletne odstrániť a podklad technicky
          upraviť.
        </p>
        <p className="mt-4">
          Tieto práce si často{" "}
          <strong>vyžadujú viac času a zásahov</strong>, ako by sa na prvý
          pohľad zdalo. Aj keď niektoré riziká vieme odhadnúť pri obhliadke,
          mnoho skutočností sa ukáže až{" "}
          <strong>počas samotnej realizácie</strong> – napríklad po odstránení
          pôvodnej omietky. Vtedy sa môžu objaviť nepevné vrstvy, poškodené
          murivo alebo iné technické komplikácie, ktoré predražia aj predĺžia
          celý proces.
        </p>
        <p className="mt-4">
          <Link href="/zateplenie-fasady" className="text-primary underline underline-offset-2 hover:opacity-70">
            → Prečítajte si, čo všetko sme museli vyriešiť pri zateplení staršieho domu v Hlohovci
          </Link>
        </p>
      </>
    ),
  },
  {
    question: "Aké materiály používate pri zateplení fasády?",
    answer: (
      <>
        <p>
          Používame certifikované a osvedčené materiály v súlade s technickými
          normami STN a odporúčaniami výrobcov. Medzi najčastejšie používané
          patria:
        </p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            <strong>EPS polystyrén (biely alebo sivý grafitový)</strong> –
            vhodný na väčšinu bežných objektov, výhodný pomer cena/výkon,
          </li>
          <li>
            <strong>minerálna vlna</strong> – ideálna pre difúzne otvorené
            konštrukcie alebo pasívne domy,
          </li>
          <li>
            systémové lepidlá, penetračné nátery, výstužné sieťky, rohové
            profily a finálne tenkovrstvové omietky.
          </li>
        </ul>
        <p className="mt-4">
          Výber materiálu vždy prispôsobujeme typu stavby, jej stavu,
          požiadavkám zákazníka a požadovanej energetickej triede. Naši klienti
          často oceňujú aj vizuálne možnosti – omietky ponúkame v rôznych
          štruktúrach a farbách.
        </p>
      </>
    ),
  },
  {
    question: "Ako prebieha zatepľovanie krok za krokom?",
    answer: (
      <>
        <p>Štandardný postup zateplenia:</p>
        <ol className="mt-2 list-decimal pl-5 space-y-1">
          <li>Príprava podkladu – čistenie, opravy, penetračný náter,</li>
          <li>Lepenie izolačných dosiek,</li>
          <li>Kotvenie,</li>
          <li>Armovanie výstužnou sieťkou a lepidlom,</li>
          <li>Prebrúsenie a opravy základnej vrstvy,</li>
          <li>Penetračný náter,</li>
          <li>
            Aplikácia finálnej tenkovrstvovej omietky (v rôznych štruktúrach a
            odtieňoch).
          </li>
        </ol>
        <p className="mt-4">
          Každý krok realizujeme <strong>podľa technologických noriem</strong>.
        </p>
      </>
    ),
  },
  {
    question: "Je nutná príprava fasády pred zateplením?",
    answer: (
      <p>
        Áno. Základom kvalitného zateplenia je pevný, čistý a suchý podklad. V
        rámci prípravy fasádu zbavíme nečistôt, poškodených častí a trhlín.
        Potom nanášame penetračný náter, ktorý zjednocuje savosť a zvyšuje
        priľnavosť lepidla. Prípravu podkladu vykonávame ako súčasť našej
        služby.
      </p>
    ),
  },
  {
    question: "Ako sa meria plocha fasády pre určenie ceny?",
    answer: (
      <>
        <p>
          Plochu fasády meriame najčastejšie ako celkovú výmeru{" "}
          <strong>bez odpočítania otvorov</strong> (okná a dvere). Je to bežná
          prax, keďže aj okolo otvorov je množstvo detailnej práce.
        </p>
        <p className="mt-4">
          V prípade potreby vieme urobiť výpočet aj s odpočítaním otvorov –
          vtedy sa špalety (ostenia) účtujú osobitne podľa bežného metra. O
          spôsobe výpočtu sa vždy vopred dohodneme so zákazníkom.
        </p>
      </>
    ),
  },
  {
    question: "Čo všetko je zahrnuté v cene prác?",
    answer: (
      <>
        <p>V cene prác je štandardne zahrnuté:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>penetrovanie podkladu (2x),</li>
          <li>lepenie izolácie,</li>
          <li>vystuženie sieťkou a nanesenie armovacej vrstvy,</li>
          <li>prebrúsenie,</li>
          <li>aplikácia finálnej omietky.</li>
        </ul>
        <p className="mt-4">
          Cena materiálu zahŕňa: EPS/minerálnu vlnu, lepidlo, sieťku,
          hmoždinky (kotvy), penetráciu, omietku.{" "}
          <strong>Lešenie sa účtuje samostatne</strong>, orientačne cca 500 € /
          100 m².
        </p>
      </>
    ),
  },
  {
    question: "Môžem nalepiť nový polystyrén na starý?",
    answer: (
      <p>
        Je to možné, no je nevyhnutné, aby stav pôvodného zateplenia posúdil
        odborník s autorizáciou (<strong>projektant alebo statik</strong>). Ako
        realizačná firma neposudzujeme vhodnosť podkladu, ale po dodaní posudku
        zabezpečíme bezchybnú realizáciu zateplenia podľa odporúčaní.
      </p>
    ),
  },
  {
    question: "Bojím sa, že ma cena za zateplenie zruinuje. Koľko to bude stáť?",
    answer: (
      <>
        <p>
          Rozumieme, že cena je pre mnohých rozhodujúca. Preto máme na stránke
          uverejnené <strong>orientačné rozmedzie cien</strong>, aby ste si
          vedeli predstavu o rozpočte ešte predtým, ako nás kontaktujete.
          Zateplenie domu nie je lacná investícia, ale správne prevedené vám{" "}
          <strong>zníži náklady na kúrenie a zvýši hodnotu nehnuteľnosti</strong>.
        </p>
        <p className="mt-4">
          Keď ide o väčší zásah do vášho domova –{" "}
          <strong>často raz za život</strong> – je dôležité zveriť ho{" "}
          <strong>do rúk spoľahlivým a skúseným odborníkom</strong>. Výber
          správnej firmy rozhoduje o tom, či sa vám investícia skutočne vráti.
        </p>
        <p className="mt-4">
          Ak máte záujem o nacenenie, prejdite na sekciu{" "}
          <Link href="/kontakt" className="text-primary underline underline-offset-2 hover:opacity-70">
            → Ako nás kontaktovať
          </Link>
          , kde nájdete všetky informácie, ktoré od vás potrebujeme k naceneniu
          – ako lokalitu, rozmery fasády a ideálne aj pár fotografií.
        </p>
      </>
    ),
  },
  {
    question: "Robíte aj podhlady (tzv. štablóny)?",
    answer: (
      <>
        <p>
          Štandardne by mali nosnú konštrukciu podhladu realizovať strechari
          alebo tesári, keďže ide o súčasť strešnej konštrukcie.
        </p>
        <p className="mt-4">
          V prípade potreby vieme zabezpečiť aj kompletné vyhotovenie vrátane
          konštrukcie – ide však o{" "}
          <strong>
            nadštandardnú službu mimo základnej ceny za zateplenie fasády
          </strong>
          .
        </p>
        <p className="mt-4">Cena sa určuje podľa rozsahu:</p>
        <ul className="mt-2 list-disc pl-5 space-y-1">
          <li>
            pri užších podhladoch účtujeme za <strong>bežný meter</strong>,
          </li>
          <li>
            pri širších riešeniach podľa <strong>m² plochy</strong>.
          </li>
        </ul>
        <p className="mt-4">
          Celý podhľad esteticky doladíme k fasáde, vrátane detailov a
          ukončení.
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
            Zateplenie fasády
          </p>
          <h1 className="animate-fade-up-delay-1 mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Často kladené otázky
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Odpovede na to, čo nás zákazníci pýtajú najčastejšie.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto w-[92%] max-w-4xl">
          <AnimateOnScroll className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl lg:text-4xl">
              Najčastejšie otázky o zateplení fasády,{" "}
              <span className="font-light text-foreground/60">
                ktoré by ste mali poznať
              </span>
            </h2>
            <p className="mt-4 text-sm leading-7 text-foreground/60">
              Koľko to bude stáť? Ako dlho to trvá? A čo ak to chcem urobiť
              svojpomocne? Práve na tieto otázky sa nás zákazníci pýtajú
              najčastejšie. Odpovede sme zhrnuli na jednom mieste – aby ste sa
              mohli rýchlejšie rozhodnúť, vyhnúť sa chybám a zveriť fasádu do
              správnych rúk.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={80}>
            <FaqRichAccordion items={FAQ_ITEMS} />
          </AnimateOnScroll>

          <AnimateOnScroll delay={140}>
            <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-7">
              <p className="text-sm font-semibold text-foreground">
                Nenašli ste odpoveď na svoju otázku?
              </p>
              <p className="mt-1 text-sm text-foreground/60">
                Napíšte nám alebo zavolajte – radi zodpovieme akýkoľvek dotaz.
              </p>
              <Link
                href="/kontakt"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-2"
              >
                Kontaktovať nás
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
