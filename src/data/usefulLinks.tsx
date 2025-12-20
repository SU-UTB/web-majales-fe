import type { UsefulLinkType } from '../AppTypes';
import { APP_ROUTES } from '../config/constants';

const { LINE_UP, KING_AND_QUEEN, UBC, QNA, CONTACTS, PARTNERS, MEDIA } = APP_ROUTES;

export const usefulLinks: UsefulLinkType[] = [
  {
    linkTo: LINE_UP,
    headline: 'Line up a program',
    children:
      'Zajímá vás, kdo vystoupí na letošním Majálesu UTB? Připravte se na hudební festival plný energie a skvělých kapel.',
  },
  {
    linkTo: KING_AND_QUEEN,
    headline: <>Král a královna</>,
    children:
      'Zúčastněte se soutěže o tituly Majálesových královských párů a nechte se unést unikátními soutěžními disciplínami.',
  },
  // {
  //   linkTo: UBC,
  //   headline: 'UBC',
  //   children: 'Soutěž UniBand Contest otevírá dveře studentským kapelám k vystoupení na velkých festivalech.',
  // },
  {
    linkTo: QNA,
    headline: 'Q&A',
    children: (
      <>
        Máte otázky ohledně Majálesu? Připravili jsme si pro vás odpovědi na ty nejčastější. Pokud máte jakoukoli jinou, neváhejte nám napsat.
      </>
    ),
  },
  // {
  //   linkTo: CONTACTS,
  //   headline: 'Kontakty',
  //   children: 
  //     'Kontakty na vedení Majálesu',
  // },
  {
    linkTo: CONTACTS,
    headline: 'Kontakty',
    children:
      'Potřebujete se spojit s konkrétním členem týmu? Zde najdete kontakty na vedení projektu, produkci, marketing i partnery.',
  },

  {
    linkTo: PARTNERS,
    headline: 'Partneři',
    children:
      'Poděkování patří také našim skvělým partnerům, kteří Majáles UTB podporují. Pokud chcete být partnerem i vy, kontaktujte nás.',
  },
  {
    linkTo: MEDIA,
    headline: 'Média',
    children:
      'Sháníte naše logo, tiskovou zprávu nebo třeba fotografie z loňského ročníku? Vše jsme pro vás přehledně připravili tady.',
  },
];
