import type { BandType } from '../AppTypes';

import annetXAndBobodyListen from '../assets/img/bands/annetx-nobody.webp?url';
import hospodskyBordel from '../assets/img/bands/hospodsky-bordel.webp?url';
import nsf from '../assets/img/bands/nsf.webp?url';
import qocna from '../assets/img/bands/quocna.webp?url';
import restWich1 from '../assets/img/bands/rest-wich-1.webp?url';
import restWich from '../assets/img/bands/rest-wich.webp?url';
import rez from '../assets/img/bands/rez.webp?url';
import zociVoci from '../assets/img/bands/zoci-voci.webp?url';

export const bands: BandType[] = [
  {
    img: annetXAndBobodyListen,
    title: 'Annet X & Nobody Listen',
  },
  // {
  //   img: fallAndFell,
  //   title: 'Fall & Fell',
  // },
  {
    img: hospodskyBordel,
    title: 'Hospodsky Bordel',
  },
  {
    img: nsf,
    title: 'N.S.F.W.',
  },
  {
    img: qocna,
    title: 'Qočna',
  },
  {
    img: rez,
    title: 'REZ',
  },
  {
    img: zociVoci,
    title: 'Zoči Voči',
  },
  {
    img: restWich,
    title: 'Rest',
  },
  {
    img: restWich1,
    title: 'DJ Wich',
  },
];
