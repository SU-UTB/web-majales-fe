import type { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

export const MoreInfoPart = ({ title, children }: Props) => {
  return (
    <div className="space-y-4">
      <h2 className="text-h2">{title}</h2>
      {children}
    </div>
  );
};
