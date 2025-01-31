import type { NavLinkType } from '../AppTypes';
import { APP_ROUTES } from '../config/constants';

const { HOME, LINE_UP, KING_AND_QUEEN, UBC, QNA, PARTNERS, MEDIA, CONTACTS, GALERIE } = APP_ROUTES;

export const navItems: NavLinkType[] = [
  // {
  //   text: 'Domov',
  //   linkTo: HOME,
  // },
  {
    text: 'Line up a program',
    linkTo: LINE_UP,
  },
  {
    text: 'Galerie',
    linkTo: GALERIE,
  },
  {
    text: 'Král a královna',
    linkTo: KING_AND_QUEEN,
  },
  // {
  //   text: 'UBC',
  //   linkTo: UBC,
  // },
  {
    text: 'Q&A',
    linkTo: QNA,
  },
  {
    text: 'Partneři',
    linkTo: PARTNERS,
  },
  {
    text: 'Média',
    linkTo: MEDIA,
  },
  {
    text: 'Kontakty',
    linkTo: CONTACTS,
  },
];

export const mobNavItemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
