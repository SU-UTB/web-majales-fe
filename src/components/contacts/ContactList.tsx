import { contacts } from '../../data/contacts';
import { SectionContainer } from '../shared/SectionContainer';
import { ContactItem } from './ContactItem';
import { OrganizerItem } from './OrganizerItem';

export const ContactList = () => {
  return (
    <SectionContainer
      id="kontakty-seznam"
      className="lg:bg-[url('/assets/img/qna-right.webp')] bg-[position:100%_0]"
      style={{
        backgroundSize: '400px',
      }}
    >
      <h2 className="text-h2-reversed">Kontakty</h2>
      <OrganizerItem />
      <div className="py-4 md:py-12 grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:gap-y-12">
        {contacts.map((contact) => (
          <ContactItem {...contact} />
        ))}
      </div>
    </SectionContainer>
  );
};
