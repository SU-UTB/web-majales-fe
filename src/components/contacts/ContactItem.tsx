import type { Colors, ContactType } from '../../AppTypes';

type Props = ContactType & {
  textColor?: Colors;
};

export const ContactItem = ({ position, name, email, phone, textColor = 'orange' }: Props) => {
  return (
    <div className="flex flex-col">
      <h3 className={`text-${textColor} font-semibold`}>{position}</h3>
      <p className="uppercase font-medium">{name}</p>
      <a href={`mailto:${email}`}>{email}</a>
      <a href={`tel:${phone}`}>{phone}</a>
    </div>
  );
};
