import { MAJALES_DATE } from '../../config/constants';

import { Container } from '../shared/Container';
import { HeadlineBubble } from '../shared/HeadlineBubble';

import { MajalesHeadline } from '../svg/MajalesHeadline';

export const LandingSection = () => {
  return (
    <section
      id="landing"
      className="pt-12 pb-32 xl:py-20 bg-contain bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/img/landing-left.webp'), url('/assets/img/landing-right.webp')",
        backgroundPosition: 'left, right',
      }}
    >
      <Container>
        <div className="relative flex justify-center">
          <MajalesHeadline width={706} />
          <div className="absolute z-10 top-full md:top-[80%] left-0 md:left-[10%]">
            <HeadlineBubble fillColor="#4400FF" rotationValue={10}>
              <h2 className="text-h2-mobile md:text-h2 text-beige">{MAJALES_DATE.format('D. M. YYYY')}</h2>
            </HeadlineBubble>
          </div>
        </div>
      </Container>
    </section>
  );
};
