import type { QuestionType } from '../AppTypes';

export const questions: QuestionType[] = [
  {
    question: 'Kde a za kolik koupím vstupenku?',
    answer:
      'Je naší mnohaletou tradicí, že na Majáles UTB je vstup ZDARMA. Proto vstupenku kupovat nemusíte a ani se nepotřebujete předem registrovat. Stačí přijít 3. 5. 2024 do parku před Baťovou vilou.',
  },
  {
    question: 'Je v areálu bankomat?',
    answer:
      'V majálesovém areálu nebude k dispozici bankomat. Proto si prosím vyberte hotovost předem. Nezaručujeme, že u prodejců půjde platit kartou.',
  },
  {
    question: 'Jak se k vám dostanu?',
    answer:
      'Dostanete se k nám pohodlně pěšky z centra Zlína (od autobusového a vlakového nádraží je to asi pět minut), ale i MHD. Nejblíže je to ze zastávky Zlín, Čepkov. Vstup do areálu je však směrem od ulice Výletní, proto se nelekněte, když uvidíte oplocený areál. Auto nechte raději doma. Přímo u areálu totiž není možné parkovat.',
  },
  {
    question: 'Co můžu a nesmím vnést do areálu?',
    answer: (
      <>
        Do areálu vás nepustíme s alkoholickými nápoji, zbraněmi, pyrotechnikou a&nbsp;podobně. Kompletní seznam
        naleznete v&nbsp;
        <a
          href="https://drive.google.com/file/d/1tRZokCPlcyfR8DeEA5XFdgAIOoiOx2Uh/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer external"
          className="underline"
        >
          návštěvním&nbsp;řádu
        </a>
        .
      </>
    ),
  },
];
