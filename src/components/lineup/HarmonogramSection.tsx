import { barumStage, utbTrinityStage } from '../../data/harmonogram';
import { SectionContainer } from '../shared/SectionContainer';
import { ArrowLeft } from '../svg/elements/ArrowLeft';
import { AsteriskSquare } from '../svg/elements/AsteriskSquare';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { HalfCircles } from '../svg/elements/HalfCircles';
import { HalfTransparentRedTriangle2X } from '../svg/elements/HalfTransparentRedTriangle2X';
import { SquareWithCircle } from '../svg/elements/SquareWithCircle';
import { Star45 } from '../svg/elements/Star45';
import { TextRectangle } from '../svg/elements/TextRectangle';
import { Triangle } from '../svg/elements/Triangle';
import { HarmonogramGroup } from './harmonogram/HarmonogramGroup';

export const HarmonogramSection = () => {
  return (
    <SectionContainer
      id="harmonogram"
      bgColor='beige'
    >
      <div className="my-12 py-4 md:py-12 px-4 lg:px-20 lg:py-10 max-w-max mx-auto grid grid-cols-1 xl:grid-cols-2 gap-14 items-start">
        <HarmonogramGroup title="UTB Trinity bank stage" harmonogramItems={utbTrinityStage} />
        <HarmonogramGroup title="Barum stage" harmonogramItems={barumStage} />
      </div>


      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <SquareWithCircle className="absolute top-0 md:top-0 left-0 md:left-0 h-12 md:h-24" colorBgLeft='fill-orange' colorBgRight='fill-orange' colorCirLeft='fill-beige' colorCirRight='fill-lightOrange' />
          <TextRectangle className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24 w-48 md:w-96 overflow-y-hidden bg-lightOrange" color=''>
            <h2 className="text-2xl md:text-5xl font-medium text-violet">
              Harmonogram
            </h2>
          </TextRectangle>
          <Triangle className="absolute top-0 md:top-0 left-60 md:left-120 h-12 md:h-24" colorMain='fill-lightOrange' />
          <Star45 className="absolute top-12 md:top-24 left-0 md:left-0 h-12 md:h-24" colorMain='fill-lightOrange' colorSecondary='fill-orange' />
          <Triangle className="absolute top-24 md:top-48 left-0 md:left-0 h-12 md:h-24" colorMain='fill-orange' />
        </div>
      </div>
      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <ArrowLeft className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24" colorMain='fill-orange' colorSecondary='fill-lightOrange' />
          <Triangle className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24 rotate-180" colorMain='fill-lightOrange' />
          <Star45 className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24" colorMain='fill-orange' colorSecondary='fill-beige' />
          <Triangle className="absolute bottom-24 md:bottom-48 right-0 md:right-0 h-12 md:h-24 rotate-180" colorMain='fill-lightOrange' />
        </div>
      </div>
    </SectionContainer>
  );
};
