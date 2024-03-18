import { MAJALES_HEADLINE_DATE_LANDING_LEFT_BG, MAJALES_HEADLINE_DATE_LANDING_RIGHT_BG } from '../../config/constants';
import { MajalesHeadline } from '../svg/MajalesHeadline';
import { MajalesHeadlineDate } from '../svg/MajalesHeadlineDate';
import { SectionContainer } from './SectionContainer';

type Props = {
  leftBg?: string;
  rightBg?: string | null;
};

export const MajalesHeadlineDateLanding = ({
  leftBg = MAJALES_HEADLINE_DATE_LANDING_LEFT_BG,
  rightBg = MAJALES_HEADLINE_DATE_LANDING_RIGHT_BG,
}: Props) => {
  return (
    <SectionContainer
      id="majales-headline"
      style={{
        backgroundImage: leftBg && rightBg ? `url(${leftBg}), url(${rightBg})` : `url(${leftBg})`,
        backgroundPosition: leftBg && rightBg ? 'left, right' : 'left',
      }}
    >
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 py-16">
        <MajalesHeadline width={410} />
        <MajalesHeadlineDate />
      </div>
    </SectionContainer>
  );
};
