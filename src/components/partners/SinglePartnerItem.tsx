import type { PartnerType } from '../../AppTypes';
import { ExternalLink } from '../shared/ExternalLink';

type Props = {
  headline?: string;
} & PartnerType;

export const SinglePartnerItem = ({ headline, img, alt, link }: Props) => {
  return (
    <div className="space-y-4">
      {headline && <h4 className="text-blue text-h2 text-center">{headline}</h4>}
      <ExternalLink
        icon={<img src={img} alt={alt} width={400} height={300} className="h-[90px] object-contain" loading="lazy" />}
        link={link}
      />
    </div>
  );
};
