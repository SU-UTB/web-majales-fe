import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className="w-full max-w-screen-xl mx-auto px-24 xl:px-0">{children}</div>;
};
