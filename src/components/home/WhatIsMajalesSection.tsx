import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { HalfTransparentRedTriangle2X } from '../svg/elements/HalfTransparentRedTriangle2X';
import { TextRectangle } from '../svg/elements/TextRectangle';
import { Triangle } from '../svg/elements/Triangle';

export const WhatIsMajalesSection = () => {
  return (
    <section
      id="co-je-majales"
      className="pt-12 pb-24 md:pb-32 xl:py-24 bg-no-repeat relative"
    >
      <div className="flex flex-col items-center space-y-6 justify-center text-center pt-12 md:pt-20 px-16 md:px-36">
        <p className="w-full text-left">
          Majáles UTB je unikátní multižánrový open-air festival,
          který pořádají studenti a který nabízí bohatý program pro všechny věkové kategorie.
          Je to oslava studentského života a kultury, která vás vtáhne svou
          energickou atmosférou a pestrou nabídkou aktivit.
        </p>
        <p className="w-full text-left">
          Na co se můžete těšit? Především na dvě stage, kde vás čeká živá hudba napříč různými žánry.
          Pokud si chcete odpočinout, Chill-out zóna vám nabídne klidné místo k relaxaci.
          Milovníci dobrého jídla si přijdou na své ve Food zóně plné chutných specialit.
          A to není vše – doprovodný program, ať už v samotný den akce nebo v týdnech před ním,
          slibuje spoustu zábavy, soutěží a zážitků.
        </p>
        <p className="w-full text-left">
          Vyrazte s námi do prvomájového průvodu centrem Zlína a připojte se k oslavám,
          které vyvrcholí v den Majálesu. Možná si dokonce odnesete královský titul a stanete se součástí
          historie této události!
        </p>
        <p className="w-full text-left">
          Zní to skvěle, že? Tak si nezapomeňte poznamenat datum: 2. května. Uvidíme se v parku před Baťovou vilou. Těšíme se na vás!
        </p>
      </div>
      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <ArrowSquare className="h-12 md:h-24 -rotate-90" color='#FF785A' />
          <CheckerSquare className="absolute top-12 md:top-24 h-12 md:h-24" color1='#1F2041' color2='#FFFFFF' />
          <Triangle className="absolute top-24 md:top-48 h-12 md:h-24" color='#1F2041' />
          <TextRectangle className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24 w-52 md:w-96 overflow-y-hidden" color='#6459FD'>
            <h2 className="text-h2-reversed-mobile md:text-h2-reversed text-white">
              Co je Majáles UTB?
            </h2>
          </TextRectangle>
          <Triangle className="absolute top-0 md:top-0 left-64 md:left-120 h-12 md:h-24" color='#FFFFFF' />
        </div>
      </div>
      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <HalfTransparentRedTriangle2X className="h-24 md:h-48" color='#E7548A' />
        </div>
      </div>
    </section>
  );
};