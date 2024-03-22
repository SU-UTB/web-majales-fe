import ubcImg from '../../assets/img/ubc-img.webp?url';
import { SectionContainer } from '../shared/SectionContainer';

export const AboutSection = () => {
  return (
    <SectionContainer id="ubc" bgColor="orange">
      <h1 className="text-beige text-h2">UBC – UniBand Contest 2024</h1>
      <div className="text-beige space-y-4 max-w-screen-md">
        <p>
          Máte kapelu a&nbsp;chcete si zahrát na velkých pódiích? UniBand Contest je soutěž právě pro vás! Zapoj se do
          tohoto celorepublikového souboje. Získej titul vítěze a&nbsp;status nejlepší studentské kapely v&nbsp;Česku.
        </p>
        <div>
          <h2 className="text-h2">Informace o&nbsp;UniBand Contestu</h2>
          <p>
            Hlavním cílem soutěže je nabídnout studentským kapelám prostor ukázat svůj talent široké veřejnosti.
            Účastníci soutěž poté mohou rozvíjet svůj hudební potenciál a&nbsp;získat zkušenosti, které jim mohou pomoci
            v&nbsp;uměleckém růstu. Kapely se utkají v&nbsp;několika kolech, kde změří své dovednosti a&nbsp;ti
            nejúspěšnější se dostanou „z&nbsp;malého klubu, až na velký festival.“
          </p>
        </div>
      </div>
      <img
        src={ubcImg}
        alt="UBC kapela"
        width={800}
        height={400}
        className="2xl:absolute static right-6 2xl:-bottom-[20%] 2xl:translate-y-[20%] max-w-[600px] z-10 mt-8"
      />
    </SectionContainer>
  );
};
