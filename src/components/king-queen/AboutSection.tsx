import { SectionContainer } from '../shared/SectionContainer';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { BigTriangle } from '../svg/elements/BigTriangle';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { HalfCircles } from '../svg/elements/HalfCircles';
import { SquareWithCircle } from '../svg/elements/SquareWithCircle';
import { Triangle } from '../svg/elements/Triangle';
import { AboutContent } from './AboutContent';
import { Register } from './Register';

export const AboutSection = () => {
  return (
    <SectionContainer id="kral-a-kralovna" bgColor="pink">
      <div className="space-y-12 relative px-4">
        <AboutContent />
        {/* <Register registerLink="https://forms.gle/ZsBXSshDwSKwiQHR9" /> */}
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <Triangle className="absolute rotate-180 bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24" colorMain='fill-beige' />
          <HalfCircles className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24" colorMain='fill-beige' colorSecondary='fill-pink' />
          <SquareWithCircle className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24 rotate-90" colorBgLeft='fill-beige' colorBgRight='fill-beige' colorCirLeft='fill-pink' colorCirRight='fill-lightPink' />
          <Triangle className="absolute rotate-180 bottom-0 md:bottom-0 right-24 md:right-48 h-12 md:h-24" colorMain='fill-lightPink' />
        </div>
      </div>
    </SectionContainer>
  );
};
