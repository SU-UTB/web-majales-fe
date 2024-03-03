import type { Colors, ContactType } from '../../AppTypes';

type Props = ContactType & {
  textColor?: Colors;
};

export const ContactItem = ({ position, name, email, textColor = 'orange' }: Props) => {
  return (
    <div>
      <h3 className={`text-${textColor} font-semibold`}>{position}</h3>
      <p className="uppercase">{name}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
};
