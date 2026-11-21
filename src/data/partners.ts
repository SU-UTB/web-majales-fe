import type { PartnerType } from '../AppTypes';

import artikonLogo from '../assets/img/partners/artikonLogo.png?url';
import backstageAgencyLogo from '../assets/img/partners/backstageAgencyLogo.png?url';
import bageterie from '../assets/img/partners/bageterie.png?url';
import caprisun from '../assets/img/partners/caprisun.png?url';
import cistyFestivalLogo from '../assets/img/partners/cisty-festival.png?url';
import exitRoomZlinLogo from '../assets/img/partners/exitroom.png?url';
import faencyfries from '../assets/img/partners/faencyfries.png?url';
import franzJosefKaiserLogo from '../assets/img/partners/franzJosefKaiserLogo.png?url';
import gac from '../assets/img/partners/goldenapplecinema.png?url';
import hitradioZlinLogo from '../assets/img/partners/hitradio-zlin.png?url';
import kalina from '../assets/img/partners/kalina.png?url';
import krajLogo from '../assets/img/partners/kraj.png?url';
import krusoviceLogo from '../assets/img/partners/krusoviceLogo.png?url';
import kudyZNudyLogo from '../assets/img/partners/kudy-z-nudy-logo.png?url';
import laserGame from '../assets/img/partners/laser-game.png?url';
import matchballLogo from '../assets/img/partners/matchball.png?url';
import krajskaknihovna from '../assets/img/partners/medialniPartnerLogo.png?url';
import nextbikeLogo from '../assets/img/partners/nextbike.png?url';
import ntbLogo from '../assets/img/partners/ntb.png?url';
import postaBezHranicLogo from '../assets/img/partners/pbh.png?url';
import pizza_hallo from '../assets/img/partners/pizza_hallo.png?url';
import su from '../assets/img/partners/su.png?url';
import trinityLogo from '../assets/img/partners/trinity.png?url';
import uSevce from '../assets/img/partners/uSevce.png?url';
import utb from '../assets/img/partners/utb.png?url';
import vest from '../assets/img/partners/vest.png?url';
import vincentkaLogo from '../assets/img/partners/vincentka.png?url';
import zffLogo from '../assets/img/partners/zff.png?url';
import mestoLogo from '../assets/img/partners/zlin.png?url';

export type PartnerCategoryType = {
  id: string;
  categoryTitle: string;
  logoSize?: 'sm' | 'md' | 'lg' | 'xl';
  partners: PartnerType[];
};

/**
 * Jednotná struktura kategorií partnerů pro přehlednou správu a editaci.
 * Pro přidání partnera stačí přidat položku do příslušné kategorie (nebo vytvořit novou kategorii).
 */
export const partnerCategories: PartnerCategoryType[] = [
  {
    id: 'organizers',
    categoryTitle: 'Pořadatelé',
    logoSize: 'lg',
    partners: [
      {
        img: su,
        alt: 'Studentská Unie UTB',
        link: 'https://su.utb.cz/',
      },
      {
        img: utb,
        alt: 'Univerzita Tomáše Bati',
        link: 'https://utb.cz/',
      },
    ],
  },
  {
    id: 'general',
    categoryTitle: 'Generální partner',
    logoSize: 'xl',
    partners: [
      {
        img: trinityLogo,
        alt: 'Trinity Bank',
        link: 'https://www.trinitybank.cz/',
      },
    ],
  },
  {
    id: 'main',
    categoryTitle: 'Hlavní partneři',
    logoSize: 'lg',
    partners: [
      {
        img: backstageAgencyLogo,
        alt: 'Backstage Agency',
        link: 'https://www.backstage-agency.cz/',
      },
    ],
  },
  {
    id: 'media',
    categoryTitle: 'Mediální partneři',
    logoSize: 'md',
    partners: [
      {
        img: hitradioZlinLogo,
        alt: 'Hitrádio Zlín',
        link: 'https://hitradiozlin.cz/',
        hidden: true,
      },
    ],
  },
  {
    id: 'logistics',
    categoryTitle: 'Logistický partner',
    logoSize: 'md',
    partners: [
      {
        img: postaBezHranicLogo,
        alt: 'Pošta bez hranic',
        link: 'https://www.postabezhranic.cz/',
        hidden: true,
      },
    ],
  },
  {
    id: 'support',
    categoryTitle: 'S podporou',
    logoSize: 'md',
    partners: [
      {
        img: mestoLogo,
        alt: 'Město Zlín',
        link: 'https://www.zlin.eu/',
        hidden: true,
      },
      {
        img: krajLogo,
        alt: 'Zlínský kraj',
        link: 'https://zlinskykraj.cz/',
        hidden: true,
      },
    ],
  },
  {
    id: 'partners',
    categoryTitle: 'Partneři',
    logoSize: 'sm',
    partners: [
      {
        img: artikonLogo,
        alt: 'Artikon',
        link: 'https://www.artikon.cz/',
        hidden: true,
      },
      {
        img: bageterie,
        alt: 'Bageterie Boulevard',
        link: 'https://www.bb.cz/',
        hidden: true,
      },
      {
        img: caprisun,
        alt: 'Capri-Sun',
        link: 'https://www.vitar.cz/capri-sun/',
        hidden: true,
      },
      {
        img: cistyFestivalLogo,
        alt: 'Čistý festival',
        link: 'https://www.cistyfestival.cz/',
        hidden: true,
      },
      {
        img: exitRoomZlinLogo,
        alt: 'Exit Room Zlín',
        link: 'https://www.exitroomzlin.cz/',
        hidden: true,
      },
      {
        img: faencyfries,
        alt: 'Faency Fries',
        link: 'https://www.faencyfries.cz/',
        hidden: true,
      },
      {
        img: franzJosefKaiserLogo,
        alt: 'Franz Josef Kaiser',
        link: 'https://www.franzjosefkaiser.cz/',
        hidden: true,
      },
      {
        img: gac,
        alt: 'Golden Apple Cinema',
        link: 'https://www.gacinema.cz/',
        hidden: true,
      },
      {
        img: uSevce,
        alt: 'Hotel U Ševce',
        link: 'https://www.hotelusevce.cz/',
        hidden: true,
      },
      {
        img: kalina,
        alt: 'KALINA industries',
        link: 'https://www.kalina.cz/',
        hidden: true,
      },
      {
        img: krajskaknihovna,
        alt: 'Krajská knihovna Františka Bartoše ve Zlíně',
        link: 'https://www.kfbz.cz/',
        hidden: true,
      },
      {
        img: krusoviceLogo,
        alt: 'Krušovice',
        link: 'https://www.krusovice.cz/',
        hidden: true,
      },
      {
        img: kudyZNudyLogo,
        alt: 'Kudy z nudy',
        link: 'https://www.kudyznudy.cz/',
        hidden: true,
      },
      {
        img: laserGame,
        alt: 'Laser Game Zlín',
        link: 'https://lasergamezlin.cz/',
        hidden: true,
      },
      {
        img: matchballLogo,
        alt: 'Matchball',
        link: 'http://mball.cz/',
        hidden: true,
      },
      {
        img: ntbLogo,
        alt: 'Nadace Tomáše Bati',
        link: 'https://www.nadacetomasebati.cz/',
        hidden: true,
      },
      {
        img: nextbikeLogo,
        alt: 'NextBike',
        link: 'https://www.nextbikeczech.com/',
        hidden: true,
      },
      {
        img: pizza_hallo,
        alt: 'Pizza Hallo',
        link: 'https://pizzahallo.cz/zlin/',
        hidden: true,
      },
      {
        img: vest,
        alt: 'Vest Zlín',
        link: 'https://vestzlin.cz/',
        hidden: true,
      },
      {
        img: vincentkaLogo,
        alt: 'Vincentka',
        link: 'https://www.vincentka.cz/',
        hidden: true,
      },
      {
        img: zffLogo,
        alt: 'Zlín Film Festival',
        link: 'https://www.zlinfest.cz/?utm_source=majales-utb&utm_medium=link&utm_content=partneri&utm_campaign=66-brand',
        hidden: true,
      },
    ],
  },
];

// Zpětná kompatibilita pro případné jiné importy
export const visiblePartnerCategories = partnerCategories
  .map((category) => ({
    ...category,
    partners: category.partners.filter((partner) => !partner.hidden),
  }))
  .filter((category) => category.partners.length > 0);

export const organizers = visiblePartnerCategories.find((c) => c.id === 'organizers')?.partners ?? [];
export const mainPartners = visiblePartnerCategories.find((c) => c.id === 'main')?.partners ?? [];
export const partners = visiblePartnerCategories.find((c) => c.id === 'partners')?.partners ?? [];
export const supportPartners = visiblePartnerCategories.find((c) => c.id === 'support')?.partners ?? [];
export const kingAndQueenPartners: PartnerType[] = [];
