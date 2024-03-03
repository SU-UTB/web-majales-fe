import type { ContactType } from '../../AppTypes';

export const ContactItem = ({ position, name, email }: ContactType) => {
  return (
    <div>
      <h3 className="text-orange font-semibold">{position}</h3>
      <p className="uppercase">{name}</p>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
};
