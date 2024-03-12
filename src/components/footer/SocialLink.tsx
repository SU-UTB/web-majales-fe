import type { FooterSocialType } from '../../AppTypes';

export const SocialLink = ({ icon, link }: FooterSocialType) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer external">
      {icon}
    </a>
  );
};
