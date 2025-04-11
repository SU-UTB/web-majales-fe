import { SectionContainer } from '../shared/SectionContainer';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { TextRectangle } from '../svg/elements/TextRectangle';
import { Triangle } from '../svg/elements/Triangle';
import mapa from '../../assets/img/mapa.webp?url';

import { MajalesAreaMap } from '../svg/MajalesAreaMap';

export const MapSection = () => {
  return (
    <SectionContainer id="mapa" bgColor="lightpink">
      <div className="pt-16 md:pt-20 px-4 md:px-16 flex justify-center items-center">
        <div className="w-full max-w-[600px]">
          <img src={mapa} alt="Majáles Area Map" className="w-full h-auto" />
        </div>
      </div>
      {/* <div className="pt-12 md:pt-20 px-12 md:px-16 flex justify-center items-center h-full">
        <MajalesAreaMap width={600} />
      </div> */}

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <Triangle className="absolute top-24 md:top-48 left-0 md:left-0 h-12 md:h-24" color='#E7548A' />
          <CheckerSquare className="absolute top-12 md:top-24 left-0 md:left-0 h-12 md:h-24" color1='#000000' color2='#FFFFFF' />
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
