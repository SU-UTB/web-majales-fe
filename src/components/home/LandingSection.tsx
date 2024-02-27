import { MAJALES_DATE, MAJALES_TITLE } from '../../config/constants';

import { Container } from '../shared/Container';
import { HeadlineBubble } from '../shared/HeadlineBubble';

import majalesHeadline from '../../assets/img/majales-headline.svg?url';

export const LandingSection = () => {
  return (
    <section id="landing" className="py-12 xl:py-20">
      <Container>
        <div className="relative mx-auto max-w-max">
          <img src={majalesHeadline} alt={`${MAJALES_TITLE} - ${MAJALES_DATE}`} width={700} height={230} />
          <div className="absolute z-10 top-[80%]">
            <HeadlineBubble fillColor="#4400FF" rotationValue={10}>
              {MAJALES_DATE}
            </HeadlineBubble>
          </div>
        </div>
      </Container>
    </section>
  );
};
