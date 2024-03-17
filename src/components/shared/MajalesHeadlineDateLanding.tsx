import { MajalesHeadline } from '../svg/MajalesHeadline';
import { MajalesHeadlineDate } from '../svg/MajalesHeadlineDate';
import { SectionContainer } from './SectionContainer';

export const MajalesHeadlineDateLanding = () => {
  return (
    <SectionContainer
      id="majales-headline"
      style={{
        backgroundImage: "url('/assets/img/majales-heading-left.webp'), url('/assets/img/majales-heading-right.webp')",
        backgroundPosition: 'left, right',
      }}
    >
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 py-16">
        <MajalesHeadline width={410} />
        <MajalesHeadlineDate />
      </div>
    </SectionContainer>
  );
};
