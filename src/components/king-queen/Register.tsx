import dayjs from 'dayjs';
import { KING_QUEEN_REGISTRATION_DATE } from '../../config/constants';
import { ExternalLink } from '../shared/ExternalLink';

type Props = {
  registerLink: string;
};

export const Register = ({ registerLink }: Props) => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-8 items-center">
      <ExternalLink
        link={registerLink}
        text="Registrovat"
        className="inline-block px-6 py-2 text-darkDarkBlue bg-beige rounded-xl"
      />
      {dayjs().isBefore(dayjs(KING_QUEEN_REGISTRATION_DATE)) && (
        <p className="-skew-x-3 bg-beige px-2">registrace se spouští od 1. 4. 2024</p>
      )}
    </div>
  );
};
