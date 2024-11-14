import { SectionContainer } from '../shared/SectionContainer';
import { AboutContent } from './AboutContent';

export const AboutSection = () => {
  return (
    <SectionContainer id="kral-a-kralovna" bgColor="purple">
      <div className="space-y-12">
        <AboutContent />
        {/* <Register registerLink="https://docs.google.com/forms/d/113IkYHtUnrcFXTQybnU9GNiz4d0crpIdnoFt3w1alew/viewform" /> */}
      </div>
    </SectionContainer>
  );
};
