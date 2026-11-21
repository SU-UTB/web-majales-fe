import type { HarmonogramItemType } from '../../../data/harmonogram';
import { HarmonogramItem } from './HarmonogramItem';

type Props = {
  title: string;
  harmonogramItems: HarmonogramItemType[];
  className?: string;
};

export const HarmonogramGroup = ({ title, harmonogramItems, className = '' }: Props) => {
  return (
    <div className={`flex flex-col space-y-4 sm:space-y-6 ${className}`.trim()}>
      <h3 className="text-orange text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {harmonogramItems.map((item) => (
          <HarmonogramItem key={`${item.time}-${item.band}`} {...item} />
        ))}
      </div>
    </div>
  );
};

