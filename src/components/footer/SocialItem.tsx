import type { FooterItemType } from '../../AppTypes';
import { SocialLink } from './SocialLink';

export const SocialItem = ({ logo, logoName, socials }: FooterItemType) => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-8">
      <img src={logo} alt={logoName} className="w-[240px] h-[54px]" width="240" height="54" />
      <div className="flex flex-wrap items-center justify-between max-w-max gap-8">
        {socials.map((social) => (
          <SocialLink key={social.link} {...social} />
        ))}
      </div>
    </div>
  );
};
