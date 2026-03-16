import type { BandType } from '../AppTypes';

import mat213 from '../assets/img/bands/mat213.webp?url';
import sympl from '../assets/img/bands/sympl.webp?url';
import focus from '../assets/img/bands/focusrock.webp?url';
import analog_killer from '../assets/img/bands/analog_killer.webp?url';
import beira from '../assets/img/bands/beira.webp?url';
//import kojo from '../assets/img/bands/kojo.webp?url';
import novahospodsky_bordel from '../assets/img/bands/hospodsky_bordel.webp?url';
import qocna from '../assets/img/bands/qocna.webp?url';
//import michal_hruza from '../assets/img/bands/michal_hruza.webp?url';
import dukla from '../assets/img/bands/dukla.webp?url';
export const bands: (BandType & { visibleFrom: Date })[] = [
  /* {
    img: michal_hruza,
    title: 'Michal Hrůza',
    visibleFrom: new Date('2026-04-02T18:00:00'),
  }, */
  {
    img: mat213,
    title: 'Mat213',
    visibleFrom: new Date('2026-03-30T18:00:00'),
  },
  /* {
    img: kojo,
    title: 'Kojo',
    visibleFrom: new Date('2026-03-30T18:00:00'),
  }, */
  {
    img: hospodsky_bordel,
    title: 'Hospodský Bordel',
    visibleFrom: new Date('2026-03-24T18:00:00'),
  },
  {
    img: dukla,
    title: 'Dukla',
    visibleFrom: new Date('2026-03-16T18:00:00'),
  },
  {
    img: focus,
    title: 'Focus Rock',
    visibleFrom: new Date('2026-03-10T18:00:00'),
  },
  {
    img: beira,
    title: 'beira',
    visibleFrom: new Date('2026-03-06T18:00:00'),
  },
  {
    img: analog_killer,
    title: 'Analog Killer',
    visibleFrom: new Date('2026-03-02T18:00:00'),
  },
  {
    img: sympl,
    title: 'SYMPL',
    visibleFrom: new Date('2026-02-10T18:00:00'),
  },
  {
    img: qocna,
    title: 'Qočna',
    visibleFrom: new Date('2026-01-26T18:00:00'),
  },
];
