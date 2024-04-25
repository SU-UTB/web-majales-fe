import type { HarmonogramItemType } from '../../../data/harmonogram';

export const HarmonogramItem = ({ band, time }: HarmonogramItemType) => {
  return (
    <div className="flex items-center justify-center xs:justify-start xs:space-x-8 text-beige text-p sm:text-p-big flex-wrap flex-col xs:flex-row">
      <span className="xs:text-left text-center min-w-[120px]">{time}</span>
      <span>{band}</span>
    </div>
  );
};
