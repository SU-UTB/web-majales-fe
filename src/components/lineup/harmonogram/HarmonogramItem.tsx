import type { HarmonogramItemType } from '../../../data/harmonogram';

export const HarmonogramItem = ({ band, time }: HarmonogramItemType) => {
  return (
    <div className="flex flex-row items-baseline gap-x-2 sm:gap-x-4 md:gap-x-5 text-darkPurple text-base sm:text-xl lg:text-2xl font-medium leading-tight">
      <span className="whitespace-nowrap tabular-nums w-[100px] sm:w-[130px] lg:w-[145px] shrink-0 font-medium">{time}</span>
      <span className="whitespace-nowrap font-medium">{band}</span>
    </div>
  );
};

