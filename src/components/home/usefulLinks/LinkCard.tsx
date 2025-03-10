import type { UsefulLinkType } from '../../../AppTypes';

export const LinkCard = ({ linkTo, headline, children }: UsefulLinkType) => {
  return (
    <div className="flex flex-col gap-6 justify-self-center rounded-2xl bg-beige">
      <a
        href={linkTo}
        className="w-full max-w-[380px] h-[260px] bg-lightpink text-darkDarkBlue flex items-center justify-center rounded-2xl hover:bg-blue hover:text-white transition-colors"
      >
        <h5 className="max-w-[200px] text-useful-link text-center">{headline}</h5>
      </a>
      <div className="pr-2 w-full max-w-[380px] lg:px-2">{children}</div>
    </div>
  );
};
