import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AskewStrip } from "../svg/shapes/AskewStrip";
import { DotsTriangle } from "../svg/shapes/DotsTriangle";
import { NarrowTriangles } from "../svg/shapes/NarrowTriangles";
import { SunSquare } from "../svg/shapes/SunSquare";
import { SquareWithS } from "../svg/shapes/SquareWithS";
import { SquareWithSemiArcs } from "../svg/shapes/SquareWithSemiArcs";
import { Arc } from "../svg/shapes/Arc";
import { TitsWithNipples } from "../svg/shapes/TitsWithNipples";
import { DotsSquare } from "../svg/shapes/DotsSquare";
import { A } from "../../../dist/_astro/constants.dc3e9ac7";
import { Rays } from "../svg/shapes/Rays";
import { OpenTriangles } from "../svg/shapes/OpenTriangles";

export const Map = () => {
  return (
    <section id="kde-nas-najdete" className="bg-yellow relative pt-28 pb-28 sm:pt-36 sm:pb-36 md:pt-48 md:pb-48 xl:pt-40 xl:pb-40">
      <div className="bg-yellow w-full">
        <div className="w-full xl:w-4/5 mx-auto px-4 py-8 xl:py-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.522400055535!2d17.655902676379913!3d49.228584071384745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47130d008c519ab7%3A0x985e4cfd1e8349ae!2sPark%20u%20Ba%C5%A5ovy%20vily!5e0!3m2!1scs!2scz!4v1765310263503!5m2!1scs!2scz"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl shadow-lg z-10"
            title="Kde nás najdete - mapa"
          />
        </div>
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <SquareWithS className="absolute top-0 md:top-0 left-0 md:left-0 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <SquareWithSemiArcs className="absolute top-12 md:top-24 left-0 md:left-0 h-12 md:h-24 -rotate-90" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <Arc className="absolute top-12 md:top-24 left-12 md:left-24 h-8 md:h-16 rotate-90" colorMain="fill-orange" colorBg="fill-transparent" />
          <TitsWithNipples className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24" colorMain1="fill-orange" colorMain2="fill-darkPurple" colorBg="fill-lightGreen" />
          <DotsSquare className="absolute top-0 md:top-0 left-24 md:left-48 h-12 md:h-24" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
          {/* <DotLottieReact
            src="/animations/DotsSquare.lottie"
            loop
            autoplay
            className="absolute top-12 md:top-24 left-0 md:left-0 h-12 md:h-24 aspect-square"
          /> */}
        </div>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <div className="absolute top-0 right-12 md:right-24 flex items-start">
            <AskewStrip className="h-12 md:h-24" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
            <span className="inline-flex items-center justify-center h-12 md:h-24 bg-lightGreen text-orange text-xl xs:text-xl sm:text-3xl md:text-5xl font-semibold px-4 xs:px-6 sm:px-8">
              Mapa
            </span>
          </div>
          <NarrowTriangles className="absolute top-0 md:top-0 right-0 md:right-0 h-12 md:h-24 rotate-90" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <DotsTriangle className="absolute top-12 md:top-24 right-12 md:right-24 h-12 md:h-24 -rotate-90" colorMain="fill-orange" colorBg="fill-transparent" />
          {/* <DotLottieReact
            src="/animations/SunSquare.lottie"
            loop
            autoplay
            className="absolute top-12 md:top-24 right-0 md:right-0 h-12 md:h-24 aspect-square"
          /> */}
          <SunSquare className="absolute top-12 md:top-24 right-0 md:right-0 h-12 md:h-24" colorMain="stroke-lightGreen" colorBg="fill-darkPurple" />
        </div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <SunSquare className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24" colorMain="stroke-orange" colorBg="fill-lightGreen" />
          {/* <DotLottieReact
            src="/animations/SunSquare.lottie"
            loop
            autoplay
            className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24 aspect-square"
          /> */}
          <div className="absolute bottom-0 md:bottom-0 left-12 md:left-24 h-12 w-12 md:h-24 md:w-24 bg-darkPurple" />
          <Arc className="absolute bottom-0 md:bottom-0 left-16 md:left-32 h-8 md:h-16 -rotate-90" colorMain="fill-lightGreen" />
          <div className="absolute bottom-0 md:bottom-0 left-24 md:left-48 h-12 w-12 md:h-24 md:w-24 bg-lightGreen" />
          <Arc className="absolute bottom-0 md:bottom-0 left-24 md:left-48 h-8 md:h-16" colorMain="fill-darkPurple" />
          <DotsTriangle className="absolute bottom-0 md:bottom-0 left-32 md:left-72 h-12 md:h-24 rotate-90" colorMain="fill-orange" colorBg="fill-transparent" />
          <Rays className="absolute bottom-12 md:bottom-24 left-0 md:left-0 h-24 md:h-48 -scale-y-100" colorMain="stroke-orange" colorBg="fill-darkPurple" />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <OpenTriangles className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
          <OpenTriangles className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
        </div>
      </div>
    </section>
  );
};
