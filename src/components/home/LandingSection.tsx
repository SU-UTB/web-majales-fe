import { MAJALES_DATE } from '../../config/constants';

import { Container } from '../shared/Container';
import { HeadlineBubble } from '../shared/HeadlineBubble';

import { MajalesHeadline } from '../svg/MajalesHeadline';

export const LandingSection = () => {
  return (
    <section id="landing" className="py-12 xl:py-20">
      <Container>
        <div className="relative mx-auto max-w-max">
          <MajalesHeadline width={706} />
          <div className="absolute z-10 top-[80%]">
            <HeadlineBubble fillColor="#4400FF" rotationValue={10}>
              <h2 className="text-h2 text-beige">{MAJALES_DATE.format('D. M. YYYY')}</h2>
            </HeadlineBubble>
          </div>
        </div>
      </Container>
    </section>
  );
};
