import { SectionContainer } from '../shared/SectionContainer';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { BigTriangle } from '../svg/elements/BigTriangle';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { Triangle } from '../svg/elements/hero/Triangle';
import { AboutContent } from './AboutContent';
import { Register } from './Register';

export const AboutSection = () => {
  return (
    <SectionContainer id="kral-a-kralovna" bgColor="lightpink">
      <div className="space-y-12">
        <AboutContent />
        {/* <Register registerLink="https://docs.google.com/forms/d/113IkYHtUnrcFXTQybnU9GNiz4d0crpIdnoFt3w1alew/viewform" /> */}
      </div>
      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <BigTriangle className="absolute top-0 md:top-0 right-0 md:right-0 h-24 md:h-48" color='#FFE2DE'/>
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <Triangle className="absolute bottom-24 md:bottom-48 right-0 md:right-0 h-12 md:h-24 rotate-180" color='#FFFFFF' />
          <CheckerSquare className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24" color1='#FFE2DE' color2='#FF785A' />
          <ArrowSquare className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24 rotate-90" color='#FFE2DE' />
        </div>
      </div>
    </SectionContainer>
  );
};
