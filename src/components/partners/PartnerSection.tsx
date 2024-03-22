import { SectionContainer } from '../shared/SectionContainer';
import { PartnerList } from './PartnerList';
import { SinglePartnerItem } from './SinglePartnerItem';

import hitradioLogo from '../../assets/img/loga/hitradio.png?url';
import postaBezHranicLogo from '../../assets/img/loga/pbh.png?url';
import suLogo from '../../assets/img/loga/su.png?url';
import trinityLogo from '../../assets/img/loga/trinity.jpg?url';
import utbLogo from '../../assets/img/loga/utb.png?url';
import { MainPartnerList } from './MainPartnerList';

export const PartnerSection = () => {
  return (
    <SectionContainer id="partneri">
      <div className="space-y-12 lg:gap-y-16 flex flex-col items-center">
        <h2 className="text-h2-reversed text-orange">Partneři podporující studentský Majáles UTB</h2>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-8">
          <SinglePartnerItem headline="Pořadatel" img={suLogo} alt="SU logo" />
          <SinglePartnerItem headline="Spolupořadatel" img={utbLogo} alt="UTB logo" />
        </div>
        <SinglePartnerItem headline="Generální partner" img={trinityLogo} alt="Trinity logo" />
        <div className="flex flex-wrap items-center gap-16 lg:gap-20">
          <SinglePartnerItem headline="Mediální partner" img={hitradioLogo} alt="Hitradio logo" />
          <SinglePartnerItem headline="Logistický partner" img={postaBezHranicLogo} alt="Pošta bez hranic logo" />
        </div>
        <MainPartnerList />
        <PartnerList />
      </div>
    </SectionContainer>
  );
};
