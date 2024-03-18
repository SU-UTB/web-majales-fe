import { SectionContainer } from '../shared/SectionContainer';

export const HarmonogramSection = () => {
  return (
    <SectionContainer
      id="harmonogram"
      style={{
        backgroundImage: "url('/assets/img/harmonogram-right.webp')",
        backgroundPosition: 'right',
        // TODO: remove once we have the content
        minHeight: '80vh',
      }}
    >
      <h2 className="text-h2-reversed text-orange">Harmonogram</h2>
      <p>Harmonogram akce bude zveřejněn brzy</p>
    </SectionContainer>
  );
};
