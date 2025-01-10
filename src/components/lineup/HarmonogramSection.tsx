import { partyStage, utbTrinityStage } from '../../data/harmonogram';
import { SectionContainer } from '../shared/SectionContainer';
import { HarmonogramGroup } from './harmonogram/HarmonogramGroup';

export const HarmonogramSection = () => {
  return (
    <SectionContainer
      id="harmonogram"
      className="lg:bg-[url('/assets/img/harmonogram-right.webp')] bg-[position:right]"
    >
      <h2 className="text-h2-reversed text-pink mb-8">Harmonogram</h2>
      <div className="bg-blue py-4 px-8 lg:px-20 lg:py-10 max-w-max space-y-10">
        <HarmonogramGroup title="UTB a Trinity bank stage" harmonogramItems={utbTrinityStage} />
        <HarmonogramGroup title="Párty stage" harmonogramItems={partyStage} />
      </div>
    </SectionContainer>
  );
};
