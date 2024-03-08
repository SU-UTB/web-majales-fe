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
  headline: string;
  children: ReactNode;
};

export type SvgProps = {
  width: number;
  height?: number;
  fill?: string;
};

export type Colors = 'white' | 'black' | 'beige' | 'orange' | 'blue' | 'purple';

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
