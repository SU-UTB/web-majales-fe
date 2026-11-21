import type { NavLinkType } from '../../AppTypes';

type Props = {
  onClick?: () => void;
  isActive?: boolean;
  'data-track-event'?: string;
  'data-track-category'?: string;
  'data-track-label'?: string;
} & NavLinkType;

export const NavLink = ({
  onClick,
  text,
  linkTo,
  isActive = false,
  'data-track-event': dataTrackEvent,
  'data-track-category': dataTrackCategory,
  'data-track-label': dataTrackLabel,
}: Props) => {
  return (
    <a
      onClick={onClick}
      href={linkTo}
      className={`${
        isActive ? 'text-orange' : 'text-yellow'
      } hover:text-lightGreen transition-colors duration-200 whitespace-nowrap`}
      data-track-event={dataTrackEvent}
      data-track-category={dataTrackCategory}
      data-track-label={dataTrackLabel}
    >
      {text}
    </a>
  );
};
