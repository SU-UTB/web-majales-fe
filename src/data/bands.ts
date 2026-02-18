import type { BandType } from '../AppTypes';

import misik from '../assets/img/bands/adammisik.webp?url';
import echo from '../assets/img/bands/echo.webp?url';
import focus from '../assets/img/bands/focusrock.webp?url';
import johnny from '../assets/img/bands/johnnycurbes.webp?url';
import kharma from '../assets/img/bands/kharmadj.webp?url';
import marko from '../assets/img/bands/markodamian.webp?url';
import novaStopa from '../assets/img/bands/novastopa.webp?url';
import qocna from '../assets/img/bands/qocna.webp?url';
import renne from '../assets/img/bands/rennedang.webp?url';
import saraNoff from '../assets/img/bands/saranoff.webp?url';
export const bands: (BandType & { visibleFrom: Date })[] = [
  {
    img: renne,
    title: 'Renne Dang',
    visibleFrom: new Date('2026-04-02T18:00:00'),
  },
  {
    img: misik,
    title: 'Adam Mišík',
    visibleFrom: new Date('2026-03-30T18:00:00'),
  },
  {
    img: marko,
    title: 'Marko Damian',
    visibleFrom: new Date('2026-03-24T18:00:00'),
  },
  {
    img: focus,
    title: 'Focus Rock',
    visibleFrom: new Date('2026-04-14T18:00:00'),
  },
  {
    img: saraNoff,
    title: 'Sara Noff',
    visibleFrom: new Date('2026-03-16T18:00:00'),
  },
  {
    img: novaStopa,
    title: 'Nová stopa',
    visibleFrom: new Date('2026-03-10T18:00:00'),
  },
  {
    img: kharma,
    title: 'Kharma DJ',
    visibleFrom: new Date('2026-03-06T18:00:00'),
  },
  {
    img: johnny,
    title: 'Johnny Čurbes',
    visibleFrom: new Date('2026-03-02T18:00:00'),
  },
  {
    img: echo,
    title: 'echo',
    visibleFrom: new Date('2026-02-10T18:00:00'),
  },
  {
    img: qocna,
    title: 'Qočna',
    visibleFrom: new Date('2026-01-26T18:00:00'),
  },
];
