import { partyStage, utbTrinityStage } from '../../data/harmonogram';
import { SectionContainer } from '../shared/SectionContainer';
import { AsteriskSquare } from '../svg/elements/AsteriskSquare';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { HalfTransparentRedTriangle2X } from '../svg/elements/HalfTransparentRedTriangle2X';
import { TextRectangle } from '../svg/elements/TextRectangle';
import { Triangle } from '../svg/elements/Triangle';
import { HarmonogramGroup } from './harmonogram/HarmonogramGroup';

export const HarmonogramSection = () => {
  return (
    <SectionContainer
      id="harmonogram"
      bgColor='orange'
    >
      <div className="my-12 py-4 md:py-12 px-4 lg:px-20 lg:py-10 max-w-max mx-auto grid grid-cols-1 xl:grid-cols-2 gap-14 items-start">
        <HarmonogramGroup title="UTB a Trinity bank stage" harmonogramItems={utbTrinityStage} />
        <HarmonogramGroup title="Párty stage" harmonogramItems={partyStage} />
      </div>


      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <TextRectangle className="absolute top-0 md:top-0 left-0 md:left-0 h-12 md:h-24 w-48 md:w-96 overflow-y-hidden" color='#1F2041'>
            <h2 className="text-h2-reversed-mobile md:text-h2-reversed text-white">
              Harmonogram
            </h2>
          </TextRectangle>
          <AsteriskSquare className="absolute top-0 md:top-0 left-48 md:left-96 h-12 md:h-24" color='#FFE2DE' asteriskColor='#FF785A'/>

          <CheckerSquare className="absolute top-0 md:top-0 left-60 md:left-120 h-12 md:h-24" color1='#000000' color2='#FFFFFF' />           
          <Triangle className="absolute top-0 md:top-0 left-72 md:left-144 h-12 md:h-24" color='#F49183' />
        </div>
      </div>
      {/* BOTTOM RIGHT */}
        <div className="absolute bottom-0 right-0">
          <div className="relative">
            <HalfTransparentRedTriangle2X className="h-32 md:h-60" color='#FFFFFF' />
          </div>
        </div>
    </SectionContainer>
  );
};
