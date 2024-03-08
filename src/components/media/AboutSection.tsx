import { ContactItem } from '../contacts/ContactItem';
import { SectionContainer } from '../shared/SectionContainer';

export const AboutSection = () => {
  return (
    <SectionContainer id="pro-media" bgColor="purple">
      <h1 className="text-h2-reversed">Pro média</h1>
      <ContactItem
        position="Kontaktní osoba pro media relations"
        name="PETRA NĚMCOVÁ"
        email="nemcova@sutb.cz"
        textColor="black"
      />
    </SectionContainer>
  );
};
