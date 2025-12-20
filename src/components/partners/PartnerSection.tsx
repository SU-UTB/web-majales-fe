import hitradioZlinLogo from '../../assets/img/partners/hitradio-zlin.png?url';
import medialniPartnerLogo from '../../assets/img/partners/medialniPartnerLogo.png?url';
import postaBezHranicLogo from '../../assets/img/partners/pbh.png?url';
import trinityLogo from '../../assets/img/partners/trinity.jpg?url';
import { mainPartners, partners, supportPartners } from '../../data/partners';
import { SectionContainer } from '../shared/SectionContainer';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { AsteriskSquare } from '../svg/elements/AsteriskSquare';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { CheckerTriangleTransparent } from '../svg/elements/CheckerTriangleTransparent';
import { Lightning } from '../svg/elements/Lightning';
import { SquareWithCircle } from '../svg/elements/SquareWithCircle';
import { Triangle } from '../svg/elements/Triangle';
import { PartnerList } from './PartnerList';
import { SinglePartnerItem } from './SinglePartnerItem';
export const PartnerSection = () => {
  return (
    <SectionContainer id="partneri" bgColor='beige'>
      <div className="space-y-12 lg:gap-y-12 flex flex-col items-center md:pb-12">
        {/* <div className="flex flex-col text-left">
          <h1 className="text-h2-reversed-mobile md:text-h2-reversed text-beige">Partneři podporující studentský Majáles UTB</h1>
        </div>
        <SinglePartnerItem
          headline="Generální partner"
          img={trinityLogo}
          alt="Trinity logo"
          link="https://www.trinitybank.cz/"
        /> */}
        {/* <SinglePartnerItem
          headline="Hlavní mediální partner"
          img={hitradioZlinLogo}
          alt="Hitradio Zlín logo"
          link="https://www.hitradiozlin.cz/"
        /> */}
        {/* <div className="flex flex-wrap items-center gap-16 lg:gap-20">
          <SinglePartnerItem
            headline="Mediální partner"
            img={medialniPartnerLogo}
            alt="Mediální partner logo"
            link="https://www.kfbz.cz/"
          />
          <SinglePartnerItem
            headline="Logistický partner"
            img={postaBezHranicLogo}
            alt="Pošta bez hranic logo"
            link="https://www.postabezhranic.cz/"
          />
        </div> */}
        <PartnerList header="S podporou" partnerList={supportPartners} />
        {/* <PartnerList header="Hlavní partneři" partnerList={mainPartners} />
        <PartnerList header="Partneři" partnerList={partners} /> */}
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0 z-10">
        <div className="relative">
          <Lightning className="absolute top-0 md:top-0 left-0 md:left-0 h-12 md:h-24 rotate-180" colorMain='fill-lightPink' />
          <SquareWithCircle className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24" colorBgLeft='fill-lightPink' colorBgRight='fill-pink' colorCirLeft='fill-beige' colorCirRight='fill-beige' />
          <Triangle className="absolute top-0 md:top-0 left-24 md:left-48 h-12 md:h-24" colorMain='fill-pink' />
        </div>
      </div>
    </SectionContainer>
  );
};
