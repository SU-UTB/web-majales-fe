import type { ContactType } from '../AppTypes';
import DefaultPhoto from '../assets/img/contacts/default.jpg?url';
import anicka_d from '../assets/img/contacts/anicka_d.webp?url';
import anicka_k from '../assets/img/contacts/anicka_k.webp?url';
import barca from '../assets/img/contacts/barca.webp?url';
import bety from '../assets/img/contacts/bety.webp?url';
import matus from '../assets/img/contacts/matus.webp?url';
import peta from '../assets/img/contacts/peta.webp?url';
import sarka from '../assets/img/contacts/sarka.webp?url';
import vanes from '../assets/img/contacts/vanes.webp?url';

export const contacts: ContactType[] = [
  {
    position: 'Manažer projektu',
    name: 'ALŽBĚTA HRUŠKOVÁ',
    email: 'hruskova@sutb.cz',
    phone: '+420 775 673 216',
    photo: bety,
  },
  {
    position: 'Manažer projektu',
    name: 'PETR SEDLÁČEK',
    email: 'sedlacek@sutb.cz',
    phone: '+420 722 126 518',
    photo: peta,
  },
  {
    position: 'Marketing',
    name: 'VANESA JASNÍKOVÁ',
    email: 'jasnikova@sutb.cz',
    phone: '+420 605 405 778',
    photo: vanes,
  },
  {
    position: 'Sponzoring',
    name: 'ANNA DAREBNÍČKOVÁ',
    email: 'darebnickova@sutb.cz',
    phone: '+420 721 948 952',
    photo: anicka_d,
  },
  {
    position: 'Media relations',
    name: 'BARBORA HANOLDOVÁ',
    email: 'hanoldova@sutb.cz',
    phone: '+420 720 497 790',
    photo: barca,
  },
  {
    position: 'Produkce',
    name: 'MATÚŠ VARGA',
    email: 'varga@sutb.cz',
    phone: '+421 904 947 289',
    photo: matus,
  },
  {
    position: 'Art director',
    name: 'ANNA KUBEŠOVÁ',
    email: 'kubesova@sutb.cz',
    phone: '+420 773 477 050',
    photo: anicka_k,
  },
  {
    position: 'Kapely',
    name: 'SÁRA FOREJTOVÁ',
    email: 'forejtova@sutb.cz',
    phone: '+420 728 411 288',
    photo: sarka,
  },
];
