import { MAJALES_DATE } from '../../config/constants';

import { Container } from '../shared/Container';
import { HeadlineBubble } from '../shared/HeadlineBubble';

import { MajalesHeadline } from '../svg/MajalesHeadline';

export const LandingSection = () => {
  return (
    <section
      id="landing"
      className="pt-12 pb-32 xl:py-20 bg-no-repeat bg-[url('/assets/img/landing-left-mob.webp'),_url('/assets/img/landing-right-mob.webp')] lg:bg-[url('/assets/img/landing-left.webp'),_url('/assets/img/landing-right.webp')] bg-[position:left,_right] bg-contain"
    >
      <Container>
        <div className="relative flex justify-center">
          <MajalesHeadline width={706} />
          <div className="absolute z-10 top-[120%] md:top-[80%] left-0 md:left-[10%]">
            <HeadlineBubble fillColor="#4400FF" rotationValue={10}>
              <h2 className="text-h2-mobile md:text-h2 text-beige">{MAJALES_DATE.toLocaleDateString('cs-CZ')}</h2>
            </HeadlineBubble>
          </div>
        </div>
      </Container>
    </section>
  );
};
