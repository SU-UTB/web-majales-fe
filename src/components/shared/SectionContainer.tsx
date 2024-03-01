import type { ReactNode } from 'react';
import { Container } from './Container';

type Props = {
  id: string;
  bgColor?: string;
  children: ReactNode;
};

export const SectionContainer = ({ id, bgColor, children }: Props) => {
  return (
    <section id={id} className={`py-8 lg:py-16 bg-${bgColor}`}>
      <Container>{children}</Container>
    </section>
  );
};
