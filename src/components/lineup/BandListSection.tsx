import { SectionContainer } from '../shared/SectionContainer';

export const BandListSection = () => {
  return (
    <SectionContainer id="kapely" bgColor="purple">
      <h2 className="text-h2">Na koho se můžete těšit?</h2>
      {/* {bands.map((band) => (
          <BandListItem key={band} {...band} />
        ))} */}
    </SectionContainer>
  );
};
