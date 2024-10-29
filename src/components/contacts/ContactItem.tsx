import type { Colors, ContactType } from '../../AppTypes';

type Props = ContactType & {
  textColor?: Colors;
};

export const ContactItem = ({ position, name, email, phone, photo, textColor = 'orange' }: Props) => {
  return (
    <div className="flex flex-col">
      <h3 className={`text-${textColor} font-semibold`}>{position}</h3>
      <div className="flex items-center gap-4">
        <div>
          <img
            src={photo}
            alt="contactIcon"
            className="rounded-full h-24 w-24 object-cover transform transition-transform duration-200 lg:hover:scale-175 lg:hover:shadow-lg"
          />
        </div>
        <div className="flex flex-col">
          <p className="uppercase font-medium">{name}</p>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={`tel:${phone}`}>{phone}</a>
        </div>
      </div>
    </div>
  );
};
