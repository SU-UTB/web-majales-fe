import { SectionContainer } from '../shared/SectionContainer';
import { PartnerList } from './PartnerList';
import { SinglePartnerItem } from './SinglePartnerItem';

import hitradioLogo from '../../assets/img/partners/hitradio-zlin.png?url';
import postaBezHranicLogo from '../../assets/img/partners/pbh.png?url';
import suLogo from '../../assets/img/partners/su.png?url';
import trinityLogo from '../../assets/img/partners/trinity.jpg?url';
import utbLogo from '../../assets/img/partners/utb.png?url';
import { MainPartnerList } from './MainPartnerList';

export const PartnerSection = () => {
  return (
    <SectionContainer id="partneri">
      <div className="space-y-12 lg:gap-y-16 flex flex-col items-center">
        <h2 className="text-h2-reversed text-pink">Partneři podporující studentský Majáles UTB</h2>
        <div className="flex flex-wrap justify-center gap-x-20 gap-y-8">
          <SinglePartnerItem headline="Pořadatel" img={suLogo} alt="SU logo" link="https://su.utb.cz/" />
          <SinglePartnerItem headline="Spolupořadatel" img={utbLogo} alt="UTB logo" link="https://www.utb.cz/" />
        </div>
        <SinglePartnerItem
          headline="Generální partner"
          img={trinityLogo}
          alt="Trinity logo"
          link="https://www.trinitybank.cz/"
        />
        <div className="flex flex-wrap items-center gap-16 lg:gap-20">
          <SinglePartnerItem
            headline="Mediální partner"
            img={hitradioLogo}
            alt="Hitradio logo"
            link="https://hitradiozlin.cz/"
          />
          <SinglePartnerItem
            headline="Logistický partner"
            img={postaBezHranicLogo}
            alt="Pošta bez hranic logo"
            link="https://www.postabezhranic.cz/"
          />
        </div>
        <MainPartnerList />
        <PartnerList />
      </div>
    </SectionContainer>
  );
};
