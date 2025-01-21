import { usefulLinks } from '../../data/usefulLinks';
import { ArrowRightBottomOrangeLight } from '../svg/elements/ArrowRightBottomOrangeLight';
import { TextRectangle } from '../svg/elements/TextRectangle';
import { WhiteTriangle } from '../svg/elements/WhiteTriangle';
import { LinkCard } from './usefulLinks/LinkCard';

export const UsefulLinkList = () => {
  return (
    <section
      id="useful-links"
      className="pt-12 pb-24 md:pb-32 xl:py-24 bg-no-repeat relative"
    >
      {/* Title Section */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <ArrowRightBottomOrangeLight className="h-12 md:h-24" />
          <TextRectangle className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24 w-52 md:w-120 overflow-y-hidden" color='#E7548A'>
            <h2 className="text-h3-reversed-mobile md:text-h2-reversed text-white">
              Co by se vám mohlo hodit
            </h2>
          </TextRectangle>
          <WhiteTriangle className="absolute top-0 md:top-0 left-64 md:left-144 h-12 md:h-24 -rotate-90 overflow-hidden" />
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid gap-8 lg:gap-12 pt-24 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-16 py-8 content-center">
          {usefulLinks.map((link) => (
            <LinkCard key={link.linkTo} {...link} />
          ))}
        </div>
      </div>
    </section>
  );
};
