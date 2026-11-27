import { SectionContainer } from '../shared/SectionContainer';
import mapa from '../../assets/img/mapa.webp?url';
import { Rays } from '../svg/shapes/Rays';
import { BublyCircles } from '../svg/shapes/BublyCircles';
import { DotsSquare } from '../svg/shapes/DotsSquare';
import { Arc } from '../svg/shapes/Arc';
import { AskewStrip } from '../svg/shapes/AskewStrip';
import { SquaredSquare } from '../svg/shapes/SquaredSquare';
import { DotsTriangle } from '../svg/shapes/DotsTriangle';
import { OpenTriangles } from '../svg/shapes/OpenTriangles';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const MapSection = () => {
  return (
    <SectionContainer
      id="mapa"
      bgColor="bg-yellow"
      className="min-h-[50vh] sm:min-h-[60vh] flex flex-col justify-center py-20 sm:py-28 md:py-36 relative overflow-hidden"
    >
      {/* Map Image */}
      <div className="relative z-20 mt-10 md:mt-16 w-full flex justify-center items-center px-4 sm:px-6">
        <div className="w-full max-w-[800px] border-4 border-darkPurple bg-white p-2 sm:p-4 rounded-xl">
          <img
            src={mapa}
            alt="Mapa areálu Majáles UTB"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          {/* Badge v levém horním rohu */}
          <div className="absolute top-0 left-12 md:left-24 z-10">
            <span className="inline-flex items-center justify-center h-12 md:h-24 bg-lightGreen text-orange text-xl xs:text-xl sm:text-3xl md:text-5xl font-semibold px-4 xs:px-6 sm:px-8">
              Mapa
            </span>
          </div>
          {/* <DotsSquare
            className="absolute top-0 md:top-0 left-0 md:left-0 h-12 md:h-24"
            colorMain="fill-orange"
            colorBg="fill-darkPurple"
          /> */}
          <DotLottieReact
            src="/animations/DotsSquare.json"
            loop
            autoplay
            className="absolute top-0 md:top-0 left-0 md:left-0 h-12 md:h-24 aspect-square"
          />
        </div>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <BublyCircles
            className="absolute top-0 md:top-0 right-0 md:right-0 h-12 md:h-24 rotate-180"
            colorMain="fill-darkPurple"
            colorBg="fill-lightGreen"
          />
          <AskewStrip
            className="absolute top-12 md:top-24 right-0 md:right-0 h-12 md:h-24"
            colorMain="fill-orange"
            colorBg="fill-lightGreen"
          />
          <Arc
            className="absolute top-12 md:top-24 right-12 md:right-24 h-8 md:h-16 rotate-180"
            colorMain="fill-orange"
          />
        </div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          {/* <SquaredSquare
            className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24"
            colorMain="fill-orange"
            colorBg="fill-lightGreen"
          /> */}
          <DotLottieReact
            src="/animations/SquaredSquare.json"
            loop
            autoplay
            className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24 aspect-square"
          />
          <DotsTriangle
            className="absolute bottom-0 md:bottom-0 left-12 md:left-24 h-12 md:h-24 rotate-90"
            colorMain="fill-orange"
            colorBg="fill-transparent"
          />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <DotLottieReact
            src="/animations/SquaredSquare-green-purple.json"
            loop
            autoplay
            className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24 aspect-square"
          />
          <OpenTriangles
            className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24"
            colorMain="fill-lightGreen"
            colorBg="fill-darkPurple"
          />
        </div>
      </div>
    </SectionContainer>
  );
};
