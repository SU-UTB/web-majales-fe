import type { QuestionType } from '../AppTypes';
import { MAJALES_DATE } from '../config/constants';

export const questions: QuestionType[] = [
  {
    question: 'Kde a za kolik koupím vstupenku?',
    answer: (
      <>
        Je naší mnohaletou tradicí, že na Majáles UTB je vstup ZDARMA. Proto vstupenku kupovat nemusíte a ani se
        nepotřebujete předem registrovat. Stačí přijít {MAJALES_DATE.toLocaleDateString('cs-CZ')} do parku před Baťovou
        vilou.
      </>
    ),
  },
  {
    question: 'Lze v areálu platit kartou?',
    answer:
      'Ano! V celém areálu majálesu je bezkontaktní placení. Platit hotově můžete také, ale v každém stánku lze platit i kartou.'
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
          data-track-event="click"
          data-track-category="QNA"
          data-track-label="QNA/Návštěvní řád"
        >
          návštěvním&nbsp;řádu
        </a>
        .
      </>
    ),
  },
  {
    question: 'Jak udržujeme náš majáles čistý?',
    answer: (
      <>
        Společně s naším partnerem&nbsp;
        <a
          href="https://www.cistyfestival.cz/"
          target="_blank"
          rel="noopener noreferrer external"
          className="underline"
          data-track-event="click"
          data-track-category="QNA"
          data-track-label="QNA/Čistý festival"
        >
          Čistý festival</a> se staráme o třídění odpadu a minimalizaci dopadu naší akce na životní prostředí.
      </>
    ),
  },
];
