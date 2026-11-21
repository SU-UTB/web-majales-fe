import type { ContactType } from '../AppTypes';
import defaultPhoto from '../assets/img/contacts/default.jpg?url';
import anicka from '../assets/img/contacts/anicka.webp?url';
import anicka_v from '../assets/img/contacts/anicka_v.webp?url';
import barca_h from '../assets/img/contacts/barca_h.webp?url';
import barca_v from '../assets/img/contacts/barca_v.webp?url';
import bea from '../assets/img/contacts/bea.webp?url';
import honza from '../assets/img/contacts/honza.webp?url';
import koki from '../assets/img/contacts/koki.webp?url';
import lucka from '../assets/img/contacts/lucka.webp?url';
import maty from '../assets/img/contacts/maty.webp?url';
import simca from '../assets/img/contacts/simca.webp?url';
import karol from '../assets/img/contacts/karol.webp?url';
import viki from '../assets/img/contacts/viki.webp?url';
import vojta from '../assets/img/contacts/vojta.webp?url';

export const contacts: ContactType[] = [
  // --- ÚROVEŇ 1 (Projektové manažerky) ---
  {
    position: 'Manažerka projektu',
    name: 'ANNA DAREBNÍČKOVÁ',
    email: 'darebnickova@sutb.cz',
    phone: '+420 721 948 952',
    photo: anicka,
    level: 1,
  },
  {
    position: 'Manažerka projektu',
    name: 'BARBORA HANOLDOVÁ',
    email: 'hanoldova@sutb.cz',
    phone: '+420 720 497 790',
    photo: barca_h,
    level: 1,
  },

  // --- ÚROVEŇ 2 (Sekční manažeři / Hlavní týmy) ---
  {
    position: 'Manažerka sponzoringu',
    name: 'BEATRICE ROCCA',
    email: 'rocca@sutb.cz',
    phone: '+420 776 311 203',
    photo: bea,
    level: 2,
  },
  {
    position: 'Manažerka kapel',
    name: 'SIMONA KOTUĽOVÁ',
    email: 'kotulova@sutb.cz',
    phone: '+421 940 192 891',
    photo: simca,
    level: 2,
  },
  {
    position: 'Manažer produkce',
    name: 'JAN HOFFMANN',
    email: 'hoffmann@sutb.cz',
    phone: '+420 731 185 896',
    photo: honza,
    level: 2,
  },
  {
    position: 'Manažerka marketingu',
    name: 'BARBORA VEDRALOVÁ',
    email: 'vedralova@sutb.cz',
    phone: '+420 775 928 319',
    photo: barca_v,
    level: 2,
  },
  {
    position: 'Manažerka PR',
    name: 'LUCIE BEČKOVÁ',
    email: 'beckova@sutb.cz',
    phone: '+420 720 115 317',
    photo: lucka,
    level: 2,
  },

  // --- ÚROVEŇ 3 (Specializované role / Koordinátoři) ---
  {
    position: 'Manažerka offline marketingu',
    name: 'ANNA VRTALOVÁ',
    email: 'vrtalova@sutb.cz',
    phone: '+420 735 884 845',
    photo: anicka_v,
    level: 3,
  },
  {
    position: 'Manažerka online marketingu',
    name: 'KAROLÍNA KORENÁ',
    email: 'korena@sutb.cz',
    phone: '+420 737 148 498',
    photo: koki,
    level: 3,
  },
  {
    position: 'Manažerka doprogramu',
    name: 'VIKTORIE ADÁMKOVÁ',
    email: 'adamkova@sutb.cz',
    phone: '+420 604 545 834',
    photo: viki,
    level: 3,
  },
  {
    position: 'Manažerka krále a královny',
    name: 'KAROLÍNA JAROŠOVÁ',
    email: 'jarosova@sutb.cz',
    phone: '+420 775 510 290',
    photo: karol,
    level: 3,
  },
  {
    position: 'Manažer online grafiky',
    name: 'MATYÁŠ SELNÍK',
    email: 'selnik@sutb.cz',
    phone: '+420 703 133 233',
    photo: maty,
    level: 3,
  },
  {
    position: 'Manažer offline grafiky',
    name: 'VOJTĚCH MARYNČÁK',
    email: 'maryncak@sutb.cz',
    phone: '+420 734 288 271',
    photo: vojta,
    level: 3,
  },
  /* {
    position: 'Manažer webu',
    name: 'PAVEL KRŮČEK',
    email: 'krucek@sutb.cz',
    phone: '+420 778 717 425',
    photo: defaultPhoto,
    level: 3,
  }, */
];
