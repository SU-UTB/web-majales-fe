import { CAN_SHOW_BANDS } from '../../config/constants';
import { bands } from '../../data/bands';
import { SectionContainer } from '../shared/SectionContainer';
import { BandListItem } from './bandlist/BandListItem';
import { BandListItemHeadliner } from './bandlist/BandListItemHeadliner';

export const BandListSection = () => {
  const now = new Date();
  const hasHiddenBands = bands.some((band) => now < band.visibleFrom);

  return (
    <SectionContainer id="kapely" bgColor="violet" className='text-white'>
      <h2 className="text-3xl p-6 md:text-6xl font-medium text-center relative z-20">Na koho se můžete těšit?</h2>
      {CAN_SHOW_BANDS ? (
        <div className="relative z-20">
          {/* Headliners */}
          <div className="space-y-4 md:space-y-8 md:px-4">
            {bands.slice(0, 2).filter(band => now >= band.visibleFrom).map((band) => (
              <BandListItemHeadliner key={band.title} {...band} />
            ))}
          </div>

          {/* Remaining bands */}
          <div className="pt-6 md:px-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {bands.slice(2).filter(band => now >= band.visibleFrom).map((band) => (
              <BandListItem key={band.title} {...band} />
            ))}
          </div>
          {hasHiddenBands && (
            <p className="text-xl md:text-3xl py-12 font-normal text-center relative z-20">Brzy představíme další...</p>
          )}
        </div>
      ) : (
        <p className="text-xl md:text-3xl py-12 font-normal text-center relative z-20">Již brzy prozradíme</p>
      )}
    </SectionContainer>
  );
};
