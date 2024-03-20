import type { ExternalLinkType } from '../../AppTypes';

export const ExternalLink = ({ icon, text, link, className }: ExternalLinkType) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer external" className={className && className}>
      {icon && icon}
      {text && text}
    </a>
  );
};
