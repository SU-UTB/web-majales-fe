import { harmonogramAStage, harmonogramBStage } from '../../data/harmonogram';
import { SectionContainer } from '../shared/SectionContainer';
import { Arc } from '../svg/shapes/Arc';
import { BublyCircles } from '../svg/shapes/BublyCircles';
import { DotsTriangle } from '../svg/shapes/DotsTriangle';
import { DoubleArrow } from '../svg/shapes/DoubleArrow';
import { Keyboard } from '../svg/shapes/Keyboard';
import { Rays } from '../svg/shapes/Rays';
import { SquaredSquare } from '../svg/shapes/SquaredSquare';
import { TitsWithNipples } from '../svg/shapes/TitsWithNipples';
import { HarmonogramGroup } from './harmonogram/HarmonogramGroup';

export const HarmonogramSection = () => {
  return (
    <SectionContainer
      id="harmonogram"
      bgColor="bg-yellow"
      className="min-h-[70vh] flex flex-col justify-center py-20 sm:py-28 md:py-36 relative overflow-hidden"
    >
      {/* Dva sloupce harmonogramu - A stage a B stage (B stage začíná opticky o něco níže) */}
      <div className="w-fit mx-auto px-4 sm:px-6 my-auto pt-16 pb-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 xl:gap-28 items-start relative z-10">
        <HarmonogramGroup
          title="Harmonogram A stage"
          harmonogramItems={harmonogramAStage}
        />
        <HarmonogramGroup
          title="Harmonogram B stage"
          harmonogramItems={harmonogramBStage}
          className="md:mt-14 lg:mt-20"
        />
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          {/* Badge v levém horním rohu */}
          <div className="absolute top-0 left-12 md:left-24 z-10">
            <span className="inline-flex items-center justify-center top-0 md:top-0 left-12 md:left-24 h-12 md:h-24 bg-lightGreen text-orange text-xl xs:text-xl sm:text-3xl md:text-5xl font-semibold px-4 xs:px-6 sm:px-8">
              Harmonogram
            </span>
          </div>
          <DoubleArrow className="absolute top-0 md:top-0 left-0 md:left-0 h-24 md:h-48" colorMain="fill-orange" colorBg="fill-lightGreen" />
          <Arc className="absolute top-12 md:top-24 left-12 md:left-24 h-8 md:h-16 rotate-90" colorMain="fill-darkPurple" />
        </div>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <Rays className="absolute top-0 md:top-0 right-0 md:right-0 h-24 md:h-48 -scale-x-100" colorMain="stroke-orange" colorBg="fill-darkPurple" />
          <Keyboard className="absolute top-0 md:top-0 right-12 md:right-24 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
        </div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <SquaredSquare className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24" colorMain="fill-orange" colorBg="fill-lightGreen" />
          <DotsTriangle className="absolute bottom-0 md:bottom-0 left-12 md:left-24 h-12 md:h-24 rotate-90" colorMain="fill-orange" colorBg="fill-transparent" />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <BublyCircles className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <TitsWithNipples className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24" colorMain1="fill-lightGreen" colorMain2="fill-darkPurple" colorBg="fill-orange" />
        </div>
      </div>
    </SectionContainer>
  );
};

