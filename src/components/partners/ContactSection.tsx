import { ContactItem } from '../contacts/ContactItem';
import { SectionContainer } from '../shared/SectionContainer';
import JankaPhoto from '../../assets/img/contacts/janka.jpg?url';

export const ContactSection = () => {
  return (
    <SectionContainer id="kontakty" bgColor="blue">
      <div className="text-white space-y-8">
        <div className="space-y-4">
          <h1 className="text-h2-reversed text-white">Máte zájem o&nbsp;partnerství?</h1>
          <p>
            Poděkování patří také našim skvělým partnerům, kteří Majáles UTB podporují. Pokud chcete být partnerem
            i&nbsp;vy, kontaktujte nás.
          </p>
        </div>
        <ContactItem
          position="Kontaktní osoba pro sales"
          name="JANKA NIEPELOVÁ"
          email="niepelova@sutb.cz"
          phone='+421 918 424 947'
          photo={JankaPhoto}
          textColor="white"
        />
      </div>
    </SectionContainer>
  );
};
