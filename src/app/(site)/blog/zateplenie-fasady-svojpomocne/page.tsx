import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zateplenie fasády svojpomocne – postup krok za krokom | ESPRON",
  description:
    "Správny technologický postup pre zateplenie fasády svojpomocne. Porovnanie polystyrénu a minerálnej vaty, odporúčané náradie a tipy.",
};

export default function ZateplenieSvojpomocnePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-dark pb-18 pt-28 text-white md:pb-24 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.06),transparent_26%)]" />
        <div className="relative mx-auto w-[95vw] px-6 md:px-10">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/50 transition-colors hover:text-white">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Blog
          </Link>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/55">Návod</p>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Zateplenie fasády svojpomocne – postup prác krok za krokom
          </h1>
        </div>
      </section>

      {/* Article */}
      <article className="mx-auto w-[95vw] max-w-3xl px-6 py-20 md:px-10 md:py-28">

        <p className="mb-10 text-base leading-8 text-foreground/75">
          Rozhodli ste sa pre zateplenie domu svojpomocne? Správny technologický postup je kľúčový pre dlhú životnosť, energetickú úsporu a estetický vzhľad fasády. Nižšie nájdete prehľad krokov, porovnanie zateplenia polystyrénom a minerálnou vatou, odporúčané náradie a užitočné tipy pre úspešné zateplenie domu.
        </p>

        {/* Náradie */}
        <section className="mb-14">
          <h2 className="mb-5 text-xl font-bold text-foreground">Odporúčané náradie a pomôcky</h2>
          <ul className="space-y-2">
            {[
              "Murárska lyžica, hladidlo, stierka",
              "Brúsny papier (jemná zrnitosť) alebo brúsna doska",
              "Rezačka (na polystyrén či minerálnu vatu) alebo ostrý nôž",
              "Vŕtačka s miešadlom na prípravu lepidiel",
              "Elektrická vŕtačka (príklepová) alebo skrutkovač na kotvy",
              "Vodováha, laserový alebo klasický meter",
              "Nožnice na mriežku",
              "Vedrá a nádoby na miešanie lepidla, malty a penetrácie",
              "Ochranné pomôcky (rukavice, okuliare, pracovný odev, respirátor)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-foreground/75">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Step 1 */}
        <section className="mb-14">
          <h2 className="mb-5 text-xl font-bold text-foreground">1. Príprava a povrchové úpravy</h2>
          <p className="mb-4 text-sm italic text-foreground/55">(Platí najmä pri zateplení staršieho domu)</p>

          <h3 className="mb-3 text-base font-bold text-foreground">1. Kontrola a odstránenie uvoľnených častí</h3>
          <ul className="mb-6 space-y-2 text-sm leading-7 text-foreground/75">
            <li><strong>Vizuálna kontrola:</strong> Dôkladne si prezrite povrch omietky a hľadajte prípadné praskliny, odlupujúce sa alebo inak narušené miesta.</li>
            <li><strong>Mechanická kontrola:</strong> Jemnými údermi kladivom skontrolujte, či sa neozýva dutý zvuk naznačujúci odlepenú omietku.</li>
            <li><strong>Odstránenie poškodených častí:</strong> Všetky uvoľnené alebo nestabilné miesta opatrne odstráňte (napr. pomocou murárskej lyžice).</li>
          </ul>

          <h3 className="mb-3 text-base font-bold text-foreground">2. Oprava podkladu</h3>
          <ul className="mb-6 space-y-2 text-sm leading-7 text-foreground/75">
            <li><strong>Oprava trhlín a dier:</strong> Vyplňte praskliny a poškodenia vhodnými sanačnými alebo výplňovými materiálmi (napr. sanačnou omietkou, opravnou zmesou alebo stierkou odporúčanou výrobcom).</li>
            <li><strong>Vyrovnanie povrchu:</strong> Ak je to potrebné, aplikujte vyrovnávaciu stierku, aby bol podklad čo najrovnejší.</li>
          </ul>

          <h3 className="mb-3 text-base font-bold text-foreground">3. Očistenie stien</h3>
          <ul className="mb-6 space-y-2 text-sm leading-7 text-foreground/75">
            <li><strong>Odstránenie prachu a nečistôt:</strong> Použite mäkkú metličku alebo kefku, prípadne nízkotlakovú vodu (ak to stav stien dovoľuje).</li>
            <li><strong>Odmastenie povrchu:</strong> V prípade mastnôt alebo výrazných nečistôt môžete povrch umyť mydlovou vodou alebo vhodným čistiacim prostriedkom, potom opláchnuť čistou vodou.</li>
            <li><strong>Vysušenie:</strong> Pred ďalším postupom (lepenie izolačných dosiek) nechajte stenu dostatočne vyschnúť.</li>
          </ul>
          <p className="rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4 text-sm text-foreground/70">
            <strong>Cieľ:</strong> Dosiahnuť čistú, súdržnú a rovnú fasádu pripravenú na ďalšie kroky zateplenia.
          </p>
        </section>

        {/* Step 2 */}
        <section className="mb-14">
          <h2 className="mb-5 text-xl font-bold text-foreground">2. Inštalácia základovej lišty a lepenie izolačných dosiek</h2>

          <h3 className="mb-3 text-base font-bold text-foreground">1. Základová lišta</h3>
          <ul className="mb-6 space-y-2 text-sm leading-7 text-foreground/75">
            <li><strong>Presné vymeranie:</strong> Pomocou vodováhy alebo laserového zameriavača si vyznačte na spodnej časti fasády (sokli) rovinu, kde budete lištu upevňovať.</li>
            <li><strong>Upevnenie:</strong> Základovú lištu (tzv. zakladaciu alebo soklovú lištu) priložte k vyznačenej línii a prichyťte ju pomocou hmoždiniek a skrutiek. Odporúčaná vzdialenosť medzi upevňovacími bodmi je približne 30 – 40 cm (alebo podľa odporúčaní výrobcu).</li>
            <li><strong>Spoje a dilatácie:</strong> Jednotlivé lišty spájajte pomocou spojok, aby ste predišli vzniku medzier a dodržali dilatačné škáry (pri dlhších úsekoch).</li>
            <li><strong>Kontrola rovinnosti:</strong> Po upevnení lišty znova skontrolujte, či je lišta vo vodováhe. Táto lišta bude nosná pre prvý rad izolačných dosiek, čím zabezpečíte ich správnu a pevnú polohu.</li>
          </ul>

          <h3 className="mb-3 text-base font-bold text-foreground">2. Lepenie polystyrénu</h3>
          <ul className="mb-6 space-y-2 text-sm leading-7 text-foreground/75">
            <li><strong>Príprava lepidla:</strong> Zvoľte lepiacu zmes určenú na fasádny polystyrén a dôkladne ju vymiešajte podľa pokynov výrobcu.</li>
            <li><strong>Nanášanie:</strong> Aplikujte lepidlo po celom obvode dosky, čím vytvoríte uzavretý rám. Do stredu dosky pridajte 3 – 4 &bdquo;buchty&ldquo; lepidla, aby bol stred dostatočne podopretý.</li>
            <li><strong>Osadenie dosky:</strong> Dosku oprite o základovú lištu a pritlačte k fasáde. Pomocou vodováhy skontrolujte rovinnosť a prípadne dosku vyrovnajte.</li>
            <li><strong>Postup lepenia:</strong> Postupujte zdola nahor, pričom v každom ďalšom rade posuňte škáry (podobne ako pri tehlovej väzbe). Tým zabránite vzniku tepelných mostov.</li>
          </ul>

          <h3 className="mb-3 text-base font-bold text-foreground">3. Lepenie minerálnej vaty</h3>
          <ul className="mb-6 space-y-2 text-sm leading-7 text-foreground/75">
            <li><strong>Vhodné lepidlo:</strong> Pri minerálnej vate použite špeciálne lepiace hmoty určené priamo na tento druh izolácie.</li>
            <li><strong>Nanášanie lepidla:</strong> Rovnako ako pri polystyréne, okolo obvodu dosky a niekoľko bodov do stredu. Dávajte však pozor na rovnomerné pokrytie, pretože minerálna vata je nasiakavá a vyžaduje dôkladnejšiu priľnavosť.</li>
            <li><strong>Osadenie a vyrovnanie:</strong> Vatu pevne pritlačte k fasáde a zarovnajte do roviny. Dôležitá je dôsledná priliehavosť dosiek k podkladu a k sebe navzájom.</li>
            <li><strong>Hmotnosť a kotvenie:</strong> Minerálna vata je ťažšia a vyžaduje dôkladnejšie kotvenie (viď ďalší krok v postupe).</li>
          </ul>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <p className="mb-3 text-sm font-bold text-foreground">Polystyrén</p>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li>Jednoduchšie rezanie (nôž alebo odporová rezačka)</li>
                <li>Nižšia hmotnosť, jednoduchšia manipulácia</li>
                <li>Nižšia protipožiarna odolnosť a slabšia zvuková izolácia</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <p className="mb-3 text-sm font-bold text-foreground">Minerálna vata</p>
              <ul className="space-y-1.5 text-sm text-foreground/70">
                <li>Lepšia požiarna odolnosť a zvuková izolácia</li>
                <li>Vyššia hmotnosť, potrebné zvýšené kotvenie</li>
                <li>Vyššia cena, náročnejšie rezanie</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="mb-14">
          <h2 className="mb-5 text-xl font-bold text-foreground">3. Vyplnenie škár</h2>
          <p className="text-sm leading-7 text-foreground/75">
            Škáry do 4 mm vyplňte nízkoexpanznou PUR penou alebo polyuretánovým tmelom určeným na izolácie. Dôkladné vyplnenie škár zabráni vzniku tepelných mostov a zníži riziko vzniku vlhkosti v izolácii.
          </p>
        </section>

        {/* Step 4 */}
        <section className="mb-14">
          <h2 className="mb-5 text-xl font-bold text-foreground">4. Brúsenie a kotvenie izolačných dosiek</h2>

          <h3 className="mb-3 text-base font-bold text-foreground">1. Brúsenie</h3>
          <p className="mb-6 text-sm leading-7 text-foreground/75">
            Po zaschnutí lepidla (ideálne po 24 hodinách) prebrúste povrch izolačných dosiek (polystyrén alebo minerálnu vatu) brúsnou doskou či jemným brúsnym papierom. Zbavíte sa tak nerovností a pripravíte hladký podklad na stierku.
          </p>

          <h3 className="mb-3 text-base font-bold text-foreground">2. Kotvenie</h3>
          <ul className="mb-6 space-y-2 text-sm leading-7 text-foreground/75">
            <li>Kotvy (tzv. tanierové hmoždinky) upevňujte do muriva cez izolačné dosky.</li>
            <li>Použite minimálne 6 kotiev na 1 m² (alebo viac podľa odporúčaní výrobcu).</li>
            <li>Pri minerálnej vate je vhodné zvýšiť počet kotiev alebo použiť kotvy s kovovým tŕňom pre lepšiu nosnosť.</li>
          </ul>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-5">
            <p className="mb-3 text-sm text-foreground/75">
              Nie ste si istí, či zvládnete zateplenie svojpomocne? Nechajte to na nás. Poskytneme vám profesionálne služby a postaráme sa o kvalitný výsledok.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-bold text-white transition-colors hover:bg-primary/90"
            >
              Chcem nezáväznú cenovú ponuku
            </Link>
          </div>
        </section>

        {/* Step 5 */}
        <section className="mb-14">
          <h2 className="mb-5 text-xl font-bold text-foreground">5. Osadenie profilov a vystuženie rohov otvorov</h2>

          <h3 className="mb-3 text-base font-bold text-foreground">1. Rohové a dilatačné profily</h3>
          <ul className="mb-6 space-y-2 text-sm leading-7 text-foreground/75">
            <li>Vložte ich do čerstvého lepidla alebo malty na miestach, kde hrozí poškodenie fasády – najmä na rohoch budovy, v okolí okien a dverí.</li>
            <li>Vyrovnajte ich a dôkladne pritlačte, aby nedochádzalo k deformáciám.</li>
          </ul>

          <h3 className="mb-3 text-base font-bold text-foreground">2. Výstužná mriežka</h3>
          <ul className="mb-6 space-y-2 text-sm leading-7 text-foreground/75">
            <li>Na spevnenie okolia okien a dverí použite pásy mriežky s presahom aspoň 10 cm.</li>
            <li>Zapracujte ju do lepidla a povrch vyhlaďte stierkou.</li>
          </ul>

          <p className="rounded-2xl border border-border bg-white px-5 py-4 text-sm text-foreground/70 shadow-sm">
            <strong>Tip:</strong> Vyberte si rohové profily s integrovanou mriežkou – ušetríte čas a dosiahnete rovnejšie zakončenia.
          </p>
        </section>

        {/* Step 6 */}
        <section className="mb-14">
          <h2 className="mb-5 text-xl font-bold text-foreground">6. Nanášanie a zahladenie lepiacej stierky</h2>

          <h3 className="mb-3 text-base font-bold text-foreground">1. Prvá vrstva lepidla</h3>
          <ul className="mb-6 space-y-2 text-sm leading-7 text-foreground/75">
            <li>Na celý povrch izolačných dosiek (polystyrén alebo vata) naneste súvislú vrstvu lepidla (cca 3 – 4 mm).</li>
            <li>Do čerstvého lepidla vložte výstužnú mriežku. Dbajte na to, aby nevznikali záhyby či vrásky.</li>
            <li>Nechajte ju mierne zatuhnúť. V závislosti od počasia a odporúčaní výrobcu to môže byť cca 24 hodín.</li>
          </ul>

          <h3 className="mb-3 text-base font-bold text-foreground">2. Druhá vrstva lepidla</h3>
          <ul className="mb-6 space-y-2 text-sm leading-7 text-foreground/75">
            <li>Po uplynutí odporúčaného času (keď už prvá vrstva dostatočne drží) aplikujte druhú vrstvu lepidla, aby bola mriežka úplne zakrytá.</li>
            <li>Povrch zahlaďte stierkou a skontrolujte rovinu.</li>
          </ul>

          <p className="text-sm italic text-foreground/55">
            Rozdiel pri minerálnej vate: Vata je nasiakavá, a preto je dôležité dbať na rovnomernú a dostatočnú vrstvu lepidla, aby sa nevytvorili miesta so slabou priľnavosťou.
          </p>
        </section>

        {/* Step 7 */}
        <section className="mb-14">
          <h2 className="mb-5 text-xl font-bold text-foreground">7. Penetračný náter a fasádna omietka</h2>

          <h3 className="mb-3 text-base font-bold text-foreground">1. Penetračný náter</h3>
          <p className="mb-6 text-sm leading-7 text-foreground/75">
            Po úplnom zaschnutí (a vyzretí) lepiacej stierky aplikujte penetračný náter. Ten zlepšuje priľnavosť fasádnej omietky a chráni povrch pred vlhkosťou.
          </p>

          <h3 className="mb-3 text-base font-bold text-foreground">2. Fasádna omietka</h3>
          <ul className="mb-4 space-y-2 text-sm leading-7 text-foreground/75">
            <li>Po dokonalom vyschnutí penetrácie naneste finálnu fasádnu omietku v súvislej vrstve podľa pokynov výrobcu.</li>
            <li>Typ a farbu omietky si zvoľte podľa vašich preferencií a požiadaviek.</li>
          </ul>
        </section>

        {/* Summary */}
        <section className="rounded-[1.5rem] border border-border bg-white p-8 shadow-[0_12px_40px_rgba(15,29,74,0.06)]">
          <h2 className="mb-5 text-xl font-bold text-foreground">Zhrnutie</h2>
          <p className="mb-5 text-sm leading-7 text-foreground/75">
            Zateplenie domu je komplexný stavebný proces, ktorý zahŕňa prípravu podkladu, lepenie izolačných dosiek (polystyrén alebo minerálna vata), kotvenie, osadenie rohových profilov, aplikáciu výstužnej mriežky, penetračný náter a finálnu fasádnu omietku.
          </p>
          <ul className="mb-6 space-y-2 text-sm leading-7 text-foreground/75">
            <li><strong>Polystyrén</strong> je ľahší, jednoduchšie sa s ním manipuluje a je lacnejší, avšak má horšiu zvukovú izoláciu a horšiu požiarnu odolnosť.</li>
            <li><strong>Minerálna vata</strong> je ťažšia, lepšie izoluje hluk, je odolnejšia voči ohňu, ale vyžaduje starostlivejšiu montáž a vyššiu cenu.</li>
          </ul>
          <p className="text-sm leading-7 text-foreground/75">
            Pri dôkladnom dodržaní postupov docielite energetickú úsporu, zdravú mikroklímu v interiéri a esteticky príjemnú fasádu s dlhou životnosťou.
          </p>
        </section>

        {/* Back link */}
        <div className="mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Späť na blog
          </Link>
        </div>
      </article>
    </>
  );
}
