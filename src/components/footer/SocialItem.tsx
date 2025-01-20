import type { FooterItemType } from '../../AppTypes';
import { ExternalLink } from '../shared/ExternalLink';

export const SocialItem = ({ logo, logoName, socials }: FooterItemType) => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-8">
      <img src={logo} alt={logoName} className="w-[240px] h-[54px] object-contain" width="240" height="54" loading="lazy" />
      <div className="flex flex-wrap items-center justify-between max-w-max gap-8">
        {socials.map((social) => (
          <ExternalLink key={social.link} {...social} />
        ))}
      </div>
    </div>
  );
};
