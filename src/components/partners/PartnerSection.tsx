import { SectionContainer } from '../shared/SectionContainer';
import { PartnerList } from './PartnerList';
import { SinglePartnerItem } from './SinglePartnerItem';

import hitradioLogo from '../../assets/img/partners/hitradio-zlin.png?url';
import postaBezHranicLogo from '../../assets/img/partners/pbh.png?url';
import suLogo from '../../assets/img/partners/su.png?url';
import trinityLogo from '../../assets/img/partners/trinity.jpg?url';
import utbLogo from '../../assets/img/partners/utb.png?url';
import { MainPartnerList } from './MainPartnerList';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { SquareWithCircle } from '../svg/elements/SquareWithCircle';
import { Triangle } from '../svg/elements/Triangle';
import { AsteriskSquare } from '../svg/elements/AsteriskSquare';
import { HalfTransparentRedTriangle2X } from '../svg/elements/HalfTransparentRedTriangle2X';
import { CheckerTriangleTransparent } from '../svg/elements/CheckerTriangleTransparent';

export const PartnerSection = () => {
  return (
    <SectionContainer id="partneri" bgColor='white'>
      <div className="space-y-12 lg:gap-y-16 flex flex-col items-center md:pb-12">
        <h2 className="text-h1-reversed-mobile md:text-h1-reversed text-darkDarkBlue">Partneři podporující studentský Majáles UTB</h2>
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
      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0 z-10">
        <div className="relative">
          <Triangle className="absolute bottom-0 md:bottom-0 right-60 md:right-120 h-12 md:h-24 rotate-180" color='#FFE2DE' />
          <ArrowSquare className="absolute bottom-0 md:bottom-0 right-48 md:right-96 h-12 md:h-24 rotate-90" color='#1F2041' />
          <CheckerSquare className="absolute bottom-0 md:bottom-0 right-36 md:right-72 h-12 md:h-24" color1='#E7548A' color2='#1F2041' />
          <CheckerSquare className="absolute bottom-0 md:bottom-0 right-24 md:right-48 h-12 md:h-24" color1='#1F2041' color2='#E7548A' />
          <CheckerSquare className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24" color1='#E7548A' color2='#1F2041' />
          <AsteriskSquare className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24" color='#FF785A' asteriskColor='#FFFFFF' />
          <CheckerSquare className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24" color1='#FFFFFF' color2='#000000' />
          <SquareWithCircle className="absolute bottom-24 md:bottom-48 right-0 md:right-0 h-12 md:h-24" colorBg='#FFE2DE' colorLeftHalf='#FF785A' colorRightHalf='#FFFFFF' />
          <CheckerTriangleTransparent className="absolute bottom-36 md:bottom-72 right-0 md:right-0 h-12 md:h-24 -rotate-90" color='#FF785A' /> 
        </div>
      </div>
    </SectionContainer>
  );
};
