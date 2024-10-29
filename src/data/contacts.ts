import type { ContactType } from '../AppTypes';
import BetyPhoto from '../assets/img/contacts/bety.jpg?url';
import DefaultPhoto from '../assets/img/contacts/default.jpg?url';
import ErikPhoto from '../assets/img/contacts/erik.jpg?url';
import JstPhoto from '../assets/img/contacts/jst.jpg?url';
import KlarkaPhoto from '../assets/img/contacts/klarka.jpg?url';
import LukyPhoto from '../assets/img/contacts/luky.jpg?url';
import MartaPhoto from '../assets/img/contacts/marta.jpg?url';
import PataPhoto from '../assets/img/contacts/pata.jpg?url';

export const contacts: ContactType[] = [
  {
    position: 'Manažer projektu',
    name: 'PATRIK HÁBL',
    email: 'habl@sutb.cz',
    phone: '+420 777 995 476',
    photo: PataPhoto,
  },
  {
    position: 'Manažer projektu',
    name: 'LUKÁŠ FAKSA',
    email: 'faksa@sutb.cz',
    phone: '+420 605 456 216',
    photo: LukyPhoto,
  },
  {
    position: 'Marketing',
    name: 'ALŽBĚTA HRUŠKOVÁ',
    email: 'hruskova@sutb.cz',
    phone: '+420 775 673 216',
    photo: BetyPhoto,
  },
  {
    position: 'Sales',
    name: 'JANKA NIEPELOVÁ',
    email: 'niepelova@sutb.cz',
    phone: '+421 918 424 947',
    photo: DefaultPhoto,
  },
  {
    position: 'Media relations',
    name: 'MARTINA MATULÍKOVÁ',
    email: 'matulikova@sutb.cz',
    phone: '+420 730 930 139',
    photo: MartaPhoto,
  },
  {
    position: 'Produkce',
    name: 'JAKUB STANĚK',
    email: 'stanek@sutb.cz',
    phone: '+420 776 459 859',
    photo: JstPhoto,
  },
  {
    position: 'Art director',
    name: 'ERIK RIEČIČIAR',
    email: 'rieciciar@sutb.cz',
    phone: '+420 773 834 430',
    photo: ErikPhoto,
  },
  {
    position: 'Kapely',
    name: 'KLÁRA HRDLIČKOVÁ',
    email: 'hrdlickova@sutb.cz',
    phone: '+420 604 708 198',
    photo: KlarkaPhoto,
  },
];
