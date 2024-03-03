import { SectionContainer } from '../shared/SectionContainer';
import { PartnerList } from './PartnerList';
import { SinglePartnerItem } from './SinglePartnerItem';

import utbLogo from '../../assets/img/loga/utb-logo.jpg?url';

export const PartnerSection = () => {
  return (
    <SectionContainer id="partneri">
      <div className="space-y-12">
        <h2 className="text-h2-reversed text-orange">Partneři podporující studentský Majáles UTB</h2>
        <div className="flex flex-wrap justify-between">
          <SinglePartnerItem headline="Pořadatel" img="" alt="SU logo" />
          <SinglePartnerItem headline="Spolupořadatel" img={utbLogo} alt="UTB logo" />
        </div>
        <div className="flex flex-col items-center">
          <SinglePartnerItem headline="Mediální partner" img="" alt="Hitradio logo" />
          <SinglePartnerItem headline="Generální partner" img="" alt="Trinity logo" />
        </div>
        <PartnerList />
      </div>
    </SectionContainer>
  );
};
