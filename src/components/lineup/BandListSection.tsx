import { CAN_SHOW_BANDS } from '../../config/constants';
import { bands } from '../../data/bands';
import { SectionContainer } from '../shared/SectionContainer';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { BigTriangle } from '../svg/elements/BigTriangle';
import { CheckerRectanglePortrait } from '../svg/elements/CheckerRectanglePortrait';
import { Triangle } from '../svg/elements/hero/Triangle';
import { BandListItem } from './bandlist/BandListItem';

export const BandListSection = () => {
  return (
    <SectionContainer id="kapely" bgColor="pink">
      <h2 className="text-h2">Na koho se můžete těšit?</h2>
      {CAN_SHOW_BANDS ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 place-items-center py-12">
          {bands.map((band) => (
            <BandListItem key={band.title} {...band} />
          ))}
        </div>
      ) : (
        <p className="text-p-big">Již brzy prozradíme</p>
      )}
      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0 z-10">
        <div className="relative">
          <Triangle className="absolute -top-12 md:-top-24 right-0 md:right-0 h-12 md:h-24 rotate-180" color='#FFFFFF' />
          <CheckerRectanglePortrait className="absolute top-0 md:top-0 right-0 md:right-0 w-12 md:w-24" color1='#FFE2DE' color2='#E7548A' />
          <ArrowSquare className="absolute top-28 md:top-56 right-0 md:right-0 h-12 md:h-24" color='#FFFFFF'/>
          <Triangle className="absolute top-40 md:top-80 right-0 md:right-0 h-12 md:h-24 rotate-90" color='#FF785A' />
        </div>
      </div>
      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <BigTriangle className="absolute -top-24 md:-top-48 left-0 md:left-0 h-24 md:h-48 rotate-180" color='#FFFFFF'/>
        </div>
      </div>
    </SectionContainer>
  );
};
