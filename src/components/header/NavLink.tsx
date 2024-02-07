import type { NavLinkType } from '../../AppTypes';

type Props = {
  onClick?: () => void;
} & NavLinkType;

export const NavLink = ({ onClick, text, linkTo }: Props) => {
  return (
    <a onClick={onClick} href={linkTo}>
      {text}
    </a>
  );
};
