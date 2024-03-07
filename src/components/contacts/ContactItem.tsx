import type { Colors, ContactType } from '../../AppTypes';

type Props = ContactType & {
  textColor?: Colors;
};

export const ContactItem = ({ position, name, email, textColor = 'orange' }: Props) => {
  return (
    <div>
      <h2 className="text-orange font-semibold">{position}</h2>
      <p className="uppercase">{name}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
};
