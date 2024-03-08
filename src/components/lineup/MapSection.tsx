import { SectionContainer } from '../shared/SectionContainer';

import mapaArealu from '../../assets/img/mapa-arealu.jpg?url';

export const MapSection = () => {
  return (
    <SectionContainer id="mapa" bgColor="purple">
      <div className="space-y-8">
        <h2 className="text-h2-reversed text-beige">Mapa areálu</h2>
        <img src={mapaArealu} alt="Mapa areálu" width={900} height={900} className="w-full max-w-[900px]" />
      </div>
    </SectionContainer>
  );
};
