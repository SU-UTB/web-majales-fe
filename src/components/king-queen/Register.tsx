import dayjs from 'dayjs';
import { KING_QUEEN_REGISTRATION_DATE } from '../../config/constants';
import { ExternalLink } from '../shared/ExternalLink';

type Props = {
  registerLink: string;
};

export const Register = ({ registerLink }: Props) => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-8 items-center">
      
      {/* 1. MOBILE BUTTON (Visible only on mobile) */}
      <ExternalLink
        link={registerLink}
        text="Registrovat"
        // This class hides it on desktop (md and larger)
        className="md:hidden inline-block bg-lightPink px-10 md:px-20 py-4 md:py-6 rounded-xl text-violet font-medium hover:bg-violet hover:text-white transition-colors"
        // Specific label for mobile
        data-track-event="click"
        data-track-category="KralAKralovna"
        data-track-label="KralAKralovna/Register/Mobile"
      />

      {/* 2. DESKTOP BUTTON (Visible only on desktop) */}
      <ExternalLink
        link={registerLink}
        text="Registrovat"
        // This class hides it on mobile, shows on desktop
        className="hidden md:inline-block bg-lightPink px-10 md:px-20 py-4 md:py-6 rounded-xl text-violet font-medium hover:bg-violet hover:text-white transition-colors"
        // Specific label for desktop
        data-track-event="click"
        data-track-category="KralAKralovna"
        data-track-label="KralAKralovna/Register/Desktop"
      />

      {dayjs().isBefore(dayjs(KING_QUEEN_REGISTRATION_DATE)) && (
        <p className="-skew-x-3 bg-beige px-2">registrace se spouští od 1. 4. 2024</p>
      )}
    </div>
  );
};