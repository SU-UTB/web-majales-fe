import type { CSSProperties, ReactNode } from 'react';
import type { Colors } from '../../AppTypes';
import { colorHexMap } from '../../utils';
import { Container } from './Container';

type Props = {
  id: string;
  children: ReactNode;
  bgColor?: Colors;
  className?: string;
  style?: CSSProperties;
};

export const SectionContainer = ({ id, children, bgColor = 'beige', className, style }: Props) => {
  return (
    <section
      id={id}
      className={`py-8 lg:py-16 bg-no-repeat bg-contain relative ${className && className}`}
      style={{ backgroundColor: colorHexMap[bgColor], ...style }}
    >
      <Container>{children}</Container>
    </section>
  );
};
