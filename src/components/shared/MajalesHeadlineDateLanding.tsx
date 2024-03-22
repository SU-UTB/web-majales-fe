import { MajalesHeadline } from '../svg/MajalesHeadline';
import { MajalesHeadlineDate } from '../svg/MajalesHeadlineDate';
import { SectionContainer } from './SectionContainer';

export const MajalesHeadlineDateLanding = () => {
  return (
    <SectionContainer
      id="majales-headline"
      className="bg-[url('/assets/img/majales-heading-left-mob.webp'),_url('/assets/img/majales-heading-right-mob.webp')] bg-[position:left,_right] lg:bg-[url('/assets/img/majales-heading-left.webp'),_url('/assets/img/majales-heading-right.webp')]"
    >
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 py-16">
        <MajalesHeadline width={410} />
        <MajalesHeadlineDate />
      </div>
    </SectionContainer>
  );
};
