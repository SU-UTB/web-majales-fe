import { MAJALES_DATE } from '../../config/constants';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { DateRectangle } from '../svg/elements/DateRectangle';
import { HalfCircles } from '../svg/elements/HalfCircles';
import { HalfTransparentRedTriangle2X } from '../svg/elements/HalfTransparentRedTriangle2X';
import { Squares45 } from '../svg/elements/Squares45';
import { SquareWithCircle } from '../svg/elements/SquareWithCircle';
import { Star } from '../svg/elements/Star';
import { TextRectangle } from '../svg/elements/TextRectangle';
import { Triangle } from '../svg/elements/Triangle';

export const WhatIsMajalesSection = () => {
  return (
    <section
      id="co-je-majales"
      className="pt-12 pb-24 md:pb-32 xl:py-24 bg-lightPink relative overflow-hidden"
    >
      {/* Hlavní kontejner pro text */}
      <div className="pt-24 md:pt-32 px-8 md:px-24 lg:px-36">
        {/* Na mobilu jeden sloupec (default), 
            od středních obrazovek (md) dva sloupce, 
            mezera mezi sloupci (gap-12) 
        */}
        <div className="md:columns-2 gap-12 space-y-4 md:space-y-0 text-left leading-relaxed">
          <p className="mb-4">
            Majáles UTB je unikátní multižánrový open-air festival, který pořádají studenti a který nabízí bohatý program pro všechny věkové kategorie. Je to oslava studentského života a kultury, která vás vtáhne svou energickou atmosférou a pestrou nabídkou aktivit.
          </p><br/>
          <p className="mb-4">
            Na co se můžete těšit? Především na dvě stage, kde vás čeká živá hudba napříč různými žánry. Pokud si chcete odpočinout, Chill-out zóna vám nabídne klidné místo k relaxaci. Milovníci dobrého jídla si přijdou na své ve Food zóně plné chutných specialit. A to není vše – doprovodný program, ať už v samotný den akce nebo v týdnech před ním, slibuje spoustu zábavy, soutěží a zážitků.
          </p><br/>
          <p className="mb-4">
            Vyrazte s námi do prvomájového průvodu centrem Zlína a připojte se k oslavám, které vyvrcholí v den Majálesu. Možná si dokonce odnesete královský titul a stanete se součástí historie této události!
          </p><br/>
          <p>
            Zní to skvěle, že? Tak si nezapomeňte poznamenat datum: <strong>{MAJALES_DATE.toLocaleDateString('cs-CZ')}</strong>. Uvidíme se v parku před Baťovou vilou. Těšíme se na vás!
          </p>
        </div>
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <Squares45 className="h-12 md:h-24" colorMain='fill-beige' colorSecondary='fill-violet' />
          <SquareWithCircle className="absolute top-12 md:top-24 h-12 md:h-24" colorBgLeft='fill-violet' colorBgRight='fill-violet' colorCirLeft='fill-beige' colorCirRight='fill-pink' />
          <Triangle className="absolute top-24 md:top-48 h-12 md:h-24" colorMain='fill-pink' />
          <DateRectangle className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24 w-52 md:w-96 overflow-y-hidden" colorMain='fill-violet'>
            <h2 className="text-xl md:text-4xl font-medium text-white">
              Co je Majáles UTB?
            </h2>
          </DateRectangle>
          <Squares45 className="absolute top-0 md:top-0 left-64 md:left-120 h-12 md:h-24" colorMain='fill-beige' colorSecondary='fill-violet' />
          <Triangle className="absolute top-0 md:top-0 left-76 md:left-144 h-12 md:h-24" colorMain='fill-beige' />
        </div>
      </div>
      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <Star className="h-12 md:h-24" colorMain='fill-violet' colorSecondary='fill-pink' />
          <Triangle className="absolute rotate-180 bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24" colorMain='fill-violet' />
        </div>
      </div>
    </section>
  );
};