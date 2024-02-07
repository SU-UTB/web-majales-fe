import type { NavItemType } from '../../AppTypes';

export const NavItem = ({ text, linkTo }: NavItemType) => {
  return <a href={linkTo}>{text}</a>;
};
