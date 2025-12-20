import * as CookieConsent from 'vanilla-cookieconsent';

export const PrivacyPolicy = () => {
  const handleOpenSettings = () => {
    // Otevře modální okno s nastavením cookies
    CookieConsent.showPreferences();
  };

  return (
    <div className="container text-lg mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Zásady ochrany osobních údajů</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Správce osobních údajů</h2>
        <p className="mb-2">Správcem osobních údajů je:</p>
        <address className="not-italic mb-4">
          <strong>Studentská unie UTB, z.s.</strong><br />
          Růmy 4046<br />
          760 01 Zlín<br />
          IČO: 26996286<br />
          Kontaktní e-mail: <a href="mailto:web@sutb.cz">web@sutb.cz</a><br />
          (dále jen „správce“)
        </address>
        <p>
          Tyto zásady ochrany osobních údajů se vztahují na webové stránky Majáles UTB, dostupné na adrese:
          <a href="https://majales.utb.cz/" className="text-blue-600 hover:underline ml-1">https://majales.utb.cz/</a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Jaké osobní údaje zpracováváme</h2>
        <p className="mb-2">Na tomto webu zpracováváme osobní údaje v minimalizovaném rozsahu, a to:</p>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>IP adresu (v anonymizované podobě),</li>
          <li>technické údaje o zařízení a prohlížeči,</li>
          <li>informace o chování uživatelů na webu (např. navštívené stránky, kliknutí, doba strávená na webu).</li>
        </ul>
        <p>Tyto údaje jsou zpracovávány prostřednictvím nástroje Google Analytics.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Účel zpracování</h2>
        <p className="mb-2">Osobní údaje zpracováváme za účelem:</p>
        <ul className="list-disc list-inside ml-4">
          <li>analýzy návštěvnosti webu,</li>
          <li>vyhodnocování chování návštěvníků,</li>
          <li>zlepšování obsahu, funkčnosti a uživatelské přívětivosti webu.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Právní základ zpracování</h2>
        <p className="mb-2">Právním základem zpracování pro účely analýzy návštěvnosti je <strong>souhlas uživatele</strong> (čl. 6 odst. 1 písm. a) GDPR), udělený prostřednictvím cookie lišty. Bez udělení tohoto souhlasu nejsou analytické nástroje spuštěny.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Příjemci osobních údajů</h2>
        <p className="mb-2">Osobní údaje mohou být zpřístupněny těmto zpracovatelům:</p>
        <ul className="list-disc list-inside ml-4 mb-2">
          <li>Google LLC (se sídlem v USA) – poskytovatel služby Google Analytics.</li>
        </ul>
        <p>Společnost Google LLC zajišťuje odpovídající úroveň ochrany osobních údajů. Předávání údajů do USA probíhá v souladu s legislativou EU (mj. na základě rámce Data Privacy Framework nebo standardních smluvních doložek).</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Doba uchování</h2>
        <p>Osobní údaje jsou uchovávány po dobu nezbytnou k naplnění účelu analýzy, maximálně však po dobu definovanou v nastavení služby Google Analytics (standardně 2 nebo 14 měsíců), nebo do odvolání souhlasu.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-3">7. Práva subjektů údajů</h2>
        <p className="mb-2">Uživatelé mají právo:</p>
        <ul className="list-disc list-inside ml-4">
          <li>na přístup ke svým osobním údajům,</li>
          <li>na opravu nebo výmaz osobních údajů nebo jejich výmaz,</li>
          <li>na omezení zpracování,</li>
          <li>vznést námitku proti zpracování,</li>
          <li>kdykoliv odvolat svůj souhlas,</li>
          <li>podat stížnost u Úřadu pro ochranu osobních údajů.</li>
        </ul>
      </section>

      <hr className="my-8 border-gray-300" />

      <h1 className="text-3xl font-bold mb-6">Zásady používání cookies</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Co jsou cookies</h2>
        <p>Cookies jsou malé textové soubory, které se ukládají do vašeho zařízení při návštěvě webových stránek. Pomáhají zajistit správné fungování webu a umožňují analýzu jeho návštěvnosti.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Jaké cookies používáme</h2>
        <p className="mb-2"><strong>a) Nezbytné (technické) cookies</strong> Tyto cookies jsou nutné pro správné fungování webu (např. uložení vašeho nastavení souhlasu s cookies). Pro jejich použití není vyžadován souhlas a nelze je odmítnout.</p>
        <h3 className="mt-2"><strong>b) Analytické cookies</strong> Slouží k měření návštěvnosti a vytváření statistik.</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Pomáhají nám chápat, jak web používáte.</li>
          <li>Jsou zpracovávány prostřednictvím služby Google Analytics.</li>
          <li>Tyto cookies ukládáme <strong>pouze s vaším souhlasem</strong>.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Nastavení a odvolání souhlasu</h2>
        <p className="mb-4">Analytické cookies jsou aktivovány až po udělení souhlasu v cookie liště. Svůj souhlas můžete kdykoliv změnit nebo odvolat zde:</p>

        <div className="mb-4">
          <button
            onClick={handleOpenSettings}
            className="bg-blue-600 text-violet px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Nastavení cookies
          </button>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Závěrečná ustanovení</h2>
        <p>Tyto zásady jsou platné a účinné od 20.&nbsp;12.&nbsp;2025. Správce si vyhrazuje právo tyto zásady v případě potřeby aktualizovat.</p>
      </section>
    </div>
  );
};