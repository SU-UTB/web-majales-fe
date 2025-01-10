import { SectionContainer } from '../shared/SectionContainer';

import { MajalesAreaMap } from '../svg/MajalesAreaMap';

export const MapSection = () => {
  return (
    <SectionContainer id="mapa" bgColor="lightpink">
      <div className="space-y-8">
        <h2 className="text-h2-reversed text-beige">Mapa areálu</h2>
        <MajalesAreaMap width={900} />
      </div>
    </SectionContainer>
  );
};
