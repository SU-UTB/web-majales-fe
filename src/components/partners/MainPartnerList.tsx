import { mainPartners } from '../../data/partners';
import { SinglePartnerItem } from './SinglePartnerItem';

export const MainPartnerList = () => {
  return (
    <div className="space-y-8">
      <h4 className="text-blue text-h2 text-center">Hlavní partneři</h4>
      <div className="rounded-2xl bg-white p-8 flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center gap-y-12">
          {mainPartners.map((partner) => (
            <SinglePartnerItem key={partner.img} {...partner} />
          ))}
        </div>
      </div>
    </div>
  );
};
