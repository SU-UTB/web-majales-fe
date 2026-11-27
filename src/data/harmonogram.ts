export type HarmonogramItemType = {
  time: string;
  band: string;
};

export const harmonogramAStage: HarmonogramItemType[] = [
  {
    time: '14:00',
    band: 'Otevření areálu',
  },
  {
    time: '14:30 – 15:00',
    band: 'Zahájení festivalu a Qo\u010dna',
  },
  {
    time: '15:00 – 16:00',
    band: 'SYMPL',
  },
  {
    time: '17:00 – 18:00',
    band: 'Focus Rock',
  },
  {
    time: '19:00 – 20:00',
    band: 'TOJO',
  },
  {
    time: '21:00 – 22:00',
    band: 'Michal Hr\u016fza',
  },
  {
    time: '23:00 – 24:00',
    band: 'Hospodsk\u00fd Bordel',
  },
];

export const harmonogramBStage: HarmonogramItemType[] = [
  {
    time: '16:00 – 17:00',
    band: 'Analog Killer + U Dance UTB',
  },
  {
    time: '18:00 – 19:00',
    band: 'beira',
  },
  {
    time: '20:00 – 21:00',
    band: 'Dukla',
  },
  {
    time: '22:00 – 23:00',
    band: 'Mat213 + special guests',
  },
];

// Backward compatibility aliases if needed
export const utbTrinityStage = harmonogramAStage;
export const barumStage = harmonogramBStage;

