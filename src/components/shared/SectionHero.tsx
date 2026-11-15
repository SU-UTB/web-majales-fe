import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { MajalesHeadline } from "../svg/MajalesHeadline";
import { Arc } from "../svg/shapes/Arc";
import { BublyCircles } from "../svg/shapes/BublyCircles";
import { DotsTriangle } from "../svg/shapes/DotsTriangle";
import { NarrowTriangles } from "../svg/shapes/NarrowTriangles";
import { OpenTriangles } from "../svg/shapes/OpenTriangles";
import { Rays } from "../svg/shapes/Rays";
import { SquaredSquare } from "../svg/shapes/SquaredSquare";
import { Traverse } from "../svg/shapes/Traverse";
import { Container } from "./Container";

export const SectionHero = () => {
  return (
    <section
      id="landing"
      className="relative min-h-[40vh] md:min-h-[60vh] xl:min-h-[80vh] flex flex-col justify-center pt-8 pb-16 md:py-12 bg-yellow bg-no-repeat overflow-hidden"
    >
      <Container>
        <div className="relative flex justify-center px-4 sm:px-8 w-full">
          <MajalesHeadline className="w-[60vw]" />
        </div>
      </Container>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <Rays className="absolute top-0 left-0 h-24 md:h-48" colorMain="stroke-darkPurple" colorBg="fill-lightGreen" />
          <DotLottieReact
            src="/animations/DotsSquare.lottie"
            loop
            autoplay
            className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24 aspect-square"
          />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <OpenTriangles className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
          <SquaredSquare className="bottom-0 md:bottom-0 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <DotLottieReact
            src="/animations/SunSquare.lottie"
            loop
            autoplay
            className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24 aspect-square"
          />
          <NarrowTriangles className="absolute bottom-0 md:bottom-0 right-24 md:right-48 h-12 md:h-24" colorMain="fill-orange" colorBg="fill-lightGreen" />
          <DotsTriangle className="absolute bottom-0 md:bottom-0 right-36 md:right-72 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-transparent" />
        </div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <Traverse className="absolute bottom-12 md:bottom-24 left-0 md:left-0 h-12 md:h-24" colorMain="fill-orange" colorBg="fill-lightGreen" />
          <BublyCircles className="bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <Arc className="absolute bottom-12 md:bottom-24 left-12 md:left-24 h-8 md:h-16" colorMain="fill-orange" />
        </div>
      </div>
    </section>
  );
};