import type { ReactNode } from 'react';

type Props = {
  linkTo: string;
  img: string;
  alt: string;
  children: ReactNode;
};

export const LinkCard = ({ linkTo, img, alt, children }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <a href={linkTo} className="w-[380px] h-[260px]">
        <img src={img} alt={alt} width={380} height={260} className="w-full object-cover" />
      </a>
      <div>{children}</div>
    </div>
  );
};
