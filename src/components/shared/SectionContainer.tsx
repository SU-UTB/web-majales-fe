import type { CSSProperties, ReactNode } from 'react';
import type { Colors } from '../../AppTypes';
import { Container } from './Container';

type Props = {
  id: string;
  children: ReactNode;
  bgColor?: Colors;
  style?: CSSProperties;
};

export const SectionContainer = ({ id, children, bgColor = 'transparent', style }: Props) => {
  return (
    <section id={id} className={`py-8 lg:py-16 bg-${bgColor} bg-no-repeat bg-contain`} style={style}>
      <Container>{children}</Container>
    </section>
  );
};
