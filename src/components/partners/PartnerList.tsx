import type { PartnerType } from '../../AppTypes';
import { SinglePartnerItem } from './SinglePartnerItem';

type Props = {
  header: string;
  partnerList: PartnerType[];
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

export const PartnerList = ({ header, partnerList, size = 'md' }: Props) => {
  if (!partnerList || partnerList.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-darkPurple text-2xl sm:text-3xl md:text-4xl font-bold text-center tracking-tight mb-6 sm:mb-8">
        {header}
      </h3>
      <div className="w-full flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-14 lg:gap-16">
        {partnerList.map((partner) => (
          <SinglePartnerItem
            key={`${partner.alt}-${partner.link}`}
            size={size}
            {...partner}
          />
        ))}
      </div>
    </div>
  );
};
