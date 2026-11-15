import { useEffect, useState } from 'react';
import type { CountdownDateValueType } from '../../AppTypes';
import { calculateRemainingTime } from '../../utils';
import { COUNTDOWN_UNITS, getCzechPlural } from '../../config/constants';
import { Container } from '../shared/Container';
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
    <section id="kolik-casu-zbyva" className="bg-yellow relative pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-20">
      {/* Badge right in the top-left corner */}
      <div className="absolute top-0 left-0">
        <span className="inline-block bg-lightGreen text-orange text-sm xs:text-base sm:text-2xl md:text-3xl font-semibold px-4 py-2 xs:px-6 xs:py-2.5 sm:px-8 sm:py-3.5">
          Do Májálesu zbývá
        </span>
      </div>

      <Container>
        {/* Countdown row */}
        <div className="flex items-start justify-center max-w-4xl mx-auto">
          <CountdownValue
            text={getCzechPlural(remainingTime.days, COUNTDOWN_UNITS.DAYS)}
            value={remainingTime.days}
          />
          <span className="font-semibold text-3xl xs:text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-darkPurple leading-none select-none px-1 sm:px-2 md:px-3">
            :
          </span>
          <CountdownValue
            text={getCzechPlural(remainingTime.hours, COUNTDOWN_UNITS.HOURS)}
            value={remainingTime.hours}
          />
          <span className="font-semibold text-3xl xs:text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-darkPurple leading-none select-none px-1 sm:px-2 md:px-3">
            :
          </span>
          <CountdownValue
            text={getCzechPlural(remainingTime.minutes, COUNTDOWN_UNITS.MINUTES)}
            value={remainingTime.minutes}
          />
          <span className="font-semibold text-3xl xs:text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-darkPurple leading-none select-none px-1 sm:px-2 md:px-3">
            :
          </span>
          <CountdownValue
            text={getCzechPlural(remainingTime.seconds, COUNTDOWN_UNITS.SECONDS)}
            value={remainingTime.seconds}
          />
        </div>
      </Container>
    </section>
  );
};
