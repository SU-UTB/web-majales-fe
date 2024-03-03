import { contacts } from '../../data/contacts';
import { Container } from '../shared/Container';
import { ContactItem } from './ContactItem';
import { OrganizerItem } from './OrganizerItem';

export const ContactList = () => {
  return (
    <Container>
      <h2 className="text-h2-reversed">Kontakty</h2>
      <OrganizerItem />
      <div className="py-4 md:py-12 grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:gap-y-12">
        {contacts.map((contact) => (
          <ContactItem {...contact} />
        ))}
      </div>
    </Container>
  );
};
