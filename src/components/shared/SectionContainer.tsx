import type { CSSProperties, ReactNode } from 'react';
import type { Colors } from '../../AppTypes';
import { Container } from './Container';

type Props = {
  id: string;
  children: ReactNode;
  bgColor?: Colors;
  style?: CSSProperties;
  className?: string;
};

export const SectionContainer = ({ id, children, bgColor = 'transparent', style, className }: Props) => {
  return (
    <section
      id={id}
      className={`py-8 lg:py-16 bg-${bgColor} bg-no-repeat bg-contain ${className ? className : ''}`}
      style={style}
    >
      <Container>{children}</Container>
    </section>
  );
};
