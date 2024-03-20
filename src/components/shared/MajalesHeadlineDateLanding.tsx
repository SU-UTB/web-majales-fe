import {
  MAJALES_HEADLINE_DATE_LANDING_LEFT_BG,
  MAJALES_HEADLINE_DATE_LANDING_LEFT_BG_MOB,
  MAJALES_HEADLINE_DATE_LANDING_RIGHT_BG,
  MAJALES_HEADLINE_DATE_LANDING_RIGHT_BG_MOB,
} from '../../config/constants';
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
      className={`bg-[url('${MAJALES_HEADLINE_DATE_LANDING_LEFT_BG_MOB}'),_url('${MAJALES_HEADLINE_DATE_LANDING_RIGHT_BG_MOB}')] bg-[position:left,_right] lg:bg-[position:${leftBg && rightBg ? 'left,_right' : 'left'}] lg:bg-[${leftBg && rightBg ? `url('${leftBg}'),_url('${rightBg}')` : `url('${leftBg}')`}]`}
    >
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 py-16">
        <MajalesHeadline width={410} />
        <MajalesHeadlineDate />
      </div>
    </SectionContainer>
  );
};
