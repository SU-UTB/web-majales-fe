import type { ReactNode } from 'react';

export type HeadProps = {
  title: string;
  description: string;
  image?: string;
};

export type NavLinkType = {
  text: string;
  linkTo: string;
};

export type UsefulLinkType = {
  linkTo: string;
  headline: ReactNode;
  children: ReactNode;
};

export type SvgProps = {
  width: number;
  height?: number;
  fill?: string;
};

export type Colors = 'white' | 'black' | 'beige' | 'pink' | 'orange' | 'lightOrange' | 'violet' | 'blue' | 'darkDarkBlue' | 'lightPink' | 'transparent';

export type ContactType = {
  position: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
};

export type QuestionType = {
  question: string;
  answer: ReactNode;
};

export type PartnerType = {
  img: string;
  alt: string;
  link: string;
};

export type ExternalLinkType = {
  link: string;
  text?: string;
  icon?: ReactNode;
  className?: string;
  'data-track-event'?: string;
  'data-track-category'?: string;
  'data-track-label'?: string;
};

export type FooterItemType = {
  logo: string;
  logoName: string;
  socials: ExternalLinkType[];
};

export type IGFeedType = {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
};

export type BandType = {
  img: string;
  title: string;
  link?: string;
};

export type CountdownDateValueType = {
  months: number;
  days: number;
  hours: number;
};
