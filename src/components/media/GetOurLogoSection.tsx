
import barca from '../../assets/img/contacts/barca.webp?url';
import { ContactItem } from '../contacts/ContactItem';
import { SectionContainer } from '../shared/SectionContainer';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { AsteriskSquare } from '../svg/elements/AsteriskSquare';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { CheckerTriangleTransparent } from '../svg/elements/CheckerTriangleTransparent';
import { DualTriangle } from '../svg/elements/DualTriangle';
import { HalfCircles } from '../svg/elements/HalfCircles';
import { Star } from '../svg/elements/Star';
import { Triangle } from '../svg/elements/Triangle';

export const GetOurLogoSection = () => {
  return (
    <SectionContainer id="media-logo" bgColor='darkDarkBlue' className="relative py-14 md:py-20 lg:py-24">
      <div className="max-w-2xl space-y-8 text-white pb-8 pr-6">
        <p>
          Sháníte naše logo, tiskovou zprávu nebo třeba fotografie z loňského ročníku?<br /> Vše jsme pro vás přehledně
          připravili tady.
        </p>
        <a
          href="https://drive.google.com/drive/folders/147j9gm0UYpwz2vGKWfxjh7AKkGzxAvvy"
          target="_blank"
          rel="noopener noreferrer external"
          data-track-event="click"
          data-track-category="Media"
          data-track-label="Media/Press Kit"
          className="bg-lightPink px-10 md:px-20 py-4 md:py-6 rounded-xl text-violet font-medium inline-block hover:bg-pink hover:text-white transition-colors"
        >
          Press Kit
        </a>
        <ContactItem
          position="Kontaktní osoba pro média"
          name="BARBORA HANOLDOVÁ"
          email="hanoldova@sutb.cz"
          phone='+420 720 497 790'
          photo={barca}
          textColor="white"
        />
      </div>
      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0 z-10">
        <div className="relative">
          <HalfCircles className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24 rotate-180" colorMain='fill-beige' colorSecondary='fill-lightPink' />
          <Star className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24 rotate-180" colorMain='fill-beige' colorSecondary='fill-violet' />
          <Triangle className="absolute bottom-0 md:bottom-0 right-24 md:right-48 h-12 md:h-24 rotate-180" colorMain='fill-beige' />
          <DualTriangle className="absolute rotate-180 bottom-0 md:bottom-0 right-24 md:right-48 h-12 md:h-24" colorMain='fill-pink' colorSecondary='fill-lightPink' />
          
          <Triangle className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24 rotate-180" colorMain='fill-pink' />
        </div>
      </div>
    </SectionContainer>
  );
};
