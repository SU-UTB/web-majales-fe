import { bands } from '../../data/bands';
import { SectionContainer } from '../shared/SectionContainer';
import { BandListItem } from './bandlist/BandListItem';

export const BandListSection = () => {
  return (
    <SectionContainer id="kapely" bgColor="purple">
      <h2 className="text-h2">Na koho se můžete těšit?</h2>
      <p className="text-p-big">Již brzy prozradíme</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {bands.map((band) => (
          <BandListItem key={band.title} {...band} />
        ))}
      </div>
    </SectionContainer>
  );
};
