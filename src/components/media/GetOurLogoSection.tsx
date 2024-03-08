import { SectionContainer } from '../shared/SectionContainer';

export const GetOurLogoSection = () => {
  return (
    <SectionContainer id="media-logo">
      <div className="max-w-2xl space-y-8">
        <p>
          Sháníte naše logo, tiskovou zprávu nebo třeba fotografie z loňského ročníku? Vše jsme pro vás přehledně
          připravili tady.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1yJkrVtKaPwjG8hMc4S5ObNAtqRgY9PTI"
          target="_blank"
          rel="noopener noreferrer external"
          className="bg-blue px-6 py-2 rounded-xl text-beige inline-block"
        >
          Stáhnout
        </a>
      </div>
    </SectionContainer>
  );
};
