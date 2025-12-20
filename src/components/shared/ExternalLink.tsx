import type { ExternalLinkType } from '../../AppTypes';

export const ExternalLink = ({
  icon,
  text,
  link,
  className,
  'data-track-event': dataTrackEvent,
  'data-track-category': dataTrackCategory,
  'data-track-label': dataTrackLabel,
}: ExternalLinkType) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer external"
      className={className}
      data-track-event={dataTrackEvent}
      data-track-category={dataTrackCategory}
      data-track-label={dataTrackLabel}
    >
      {icon && icon}
      {text && text}
    </a>
  );
};