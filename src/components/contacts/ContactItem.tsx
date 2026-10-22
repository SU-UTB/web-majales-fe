import type { ContactType } from '../../AppTypes';

type Props = ContactType & {
  textColor?: string;
};

export const ContactItem = ({ position, name, email, phone, photo, textColor = 'text-white' }: Props) => {
  const textClass = textColor ? (textColor.startsWith('text-') ? textColor : `text-${textColor}`) : '';

  return (
    <div className="flex flex-col">
      <h3 className={`${textClass} font-semibold`}>{position}</h3>
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
          <a
            href={`mailto:${email}`}
            data-track-event="click"
            data-track-category="Kontakty"
            data-track-label={`Kontakty/Email/${name}`}
          >
            {email}
          </a>
          <a
            href={`tel:${phone}`}
            data-track-event="click"
            data-track-category="Kontakty"
            data-track-label={`Kontakty/Phone/${name}`}
          >
            {phone}
          </a>
        </div>
      </div>
    </div>
  );
};
