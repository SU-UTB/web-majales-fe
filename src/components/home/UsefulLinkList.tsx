import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';
import { questions } from '../../data/questions';
import { Arc } from '../svg/shapes/Arc';
import { SunSquare } from '../svg/shapes/SunSquare';
import { BublyCircles } from '../svg/shapes/BublyCircles';
import { Tongue } from '../svg/shapes/Tongue';
import { TitsWithNipples } from '../svg/shapes/TitsWithNipples';
import { SquareWithS } from '../svg/shapes/SquareWithS';
import { SquareWithSemiArcs } from '../svg/shapes/SquareWithSemiArcs';
import { AskewStrip } from '../svg/shapes/AskewStrip';
import { DotsSquare } from '../svg/shapes/DotsSquare';
import { SquareWithHalfCircles } from '../svg/shapes/SquareWithHalfCircles';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { SquaredSquare } from '../svg/shapes/SquaredSquare';
import { DotsTriangle } from '../svg/shapes/DotsTriangle';

export const UsefulLinkList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default 0 (1st question) open as in the design, or null

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="otazky-a-odpovedi"
      className="bg-yellow relative pt-24 pb-48 sm:pt-36 sm:pb-56 md:pt-48 md:pb-60 lg:pt-44 lg:pb-60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 relative z-10 pt-4 md:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Levá část: Lottie animace obličeje (zatím DotsSquare lottie placeholder) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 flex items-center justify-center">
              <DotLottieReact
                src="/animations/lada_dark_purple.json"
                loop
                autoplay
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Pravá část: Accordion Q&A list */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex flex-col pr-12 xs:pr-24 sm:pr-24 md:pr-48 lg:pr-0">
              {questions.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border-b border-lightGreen last:border-b-0 py-4 md:py-5 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="w-full flex items-start gap-3 sm:gap-4 text-left group cursor-pointer focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      {/* Plus / Křížek ikona s plynulou rotací */}
                      <span className="shrink-0 mt-0.5 sm:mt-1 flex items-center justify-center text-darkPurple">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45' : 'rotate-0'
                            }`}
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </span>

                      {/* Otázka */}
                      <span className="font-sans font-semibold text-xl sm:text-2xl md:text-[26px] leading-snug text-orange group-hover:opacity-90 transition-opacity">
                        {item.question}
                      </span>
                    </button>

                    {/* Odpověď - animované otevření/zavření */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen
                          ? 'grid-rows-[1fr] opacity-100 mt-3 md:mt-4'
                          : 'grid-rows-[0fr] opacity-0'
                        }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-8 sm:pl-10 text-darkPurple text-base sm:text-lg md:text-xl font-sans leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          {/* Badge v levém horním rohu */}
          <div className="absolute top-0 left-0 md:left-0 z-10">
            <span className="inline-flex items-center justify-center h-12 md:h-24 bg-lightGreen text-orange text-xl xs:text-xl sm:text-3xl md:text-5xl font-semibold px-4 xs:px-6 sm:px-8 whitespace-nowrap">
              Nejčastěji se nás ptáte
            </span>
          </div>
          <BublyCircles className="absolute top-12 md:top-24 left-0 md:left-0 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          {/* <Tongue className="absolute top-12 md:top-24 left-24 md:left-48 h-24 md:h-48" colorMain1="stroke-orange" colorMain2="fill-orange" colorMain3="fill-lightGreen" colorBg="fill-darkPurple" /> */}
        </div>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <SquareWithS className="absolute top-0 md:top-0 right-0 md:right-0 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <DotLottieReact
            src="/animations/TitsWithNipples.json"
            autoplay
            loop
            className="absolute top-0 right-12 h-12 w-12 md:right-24 md:h-24 md:w-24"
          />
          <SquareWithSemiArcs className="absolute top-12 md:top-24 right-0 md:right-0 h-12 md:h-24 -rotate-90" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
        </div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <AskewStrip className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24 -scale-y-100" colorMain="fill-darkPurple" colorBg="fill-orange" />
          {/* <DotsSquare className="absolute bottom-12 md:bottom-24 left-0 md:left-0 h-12 md:h-24" colorMain="fill-orange" colorBg="fill-lightGreen" /> */}
          <DotLottieReact
            src="/animations/DotsSquare-green-orange.json"
            loop
            autoplay
            className="absolute bottom-12 md:bottom-24 left-0 md:left-0 h-12 md:h-24 aspect-square"
          />
          {/* <SquareWithHalfCircles className="absolute bottom-0 md:bottom-0 left-12 md:left-24 h-12 md:h-24" colorMain="fill-lightGreen" colorBg="fill-orange" /> */}
          <DotLottieReact
            src="/animations/RectWithCircles.json"
            loop
            autoplay
            className="absolute -bottom-6 md:-bottom-12 left-12 md:left-24 h-24 md:h-48 aspect-square"
          />
          <Arc className="absolute bottom-12 md:bottom-24 left-12 md:left-24 h-8 md:h-16" colorMain="fill-lightGreen" />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Zpět na začátek stránky"
            className="absolute bottom-0 right-0 h-24 w-12 md:h-48 md:w-24 z-10 cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-orange"
          >
            <DotLottieReact
              src="/animations/DoubleArrow-purple-orange.json"
              autoplay
              loop
              className="absolute bottom-0 -right-6 h-24 w-24 -rotate-90 md:-right-12 md:h-48 md:w-48 pointer-events-none"
            />
          </button>
          {/* <SunSquare className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24" colorMain="stroke-lightGreen" colorBg="fill-darkPurple" /> */}
          <DotLottieReact
            src="/animations/SunSquare-darkPurple.json"
            loop
            autoplay
            className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24 aspect-square"
          />
          {/* <SquaredSquare className="absolute bottom-0 md:bottom-0 right-24 md:right-48 h-12 md:h-24" colorMain="fill-orange" colorBg="fill-lightGreen" /> */}
          <DotLottieReact
            src="/animations/SquaredSquare.json"
            autoplay
            loop
            className="absolute bottom-0 md:bottom-0 right-24 md:right-48 h-12 md:h-24 aspect-square"
          />
          <DotsTriangle className="absolute bottom-12 md:bottom-24 right-12 md:right-24 h-12 md:h-24" colorMain="fill-orange" colorBg="fill-transparent" />
          <div className="absolute bottom-24 md:bottom-48 right-0 md:right-0 h-12 w-12 md:h-24 md:w-24 bg-lightGreen" />
          <Arc className="absolute bottom-28 md:bottom-56 right-0 md:right-0 h-8 md:h-16 rotate-180" colorMain="fill-orange" />
          <Arc className="absolute bottom-36 md:bottom-72 right-0 md:right-0 h-8 md:h-16 -rotate-90" colorMain="fill-lightGreen" />
        </div>
      </div>
    </section>
  );
};
