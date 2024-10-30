import { useEffect, useState } from 'react';
import { MAJALES_DATE } from '../../config/constants';
import { calculateRemainingTime } from '../../utils';
import { SectionContainer } from '../shared/SectionContainer';
import { CountdownValue } from './countdown/CountdownValue';

export const CountdownSection = () => {
  const [remainingDate, setRemainingDate] = useState(calculateRemainingTime(new Date(MAJALES_DATE)));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingDate(calculateRemainingTime(new Date(MAJALES_DATE)));
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionContainer id="kolik-casu-zbyva" bgColor="blue">
      <div className="flex flex-wrap justify-between items-center gap-8 text-beige">
        <h2 className="text-h2">Do Majálesu UTB 2025 zbývá</h2>
        <div className="grid grid-cols-3 gap-8 md:gap-14 lg:gap-20 xl:gap-32 mx-auto md:mx-0">
          <CountdownValue text="měsíce" value={remainingDate.months} />
          <CountdownValue text="dny" value={remainingDate.days} />
          <CountdownValue text="hodiny" value={remainingDate.hours} />
        </div>
      </div>
    </SectionContainer>
  );
};
