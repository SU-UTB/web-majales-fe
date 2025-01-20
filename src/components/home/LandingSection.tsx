import { MAJALES_DATE } from '../../config/constants';
import { Container } from '../shared/Container';
import { MajalesHeadline } from '../svg/MajalesHeadline';

import { ArrowLeftBottom } from '../svg/elements/ArrowLeftBottom';
import { CheckerRectangle } from '../svg/elements/CheckerRectangle';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { CheckerTriangleTransparent } from '../svg/elements/CheckerTriangleTransparent';
import { OrangeTriangle } from '../svg/elements/OrangeTriangle';
import { PurpleRectangle } from '../svg/elements/PurpleRectangle';
import { SquareWithCircle } from '../svg/elements/SquareWithCircle';
import { WhiteTriangle } from '../svg/elements/WhiteTriangle';
import { PinkTriangle } from '../svg/elements/PinkTriangle';

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
          <ArrowLeftBottom className="h-12 md:h-24" />
          <WhiteTriangle className="absolute top-12 md:top-24 h-12 md:h-24" />
        </div>
      </div>
      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <CheckerRectangle className="h-12 md:h-24" />
          <OrangeTriangle className="absolute -left-12 md:-left-24 bottom-0 h-12 md:h-24" />
        </div>
      </div>
      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <CheckerSquare className="absolute bottom-0 h-12 md:h-24" />
          <SquareWithCircle className="absolute bottom-12 md:bottom-24 h-12 md:h-24" />
          <CheckerTriangleTransparent className="absolute bottom-24 md:bottom-48 h-12 md:h-24" />
          <PurpleRectangle className="absolute bottom-0 md:bottom-0 left-12 md:left-24 h-12 md:h-24 w-40 md:w-72  overflow-hidden">
            <h2 className="text-h2-reversed-mobile md:text-h2-reversed text-white">
              {MAJALES_DATE.toLocaleDateString('cs-CZ')}
            </h2>
          </PurpleRectangle>
          <PinkTriangle className="absolute bottom-0 md:bottom-0 left-48 md:left-96 h-12 md:h-24" />
        </div>
      </div>
    </section>
  );
};
