import type { ContactType } from '../AppTypes';
import DefaultPhoto from '../assets/img/contacts/default.jpg?url';
import anicka from '../assets/img/contacts/anicka.webp?url';
import barca_h from '../assets/img/contacts/barca_h.webp?url';
import barca_v from '../assets/img/contacts/barca_v.webp?url';
import bea from '../assets/img/contacts/bea.webp?url';
import lucka from '../assets/img/contacts/lucka.webp?url';
import maty from '../assets/img/contacts/maty.webp?url';
import simca from '../assets/img/contacts/simca.webp?url';
//import dzon_web from '../assets/img/contacts/dzon_web.webp?url';

export const contacts: ContactType[] = [
  {
    position: 'Manažerka projektu',
    name: 'ANNA DAREBNÍČKOVÁ',
    email: 'darebnickova@sutb.cz',
    phone: '+420 721 948 952',
    photo: anicka,
  },
  {
    position: 'Manažerka projektu',
    name: 'BARBORA HANOLDOVÁ',
    email: 'hanoldova@sutb.cz',
    phone: '+420 720 497 790',
    photo: barca_h,
  },
  {
    position: 'Marketing',
    name: 'BARBORA VEDRALOVÁ',
    email: 'vedralova@sutb.cz',
    phone: '+420 775 928 319',
    photo: barca_v,
  },
  {
    position: 'Sponzoring',
    name: 'BEATRICE ROCCA',
    email: 'rocca@sutb.cz',
    phone: '+420 776 311 203',
    photo: bea,
  },
  {
    position: 'Media relations',
    name: 'LUCIE BEČKOVÁ',
    email: 'beckova@sutb.cz',
    phone: '+420 720 115 317',
    photo: lucka,
  },
  /*{
    position: 'Produkce',
    name: 'JAN HOFFMANN',
    email: 'hoffmann@sutb.cz',
    phone: '+420 731 185 896',
    photo: dzon_web,
  },*/
  {
    position: 'Art director',
    name: 'MATYÁŠ SELNÍK',
    email: 'selnik@sutb.cz',
    phone: '+420 703 133 233',
    photo: maty,
  },
  {
    position: 'Kapely',
    name: 'SIMONA KOTUĽOVÁ',
    email: 'kotulova@sutb.cz',
    phone: '+421 907 618 182',
    photo: simca,
  },
];
