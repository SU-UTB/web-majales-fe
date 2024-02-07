import type { NavItemType } from '../../AppTypes';
import { NavItem } from '../header/NavItem';
import { NavLogo } from '../header/NavLogo';

const navItems: NavItemType[] = [
  {
    text: 'Domov',
    linkTo: '/',
  },
  {
    text: 'Domov',
    linkTo: '/',
  },
  {
    text: 'Domov',
    linkTo: '/',
  },
  {
    text: 'Domov',
    linkTo: '/',
  },
  {
    text: 'Domov',
    linkTo: '/',
  },
  {
    text: 'Domov',
    linkTo: '/',
  },
];

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLogo />
        <ul>
          {navItems.map((navItem) => (
            <NavItem key={navItem.text} {...navItem} />
          ))}
        </ul>
      </nav>
    </header>
  );
};
