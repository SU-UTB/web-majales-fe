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

export type Colors = 'white' | 'black' | 'beige' | 'orange' | 'blue' | 'purple' | 'transparent';

export type ContactType = {
  position: string;
  name: string;
  email: string;
};

export type QuestionType = {
  question: string;
  answer: ReactNode;
};

export type PartnerType = {
  img: string;
  alt: string;
};

export type ExternalLinkType = {
  link: string;
  text?: string;
  icon?: ReactNode;
  className?: string;
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
