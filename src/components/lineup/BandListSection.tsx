import { CAN_SHOW_BANDS } from '../../config/constants';
import { bands } from '../../data/bands';
import { SectionContainer } from '../shared/SectionContainer';
import { BandListItem } from './bandlist/BandListItem';

export const BandListSection = () => {
  return (
    <SectionContainer id="kapely" bgColor="lightpink">
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
    </SectionContainer>
  );
};
