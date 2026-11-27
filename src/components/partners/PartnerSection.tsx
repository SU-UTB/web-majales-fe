import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { visiblePartnerCategories } from '../../data/partners';
import { SectionContainer } from '../shared/SectionContainer';
import { AskewStrip } from '../svg/shapes/AskewStrip';
import { DotsTriangle } from '../svg/shapes/DotsTriangle';
import { OpenTriangles } from '../svg/shapes/OpenTriangles';
import { TitsWithNipples } from '../svg/shapes/TitsWithNipples';
import { PartnerList } from './PartnerList';

export const PartnerSection = () => {
  return (
    <SectionContainer
      id="partneri"
      bgColor="bg-yellow"
      className="min-h-[60vh] flex flex-col justify-center py-20 sm:py-28 md:py-36 relative overflow-hidden"
    >
      {/* Hlavní obsah sekce s partnery */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 pt-24 sm:pt-28 md:pt-32 pb-6 flex flex-col items-center space-y-12 sm:space-y-16 md:space-y-20">
        {visiblePartnerCategories.map((category) => (
          <PartnerList
            key={category.id}
            header={category.categoryTitle}
            partnerList={category.partners}
            size={category.logoSize}
          />
        ))}
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <OpenTriangles className="absolute top-0 md:top-0 left-0 md:left-0 h-12 md:h-24 rotate-90" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
          <OpenTriangles className="absolute top-12 md:top-24 left-0 md:left-0 h-12 md:h-24 rotate-90" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
          {/* <TitsWithNipples className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24" colorMain1="fill-orange" colorMain2="fill-darkPurple" colorBg="fill-lightGreen" /> */}
          <DotLottieReact
            src="/animations/TitsWithNipples-lightGreen.json"
            loop
            autoplay
            className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24 aspect-square"
          />
          {/* Poslední prvek skryjeme na menších obrazovkách (do lg), aby nepřekážel dlouhému textu */}
          <DotsTriangle className="hidden lg:block absolute top-0 left-48 h-24 rotate-180" colorMain="fill-lightGreen" colorBg="fill-transparent" />
        </div>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0 z-20">
        <div className="relative">
          {/* Badge v pravém horním rohu - vždy na 1 řádek (text-nowrap) s responzivním fontem přizpůsobeným šířce obrazovky */}
          <div className="absolute top-0 right-0 flex justify-end">
            <span className="inline-flex items-center justify-center h-12 md:h-24 bg-lightGreen text-orange text-[13px] xs:text-[15px] sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[42px] 2xl:text-5xl font-semibold px-3 xs:px-4 sm:px-6 md:px-8 text-nowrap">
              Partneři podporující studentský Majáles UTB
            </span>
          </div>
          <AskewStrip className="absolute top-12 md:top-24 right-0 md:right-0 h-12 md:h-24 -scale-y-100 rotate-90" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
          <AskewStrip className="absolute top-12 md:top-24 right-12 md:right-24 h-12 md:h-24 -scale-y-100 rotate-90" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
          <DotsTriangle className="absolute top-12 md:top-24 right-24 md:right-48 h-12 md:h-24 -rotate-90" colorMain="fill-lightGreen" colorBg="fill-transparent" />
        </div>
      </div>
    </SectionContainer>
  );
};
