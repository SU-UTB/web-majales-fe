import { SectionContainer } from '../shared/SectionContainer';
import { AboutContent } from './AboutContent';
import { Register } from './Register';

export const AboutSection = () => {
  return (
    <SectionContainer id="kral-a-kralovna" bgColor="purple">
      <div className="space-y-12">
        <AboutContent />
        <Register />
      </div>
    </SectionContainer>
  );
};
