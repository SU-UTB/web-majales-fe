import type { HarmonogramItemType } from '../../../data/harmonogram';
import { HarmonogramItem } from './HarmonogramItem';

type Props = {
  title: string;
  harmonogramItems: HarmonogramItemType[];
};

export const HarmonogramGroup = ({ title, harmonogramItems }: Props) => {
  return (
    <div className="flex flex-col space-y-5">
      <h3 className="text-white text-h2-reversed text-center xs:text-left">{title}</h3>
      <div className="flex-grow">
        <div className="space-y-4 xs:space-y-3">
          {harmonogramItems.map((item) => (
            <HarmonogramItem key={item.band} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
