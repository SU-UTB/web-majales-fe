import { ContactItem } from '../contacts/ContactItem';
import { SectionContainer } from '../shared/SectionContainer';
import DefaultPhoto from '../../assets/img/contacts/default.jpg?url';

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
          name="ANNA DAREBNÍČKOVÁ"
          email="darebnickova@sutb.cz"
          phone='+420 721 948 952'
          photo={DefaultPhoto}
          textColor="white"
        />
      </div>
    </SectionContainer>
  );
};
