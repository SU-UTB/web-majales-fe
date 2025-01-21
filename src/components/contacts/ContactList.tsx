import { contacts } from '../../data/contacts';
import { SectionContainer } from '../shared/SectionContainer';
import { BigTriangle } from '../svg/elements/BigTriangle';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { SquareWithCircle } from '../svg/elements/SquareWithCircle';
import { Triangle } from '../svg/elements/Triangle';
import { ContactItem } from './ContactItem';
import { OrganizerItem } from './OrganizerItem';

export const ContactList = () => {
  return (
    <SectionContainer
      id="kontakty-seznam"
      className='text-white'
      bgColor='pink'
    >
      <h2 className="text-h2-reversed">Kontakty</h2>
      <OrganizerItem />
      <div className="py-4 md:py-12 grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:gap-y-12 relative z-20">
        {contacts.map((contact) => (
          <ContactItem {...contact} key={contact.email} />
        ))}
      </div>
      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <BigTriangle className="absolute top-0 md:top-0 right-0 md:right-0 h-32 md:h-60 " color='#FFE2DE' />
          <Triangle className="absolute top-12 md:top-24 right-0 md:right-0 h-12 md:h-24 rotate-180" color='#FFFFFF' />
          <CheckerSquare className="absolute top-24 md:top-48 right-0 md:right-0 h-12 md:h-24" color1='#FFFFFF' color2='#1F2041' />
          <CheckerSquare className="absolute top-36 md:top-72 right-0 md:right-0 h-12 md:h-24" color1='#1F2041' color2='#FFFFFF' />
          <SquareWithCircle className="absolute top-48 md:top-96 right-0 md:right-0 h-12 md:h-24" colorBg='#1F2041' colorLeftHalf='#FFE2DE' colorRightHalf='#E7548A' />
          <Triangle className="absolute top-60 md:top-120 right-0 md:right-0 h-12 md:h-24 rotate-90" color='#6459FD' />
        </div>
      </div>
    </SectionContainer>
  );
};
