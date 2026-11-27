import type { FooterItemType } from '../../AppTypes';
import { ExternalLink } from '../shared/ExternalLink';

export const SocialItem = ({ logo: Logo, logoName, socials }: FooterItemType) => {
  return (
    <div className="flex flex-col items-center gap-4 md:gap-8">
      <Logo aria-label={logoName} className="w-auto h-[40px]" colorMain="fill-lightGreen" />
      <div className="flex flex-wrap items-center justify-between max-w-max gap-8">
        {socials.map((social) => (
          <ExternalLink key={social.link} {...social} />
        ))}
      </div>
    </div>
  );
};
