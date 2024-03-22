import type { FooterItemType } from '../AppTypes';
import utbLogo from '../assets/img/loga/utb.png?url';
import majalesLogo from '../assets/img/majales-footer.webp?url';
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
      },
      {
        icon: <FbIcon />,
        link: 'https://www.facebook.com/MajalesUTB',
      },
      {
        icon: <LinkedInIcon />,
        link: 'https://www.linkedin.com/company/student-union-of-utb/',
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
      },
      {
        icon: <FbIcon />,
        link: 'https://www.facebook.com/studentskaunieutb',
      },
      {
        icon: <WebIcon />,
        link: 'https://su.utb.cz/',
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
      },
    ],
  },
];
