import type { ReactNode } from 'react';
import type { Colors } from '../../AppTypes';
import { Container } from './Container';

type Props = {
  id: string;
  children: ReactNode;
  bgColor?: Colors;
};

export const SectionContainer = ({ id, children, bgColor = 'beige' }: Props) => {
  return (
    <section id={id} className={`py-8 lg:py-16 bg-${bgColor}`}>
      <Container>{children}</Container>
    </section>
  );
};
