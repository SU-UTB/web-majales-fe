import { useEffect, useState } from 'react';
import { MAJALES_DATE } from '../../../config/constants';
import { CountdownValue } from './CountdownValue';

export const Countdown = () => {
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const currDate = new Date();

    const hourDiff = MAJALES_DATE.diff(currDate, 'hour');
    const remainingDays = Math.floor(hourDiff / 24);
    const remainingHours = hourDiff % 24;

    setMonths(MAJALES_DATE.diff(currDate, 'month'));
    setDays(remainingDays);
    setHours(remainingHours);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 md:gap-14 lg:gap-20 xl:gap-32 mx-auto md:mx-0">
      <CountdownValue text="měsíce" value={months} />
      <CountdownValue text="dny" value={days} />
      <CountdownValue text="hodiny" value={hours} />
    </div>
  );
};
