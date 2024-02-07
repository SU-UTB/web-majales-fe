import type { NavItemType } from '../../AppTypes';
import { NavItem } from '../header/NavItem';
import { NavLogo } from '../header/NavLogo';

const navItems: NavItemType[] = [
  {
    text: 'Domov',
    linkTo: '/',
  },
  {
    text: 'Line up a program',
    linkTo: '/line-up-a-program',
  },
  {
    text: 'Král a královna',
    linkTo: '/kral-a-kralovna',
  },
  {
    text: 'UBC',
    linkTo: '/ubc',
  },
  {
    text: 'Q&A',
    linkTo: '/qna',
  },
  {
    text: 'Partneři',
    linkTo: '/partneri',
  },
  {
    text: 'Média',
    linkTo: '/media',
  },
  {
    text: 'Kontakty',
    linkTo: '/kontakty',
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
