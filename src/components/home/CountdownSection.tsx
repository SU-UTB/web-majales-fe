import { useEffect, useState } from 'react';
import type { CountdownDateValueType } from '../../AppTypes';
import { calculateRemainingTime } from '../../utils';
import { SectionContainer } from '../shared/SectionContainer';
import { CountdownValue } from './countdown/CountdownValue';

export const CountdownSection = ({ targetDate }: { targetDate: Date }) => {
  const [remainingTime, setRemainingTime] = useState<CountdownDateValueType>(calculateRemainingTime(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTime = calculateRemainingTime(targetDate);
      setRemainingTime(updatedTime);
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup on unmount
    };
  }, [targetDate]);

  return (
    <SectionContainer id="kolik-casu-zbyva" bgColor="pink">
      <div className="flex flex-wrap justify-between items-center gap-8 text-beige">
        <h2 className="text-h2">Do Majálesu UTB 2025 zbývá</h2>
        <div className="grid grid-cols-3 gap-8 md:gap-14 lg:gap-20 xl:gap-32 mx-auto md:mx-0">
          <CountdownValue text="měsíce" value={remainingTime.months} />
          <CountdownValue text="dny" value={remainingTime.days} />
          <CountdownValue text="hodiny" value={remainingTime.hours} />
        </div>
      </div>
    </SectionContainer>
  );
};
