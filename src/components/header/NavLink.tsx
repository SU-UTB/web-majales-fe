import type { NavLinkType } from '../../AppTypes';

type Props = {
  onClick?: () => void;
  'data-track-event'?: string;
  'data-track-category'?: string;
  'data-track-label'?: string;
} & NavLinkType;

export const NavLink = ({
  onClick,
  text,
  linkTo,
  'data-track-event': dataTrackEvent,
  'data-track-category': dataTrackCategory,
  'data-track-label': dataTrackLabel,
}: Props) => {
  return (
    <a
      onClick={onClick}
      href={linkTo}
      className="text-white hover:text-orange transition-colors duration-200"
      data-track-event={dataTrackEvent}
      data-track-category={dataTrackCategory}
      data-track-label={dataTrackLabel}
    >
      {text}
    </a>
  );
};