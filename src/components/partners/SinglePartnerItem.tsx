import type { PartnerType } from '../../AppTypes';
import { ExternalLink } from '../shared/ExternalLink';

type Props = {
  headline?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
} & PartnerType;

const sizeClasses = {
  sm: 'h-10 sm:h-12 md:h-14 max-w-[130px] sm:max-w-[170px]',
  md: 'h-12 sm:h-16 md:h-20 max-w-[170px] sm:max-w-[220px]',
  lg: 'h-16 sm:h-20 md:h-24 max-w-[220px] sm:max-w-[280px]',
  xl: 'h-20 sm:h-24 md:h-28 max-w-[280px] sm:max-w-[340px]',
};

export const SinglePartnerItem = ({
  headline,
  img,
  alt,
  link,
  size = 'md',
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      {headline && (
        <h4 className="text-darkPurple text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          {headline}
        </h4>
      )}
      <ExternalLink
        icon={
          <img
            src={img}
            alt={alt}
            className={`${sizeClasses[size]} w-auto object-contain transition-transform duration-200 hover:scale-105`}
            loading="lazy"
          />
        }
        link={link}
        data-track-event="click"
        data-track-category="Partner"
        data-track-label={`Partner/${alt}`}
      />
    </div>
  );
};
