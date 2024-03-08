import { ContactItem } from '../contacts/ContactItem';
import { SectionContainer } from '../shared/SectionContainer';

export const ContactSection = () => {
  return (
    <SectionContainer id="kontakty" bgColor="blue">
      <div className="text-beige space-y-8">
        <div className="space-y-4">
          <h1 className="text-h2-reversed text-beige">Máte zájem o partnerství?</h1>
          <p>
            Poděkování patří také našim skvělým partnerům, kteří Majáles UTB podporují.Pokud chcete být partnerem i vy,
            kontaktujte nás.
          </p>
        </div>
        <ContactItem
          position="Kontaktní osoba pro sales"
          name="KAREL KRATOCHVIL"
          email="kratochvil@sutb.cz"
          textColor="beige"
        />
      </div>
    </SectionContainer>
  );
};
