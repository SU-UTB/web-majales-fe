import { usefulLinks } from '../../data/usefulLinks';
import { ArrowLeft } from '../svg/elements/ArrowLeft';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { DateRectangle } from '../svg/elements/DateRectangle';
import { DualTriangle } from '../svg/elements/DualTriangle';
import { Lightning } from '../svg/elements/Lightning';
import { Squares45 } from '../svg/elements/Squares45';
import { TextRectangle } from '../svg/elements/TextRectangle';
import { Triangle } from '../svg/elements/Triangle';
import { LinkCard } from './usefulLinks/LinkCard';

export const UsefulLinkList = () => {
  return (
    <section
      id="useful-links"
      className="pt-2 md:pt-12 pb-8 md:pb-32 xl:py-24 bg-no-repeat relative"
    >
      {/* Grid Section */}
      <div className="grid gap-8 lg:gap-12 pt-24 px-2">
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-16 py-8 content-center">
          {usefulLinks.map((link) => (
            <LinkCard key={link.linkTo} {...link} />
          ))}
        </div>
      </div>
      
      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <ArrowLeft className="h-12 md:h-24 rotate-180" colorMain='fill-lightPink' colorSecondary='fill-violet' />
          <DateRectangle className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24 w-52 md:w-120 overflow-y-hidden" colorMain='fill-pink'>
            <h2 className="text-lg md:text-4xl font-medium text-white">
              Co by se vám mohlo hodit
            </h2>
          </DateRectangle>
          <DualTriangle className="absolute rotate-180 top-0 md:top-0 left-64 md:left-144 h-12 md:h-24" colorMain='fill-violet' colorSecondary='fill-lightPink' />
          <Triangle className="absolute top-12 md:top-24 left-0 md:left-0 h-12 md:h-24" colorMain='fill-pink' />
        </div>
      </div>

      
      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <Squares45 className="h-12 md:h-24" colorMain='fill-lightPink' colorSecondary='fill-violet' />
          <Lightning className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24" colorMain='fill-pink' colorSecondary='fill-transparent' />
          <Triangle className="absolute rotate-180 bottom-0 md:bottom-0 right-24 md:right-48 h-12 md:h-24" colorMain='fill-violet' />
        </div>
      </div>
    </section>
  );
};
