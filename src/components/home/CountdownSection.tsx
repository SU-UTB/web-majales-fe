import type { CountdownDateValueType } from '../../AppTypes';
import { SectionContainer } from '../shared/SectionContainer';
import { CountdownValue } from './countdown/CountdownValue';

export const CountdownSection = ({ months, days, hours }: CountdownDateValueType) => {
  return (
    <SectionContainer id="kolik-casu-zbyva" bgColor="blue">
      <div className="flex flex-wrap justify-between items-center gap-8 text-beige">
        <h2 className="text-h2">Do Majálesu UTB 2024 zbývá</h2>
        <div className="grid grid-cols-3 gap-8 md:gap-14 lg:gap-20 xl:gap-32 mx-auto md:mx-0">
          <CountdownValue text="měsíce" value={months} />
          <CountdownValue text="dny" value={days} />
          <CountdownValue text="hodiny" value={hours} />
        </div>
      </div>
    </SectionContainer>
  );
};
