import { MajalesHeadlineDateLanding } from '../shared/MajalesHeadlineDateLanding';
import { ContactList } from './ContactList';

export const ContactLandingSection = () => {
  return (
    <section
      id="kontakty"
      className="bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/img/qna-right.webp')",
        backgroundPosition: '100% 0%',
        backgroundSize: '400px',
      }}
    >
      <MajalesHeadlineDateLanding rightBg={null} />
      <ContactList />
    </section>
  );
};
