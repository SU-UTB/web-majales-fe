import { MAJALES_DATE } from '../../config/constants';
import { Container } from '../shared/Container';
import { MajalesHeadline } from '../svg/MajalesHeadline';

import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { CheckerRectangleLandscape } from '../svg/elements/CheckerRectangleLandscape';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { CheckerTriangleTransparent } from '../svg/elements/CheckerTriangleTransparent';
import { SquareWithCircle } from '../svg/elements/SquareWithCircle';
import { TextRectangle } from '../svg/elements/TextRectangle';
import { Triangle } from '../svg/elements/Triangle';

export const LandingSection = () => {
  return (
    <section
      id="landing"
      className="pt-12 pb-20 md:pb-32 xl:py-20 bg-no-repeat relative"
    >
      <Container>
        <div className="relative flex justify-center">
          <MajalesHeadline width={700} />
        </div>
      </Container>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <ArrowSquare className="h-12 md:h-24" color='#E7548A' />
          <Triangle className="absolute top-12 md:top-24 h-12 md:h-24 rotate-90" color='#FFFFFF' />
        </div>
      </div>
      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <CheckerRectangleLandscape className="h-12 md:h-24" color1="#1F2041" color2="#FFFFFF" />
          <Triangle className="absolute -left-12 md:-left-24 bottom-0 h-12 md:h-24 rotate-180" color='#FF785A' />
        </div>
      </div>
      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <CheckerSquare className="absolute bottom-0 h-12 md:h-24" color1='#000000' color2='#FFFFFF' />
          <SquareWithCircle className="absolute bottom-12 md:bottom-24 h-12 md:h-24"  colorBg='#E7548A' colorLeftHalf='#FFFFFF' colorRightHalf='#FF785A' />
          <CheckerTriangleTransparent className="absolute bottom-24 md:bottom-48 h-12 md:h-24" />
          <TextRectangle className="absolute bottom-0 md:bottom-0 left-12 md:left-24 h-12 md:h-24 w-36 md:w-72  overflow-hidden" color='#6459FD'>
            <h2 className="text-h2-reversed-mobile md:text-h2-reversed text-white">
              {MAJALES_DATE.toLocaleDateString('cs-CZ')}
            </h2>
          </TextRectangle>
          <Triangle className="absolute bottom-0 md:bottom-0 left-48 md:left-96 h-12 md:h-24 -rotate-90" color='#E7548A' />
        </div>
      </div>
    </section>
  );
};
