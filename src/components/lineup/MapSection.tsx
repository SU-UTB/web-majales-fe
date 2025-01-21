import { SectionContainer } from '../shared/SectionContainer';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { Triangle } from '../svg/elements/hero/Triangle';
import { TextRectangle } from '../svg/elements/TextRectangle';

import { MajalesAreaMap } from '../svg/MajalesAreaMap';

export const MapSection = () => {
  return (
    <SectionContainer id="mapa" bgColor="lightpink">
      <div className="pt-12 md:pt-20 px-12 md:px-16 flex justify-center items-center h-full">
        <MajalesAreaMap width={600} />
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <Triangle className="absolute top-24 md:top-48 left-0 md:left-0 h-12 md:h-24" color='#E7548A' />
          <CheckerSquare className="absolute top-12 md:top-24 left-0 md:left-0 h-12 md:h-24" />
          <TextRectangle className="absolute top-0 md:top-0 left-0 md:left-0 h-12 md:h-24 w-48 md:w-96 overflow-y-hidden" color='#6459FD'>
            <h2 className="text-h2-reversed-mobile md:text-h2-reversed text-white">
              Mapa areálu
            </h2>
          </TextRectangle>           
          <Triangle className="absolute top-0 md:top-0 left-48 md:left-96 h-12 md:h-24" color='#FFFFFF' />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <Triangle className="absolute -top-12 md:-top-24 right-0 md:right-0 h-12 md:h-24 rotate-180" color='#1F2041' />
        </div>
      </div>
    </SectionContainer>
  );
};
