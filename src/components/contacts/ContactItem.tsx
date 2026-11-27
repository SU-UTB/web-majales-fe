import type { ContactType } from '../../AppTypes';

type Props = ContactType & {
  className?: string;
  textColor?: string;
};

export const ContactItem = ({
  position,
  name,
  email,
  phone,
  photo,
  level = 2,
  className = '',
  textColor,
}: Props) => {
  // Velikosti fotek a textů dle úrovně
  // Úroveň 1: Největší (např. vedení/projektové manažerky)
  // Úroveň 2: Střední (sekční manažeři)
  // Úroveň 3: Kompaktní (specialisté a dílčí role)
  const photoSizeClass =
    level === 1
      ? 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32'
      : level === 3
      ? 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24'
      : 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28';

  const positionTextClass =
    level === 1
      ? 'text-lg sm:text-xl md:text-2xl font-bold mb-2'
      : level === 3
      ? 'text-sm sm:text-base md:text-lg font-bold mb-1.5'
      : 'text-base sm:text-lg md:text-xl font-bold mb-1.5';

  const nameTextClass =
    level === 1
      ? 'text-base sm:text-lg md:text-xl font-bold'
      : level === 3
      ? 'text-xs sm:text-sm md:text-base font-bold'
      : 'text-sm sm:text-base md:text-lg font-bold';

  const detailTextClass =
    level === 1
      ? 'text-sm sm:text-base md:text-lg'
      : level === 3
      ? 'text-xs sm:text-xs md:text-sm'
      : 'text-xs sm:text-sm md:text-base';

  return (
    <div className={`flex flex-col w-fit min-w-0 ${className}`}>
      {/* Pozice nahoře v oranžové barvě podle vizuálu */}
      <h3 className={`text-orange font-sans tracking-wide leading-tight ${positionTextClass}`}>
        {position}
      </h3>

      {/* Tělo kontaktu: Kruhová fotka nalevo, údaje v tmavě fialové napravo */}
      <div className="flex items-center gap-3 sm:gap-4 md:gap-5 w-fit">
        <div className="shrink-0">
          <img
            src={photo}
            alt={name}
            loading="lazy"
            className={`${photoSizeClass} rounded-full object-cover shadow-sm ring-2 ring-lightGreen/40 transform transition-transform duration-200 hover:scale-105`}
          />
        </div>

        <div className={`flex flex-col min-w-0 text-darkPurple font-sans leading-snug ${detailTextClass}`}>
          <p className={`uppercase tracking-tight break-words text-darkPurple ${nameTextClass}`}>
            {name}
          </p>

          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="hover:text-orange transition-colors duration-150 whitespace-nowrap mt-0.5"
            data-track-event="click"
            data-track-category="Kontakty"
            data-track-label={`Kontakty/Phone/${name}`}
          >
            {phone}
          </a>

          <a
            href={`mailto:${email}`}
            className="hover:text-orange transition-colors duration-150 break-all"
            data-track-event="click"
            data-track-category="Kontakty"
            data-track-label={`Kontakty/Email/${name}`}
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
};
