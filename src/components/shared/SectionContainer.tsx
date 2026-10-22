import type { CSSProperties, ReactNode } from 'react';
import { Container } from './Container';

type Props = {
  id: string;
  children: ReactNode;
  bgColor?: string;
  className?: string;
  style?: CSSProperties;
};

export const SectionContainer = ({
  id,
  children,
  bgColor = 'bg-beige',
  className = '',
  style,
}: Props) => {
  const bgClass = bgColor ? (bgColor.startsWith('bg-') ? bgColor : `bg-${bgColor}`) : '';

  return (
    <section
      id={id}
      className={`py-8 lg:py-16 bg-no-repeat bg-contain relative ${bgClass} ${className}`.trim()}
      style={style}
    >
      <Container>{children}</Container>
    </section>
  );
};
