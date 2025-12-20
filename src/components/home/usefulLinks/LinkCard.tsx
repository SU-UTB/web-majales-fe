import type { UsefulLinkType } from '../../../AppTypes';

export const LinkCard = ({ linkTo, headline, children }: UsefulLinkType) => {

  return (
    <div className="flex flex-col px-4 md:px-12 gap-6 justify-self-center rounded-2xl bg-beige">
      <a
        href={linkTo}
        data-track-event="click"
        data-track-category="Mainpage"
        data-track-label={`Mainpage/UsefulLinks${linkTo}`}
        className="w-full p-8 bg-lightPink text-darkDarkBlue flex items-center justify-center rounded-2xl hover:bg-pink hover:text-white transition-colors"
      >
        <p className="text-xl md:text-3xl text-useful-link text-center">{headline}</p>
      </a>
      <div className="pr-2 w-full lg:px-2">{children}</div>
    </div>
  );
};