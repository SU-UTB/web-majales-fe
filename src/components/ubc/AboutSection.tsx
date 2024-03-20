import { SectionContainer } from '../shared/SectionContainer';

export const AboutSection = () => {
  return (
    <SectionContainer id="ubc" bgColor="orange">
      <h1 className="text-beige text-h2">UBC – UniBandContest 2024</h1>
      <div className="text-beige space-y-4 max-w-screen-md">
        <p>
          Máte kapelu a chcete si zahrát na velkých pódiích? UniBand Contest je soutěž právě pro vás! Zapoj se do tohoto
          celorepublikového souboje. Získej titul vítěze a status nejlepší studentské kapely v Česku.
        </p>
        <div>
          <h2 className="text-h2">Informace o UniBand Contestu</h2>
          <p>
            Hlavním cílem soutěže je nabídnout studentským kapelám prostor ukázat svůj talent široké veřejnosti.
            Účastníci soutěž poté mohou rozvíjet svůj hudební potenciál a získat zkušenosti, které jim mohou pomoci v
            uměleckém růstu. Kapely se utkají v několika kolech, kde změří své dovednosti a ti nejúspěšnější se dostanou
            „z malého klubu, až na velký festival.“
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};
