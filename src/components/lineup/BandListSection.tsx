import { CAN_SHOW_BANDS } from '../../config/constants';
import { bands } from '../../data/bands';
import { SectionContainer } from '../shared/SectionContainer';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { BigTriangle } from '../svg/elements/BigTriangle';
import { Triangle } from '../svg/elements/Triangle';
import { BandListItem } from './bandlist/BandListItem';
import { BandListItemHeadliner } from './bandlist/BandListItemHeadliner';

export const BandListSection = () => {
  return (
    <SectionContainer id="kapely" bgColor="pink" className='text-white'>
      <h2 className="text-h2-mobile md:text-h2 relative z-20">Na koho se můžete těšit?</h2>
      {CAN_SHOW_BANDS ? (
      <div className="relative z-20">
        {/* Headliners */}
        <div className="space-y-4 md:space-y-8 md:px-4">
          {bands.slice(0, 2).map((band) => (
            <BandListItemHeadliner key={band.title} {...band} />
          ))}
        </div>

        {/* Remaining bands */}
        <div className="pt-6 md:px-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {bands.slice(2).map((band) => (
            <BandListItem key={band.title} {...band} />
          ))}
        </div>
      </div>
    ) : (
      <p className="text-p-big py-12 relative z-20">Již brzy prozradíme</p>
    )}

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          {/* //byla kolize s interprety
          <Triangle
            className="absolute -top-12 md:-top-24 right-0 md:right-0 h-12 md:h-24 rotate-180"
            color="#FFFFFF"
          />
          <CheckerSquare
            className="absolute top-0 md:top-0 right-0 md:right-0 h-12 md:h-24"
            color1="#FFE2DE"
            color2="#E7548A"
          />
          <CheckerSquare
            className="absolute top-12 md:top-24 right-0 md:right-0 h-12 md:h-24"
            color1="#E7548A"
            color2="#FFE2DE"
          /> 
          <ArrowSquare className="absolute top-24 md:top-48 right-0 md:right-0 h-12 md:h-24" color="#FFFFFF" />
          <Triangle className="absolute top-36 md:top-72 right-0 md:right-0 h-12 md:h-24 rotate-90" color="#FF785A" />
          */}
          <ArrowSquare className="absolute top-0 md:top-0 right-0 md:right-0 h-12 md:h-24" color="#FFFFFF" />
          <Triangle className="absolute top-12 md:top-24 right-0 md:right-0 h-12 md:h-24 rotate-90" color="#FF785A" />
        </div>
      </div>
      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <BigTriangle
            className="absolute -top-24 md:-top-48 left-0 md:left-0 h-24 md:h-48 rotate-180"
            color="#FFFFFF"
          />
        </div>
      </div>
    </SectionContainer>
  );
};
