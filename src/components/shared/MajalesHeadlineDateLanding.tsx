import { MajalesHeadline } from '../svg/MajalesHeadline';
import { MajalesHeadlineDate } from '../svg/MajalesHeadlineDate';
import { Container } from './Container';

export const MajalesHeadlineDateLanding = () => {
  return (
    <Container>
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 py-16">
        <MajalesHeadline width={410} />
        <MajalesHeadlineDate />
      </div>
    </Container>
  );
};
