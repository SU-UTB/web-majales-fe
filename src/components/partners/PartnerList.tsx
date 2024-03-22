import krajLogo from '../../assets/img/loga/kraj.png?url';
import mestoLogo from '../../assets/img/loga/zlin.png?url';
import { partners } from '../../data/partners';
import { SinglePartnerItem } from './SinglePartnerItem';

export const PartnerList = () => {
  return (
    <div className="space-y-8">
      <h4 className="text-blue text-h2 text-center">Partneři</h4>
      <div className="rounded-2xl bg-white p-8 flex flex-col items-center gap-8">
        <div className="space-y-16 flex flex-col items-center">
          <div className="flex flex-wrap justify-between items-center">
            <SinglePartnerItem img={mestoLogo} alt="logo město Zlín" />
            <SinglePartnerItem img={krajLogo} alt="logo kraj" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-y-12">
          {partners.map((partner) => (
            <SinglePartnerItem key={partner.img} {...partner} />
          ))}
        </div>
      </div>
    </div>
  );
};
