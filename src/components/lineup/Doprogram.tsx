import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { doprovodnyProgram } from '../../data/doprovodnyProgram';
import { SectionContainer } from '../shared/SectionContainer';
import { Arc } from '../svg/shapes/Arc';
import { BublyCircles } from '../svg/shapes/BublyCircles';
import { DoubleArrow } from '../svg/shapes/DoubleArrow';
import { Keyboard } from '../svg/shapes/Keyboard';
import { Rays } from '../svg/shapes/Rays';
import { SquareWithHalfCircles } from '../svg/shapes/SquareWithHalfCircles';
import { Target } from '../svg/shapes/Target';
import { SquaredSquare } from '../svg/shapes/SquaredSquare';
import { DotsTriangle } from '../svg/shapes/DotsTriangle';
import { TitsWithNipples } from '../svg/shapes/TitsWithNipples';

export const Doprogram = () => {
  return (
    <SectionContainer
      id="doprovodny-program"
      bgColor="bg-yellow"
      className="min-h-[60vh] flex flex-col justify-center py-20 sm:py-28 md:py-36 relative overflow-hidden"
    >
      {/* Hlavní obsah sekce */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 py-12 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-24">
        {/* Levá část: kreslený obličej (dočasně nahrazen animací DotsSquare.json) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-48 sm:w-64 md:w-80 aspect-square flex items-center justify-center">
            <DotLottieReact
              src="/animations/lada_dark_purple.json"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Pravá část: Seznam položek doprovodného programu */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 sm:space-y-8">
          {doprovodnyProgram.map((item) => (
            <div key={item.id} className="flex flex-col">
              <h3 className="text-orange text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="text-darkPurple text-base sm:text-lg md:text-xl font-medium mt-0.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 md:top-0 left-0 md:left-0">
        <div className="relative">
          {/* Badge s nadpisem */}
          <div className="absolute top-0 md:top-0 left-12 md:left-24 z-10">
            <span className="inline-flex items-center justify-center h-12 md:h-24 bg-lightGreen text-orange text-xl xs:text-xl sm:text-3xl md:text-5xl font-semibold px-4 xs:px-6 sm:px-8 text-nowrap">
              Doprovodný program
            </span>
          </div>
          <DotLottieReact
            src="/animations/DoubleArrowOrange.json"
            autoplay
            loop
            className="absolute bottom-0 -left-6 h-24 w-24 origin-bottom-left rotate-90 md:-left-12 md:h-48 md:w-48"
          />
          <Arc
            className="absolute top-12 md:top-24 left-12 md:left-24 h-8 md:h-16 rotate-90"
            colorMain="fill-darkPurple"
          />
        </div>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute top-0 md:top-0 right-0 md:right-0">
        <div className="relative">
          <Rays
            className="absolute top-0 md:top-0 right-0 md:right-0 h-24 md:h-48 -scale-x-100"
            colorMain="stroke-orange"
            colorBg="fill-darkPurple"
          />
          <Keyboard className="absolute top-0 md:top-0 right-12 md:right-24 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
        </div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 md:bottom-0 left-0 md:left-0">
        <div className="relative">
          <SquaredSquare className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24" colorMain="fill-orange" colorBg="fill-lightGreen" />
          <DotLottieReact
            src="/animations/SquaredSquare.json"
            loop
            autoplay
            className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24 aspect-square"
          />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 md:bottom-0 right-0 md:right-0">
        <div className="relative">
          <BublyCircles className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <Arc className="absolute bottom-0 md:bottom-0 right-24 md:right-48 h-8 md:h-16 -rotate-90" colorMain="fill-darkPurple" />
          <DotLottieReact
            src="/animations/TitsWithNipples.json"
            loop
            autoplay
            className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24 aspect-square"
          />
        </div>
      </div>
    </SectionContainer>
  );
};
