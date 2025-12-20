import type { FooterItemType } from '../AppTypes';
import majalesLogo from '../assets/img/majales-footer.webp?url';
import utbLogo from '../assets/img/utb-footer.webp?url';
import suLogo from '../assets/img/su-footer.webp?url';
import { FbIcon, IgIcon, LinkedInIcon, WebIcon } from '../components/shared/Icons';
import { MAJALES_TITLE } from '../config/constants';

export const footerItems: FooterItemType[] = [
  {
    logo: majalesLogo,
    logoName: MAJALES_TITLE,
    socials: [
      {
        icon: <IgIcon />,
        link: 'https://www.instagram.com/majalesutb/',
        'data-track-event': 'click',
        'data-track-category': 'Footer',
        'data-track-label': 'Footer/Majales/Instagram',
      },
      {
        icon: <FbIcon />,
        link: 'https://www.facebook.com/MajalesUTB',
        'data-track-event': 'click',
        'data-track-category': 'Footer',
        'data-track-label': 'Footer/Majales/Facebook',
      },
      {
        icon: <LinkedInIcon />,
        link: 'https://www.linkedin.com/company/student-union-of-utb/',
        'data-track-event': 'click',
        'data-track-category': 'Footer',
        'data-track-label': 'Footer/Majales/LinkedIn',
      },
    ],
  },
  {
    logo: suLogo,
    logoName: 'Studenská unie',
    socials: [
      {
        icon: <IgIcon />,
        link: 'https://www.instagram.com/studentskaunieutb/',
        'data-track-event': 'click',
        'data-track-category': 'Footer',
        'data-track-label': 'Footer/SU/Instagram',
      },
      {
        icon: <FbIcon />,
        link: 'https://www.facebook.com/studentskaunieutb',
        'data-track-event': 'click',
        'data-track-category': 'Footer',
        'data-track-label': 'Footer/SU/Facebook',
      },
      {
        icon: <WebIcon />,
        link: 'https://su.utb.cz/',
        'data-track-event': 'click',
        'data-track-category': 'Footer',
        'data-track-label': 'Footer/SU/Web',
      },
    ],
  },
  {
    logo: utbLogo,
    logoName: 'Univerzita Tomáše Bati',
    socials: [
      {
        icon: <WebIcon />,
        link: 'https://www.utb.cz/',
        'data-track-event': 'click',
        'data-track-category': 'Footer',
        'data-track-label': 'Footer/UTB/Web',
      },
    ],
  },
];
