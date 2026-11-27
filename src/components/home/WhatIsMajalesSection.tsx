import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { CAN_SHOW_HARMONOGRAM, MAJALES_DATE } from '../../config/constants';
import { barumStage, utbTrinityStage } from '../../data/harmonogram';
import { Arc } from '../svg/shapes/Arc';
import { BublyCircles } from '../svg/shapes/BublyCircles';
import { DotsTriangle } from '../svg/shapes/DotsTriangle';
import { Keyboard } from '../svg/shapes/Keyboard';
import { Rays } from '../svg/shapes/Rays';
import { SquaredSquare } from '../svg/shapes/SquaredSquare';
import { TitsWithNipples } from '../svg/shapes/TitsWithNipples';
import { DoubleArrow } from '../svg/shapes/DoubleArrow';

export const WhatIsMajalesSection = () => {
  return (
    <section
      id="co-je-majales"
      className="bg-yellow relative pt-28 pb-28 sm:pt-36 sm:pb-36 md:pt-48 md:pb-48 xl:pt-40 xl:pb-40"
    >
      {/* Badge v levém horním rohu */}
      <div className="absolute top-0 left-12 md:left-24 z-10">
        <span className="inline-flex items-center justify-center h-12 md:h-24 bg-lightGreen text-orange text-xl xs:text-xl sm:text-3xl md:text-5xl font-semibold px-4 xs:px-6 sm:px-8">
          O Majálesu
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 lg:px-28 xl:px-8">
        <div
          className={`grid grid-cols-1 gap-12 lg:gap-16 items-start ${CAN_SHOW_HARMONOGRAM ? 'lg:grid-cols-2' : 'max-w-3xl mx-auto'
            }`}
        >
          {/* Levý sloupec: Textový popis */}
          <div className="space-y-6 text-orange font-sans">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Co je Majáles UTB?
              </h3>
              <p className="text-lg sm:text-xl text-darkPurple leading-relaxed">
                Majáles UTB je unikátní multižánrový open-air festival, který pořádají studenti a který nabízí bohatý program pro všechny věkové kategorie. Je to oslava studentského života a kultury, která vás vtáhne svou energickou atmosférou a pestrou nabídkou aktivit.
              </p>
            </div>

            <div>
              <p className="text-lg sm:text-xl text-darkPurple leading-relaxed">
                Na co se můžete těšit? Především na dvě stage, kde vás čeká živá hudba napříč různými žánry. Pokud si chcete odpočinout, Chill-out zóna vám nabídne klidné místo k relaxaci. Milovníci dobrého jídla si přijdou na své ve Food zóně plné chutných specialit. A to není vše – doprovodný program, ať už v samotný den akce nebo v týdnech před ním, slibuje spoustu zábavy, soutěží a zážitků.
              </p>
            </div>

            <div>
              <p className="text-lg sm:text-xl text-darkPurple leading-relaxed">
                Vyrazte s námi do prvomájového průvodu centrem Zlína a připojte se k oslavám, které vyvrcholí v den Majálesu. Možná si dokonce odnesete královský titul a stanete se součástí historie této události!
              </p>
            </div>

            <div>
              <p className="text-lg sm:text-xl text-darkPurple leading-relaxed">
                Zní to skvěle, že? Tak si nezapomeňte poznamenat datum:{' '}
                <strong>{MAJALES_DATE.toLocaleDateString('cs-CZ').replace(/ /g, '\u00A0')}</strong>. Uvidíme se v parku před Baťovou vilou. Těšíme se na vás!
              </p>
            </div>
          </div>

          {/* Pravý sloupec: Harmonogram (podmíněný) */}
          {CAN_SHOW_HARMONOGRAM && (
            <div id="harmonogram" className="space-y-8 scroll-mt-24 text-darkPurple font-sans">
              {/* Harmonogram Stage A */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-orange mb-4">
                  Harmonogram A stage
                </h3>
                <div className="space-y-2.5">
                  <div className="flex items-baseline gap-4 sm:gap-8">
                    <span className="font-semibold text-lg sm:text-xl w-32 sm:w-36 shrink-0">
                      14:00
                    </span>
                    <span className="text-lg sm:text-xl">
                      Otevření areálu
                    </span>
                  </div>
                  {utbTrinityStage.map((item) => (
                    <div key={item.band} className="flex items-baseline gap-4 sm:gap-8">
                      <span className="font-semibold text-lg sm:text-xl w-32 sm:w-36 shrink-0">
                        {item.time.replace('-', ' – ')}
                      </span>
                      <span className="text-lg sm:text-xl">
                        {item.band}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Harmonogram Stage B */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-orange mb-4">
                  Harmonogram B stage
                </h3>
                <div className="space-y-2.5">
                  {barumStage.map((item) => (
                    <div key={item.band} className="flex items-baseline gap-4 sm:gap-8">
                      <span className="font-semibold text-lg sm:text-xl w-32 sm:w-36 shrink-0">
                        {item.time.replace('-', ' – ')}
                      </span>
                      <span className="text-lg sm:text-xl">
                        {item.band}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <DotLottieReact
            src="/animations/DoubleArrowOrange.json"
            autoplay
            loop
            className="absolute bottom-0 -left-6 h-24 w-24 origin-bottom-left rotate-90 md:-left-12 md:h-48 md:w-48"
          />
          <Arc className="absolute top-12 md:top-24 left-12 md:left-24 h-8 md:h-16 -scale-y-100" colorMain="fill-darkPurple" />
        </div>
      </div>
      
      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <Rays className="absolute top-0 right-0 h-24 md:h-48 -scale-x-100" colorMain="stroke-orange" colorBg="fill-darkPurple" />
          <Keyboard className="absolute top-0 right-12 md:right-24 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <BublyCircles className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <Arc className="absolute bottom-0 md:bottom-0 right-24 md:right-48 h-8 md:h-16 -scale-x-100" colorMain="fill-darkPurple" />
          {/* <TitsWithNipples className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24" colorMain1="fill-lightGreen" colorMain2="fill-darkPurple" colorBg="fill-orange" /> */}
          <DotLottieReact
            src="/animations/TitsWithNipples.json"
            autoplay
            loop
            className="absolute bottom-12 md:bottom-24 right-0 h-12 w-12 md:right-0 md:h-24 md:w-24"
          />
        </div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <DotLottieReact
            src="/animations/SquaredSquare.json"
            autoplay
            loop
            className="h-12 w-12 md:h-24 md:w-24 shrink-0"
          />
          <DotsTriangle className="absolute bottom-0 md:bottom-0 left-12 md:left-24 h-12 md:h-24 rotate-90" colorMain="fill-orange" colorBg="fill-transparent" />
        </div>
      </div>
    </section>
  );
};
