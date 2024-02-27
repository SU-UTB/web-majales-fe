import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className="w-full max-w-screen-2xl mx-auto px-4 xl:px-0">{children}</div>;
};
