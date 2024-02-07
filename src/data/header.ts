import type { NavLinkType } from '../AppTypes';

export const navItems: NavLinkType[] = [
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
