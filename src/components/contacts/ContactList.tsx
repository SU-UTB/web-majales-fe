import { contacts } from '../../data/contacts';
import { Arc } from '../svg/shapes/Arc';
import { BublyCircles } from '../svg/shapes/BublyCircles';
import { DotsSquare } from '../svg/shapes/DotsSquare';
import { DotsTriangle } from '../svg/shapes/DotsTriangle';
import { Rays } from '../svg/shapes/Rays';
import { SquaredSquare } from '../svg/shapes/SquaredSquare';
import { SquareWithHalfCircles } from '../svg/shapes/SquareWithHalfCircles';
import { Target } from '../svg/shapes/Target';
import { TitsWithNipples } from '../svg/shapes/TitsWithNipples';
import { ContactItem } from './ContactItem';
import { OrganizerItem } from './OrganizerItem';

export const ContactList = () => {
  // Rozdělení kontaktů do 3 úrovní podle důležitosti
  const level1Contacts = contacts.filter((c) => (c.level ?? 2) === 1);
  const level2Contacts = contacts.filter((c) => (c.level ?? 2) === 2);
  const level3Contacts = contacts.filter((c) => (c.level ?? 2) === 3);

  // Pomocná komponenta pro vykreslení úrovně kontaktů
  // Na mobilu: 1 sloupec, zarovnáno vlevo k prvnímu kontaktu
  // Na tabletu (sm: 2 sloupce): Pokud lichý počet, poslední kontakt je na středu
  // Na PC (lg: 3 sloupce):
  //   - Pokud je počet násobkem 3: klasické 3 sloupce
  //   - Pokud zbývá 1 kontakt (total % 3 === 1): poslední kontakt je vycentrovaný přes celou šířku
  //   - Pokud zbývají 2 kontakty (total % 3 === 2): plné řádky po 3, a poslední 2 kontakty jsou v centrované 2sloupcové řadě
  const renderContactGrid = (
    items: typeof contacts,
    columns: 2 | 3,
    gapClass: string
  ) => {
    const total = items.length;

    // Pokud máme na 3sloupcovém zobrazení zbytek 2 kontakty, rozdělíme je:
    // Plné trojice v grid-cols-3 a poslední dvojici do samostatného centrovaného kontejneru se 2 sloupci
    if (columns === 3 && total % 3 === 2) {
      const fullTriples = items.slice(0, total - 2);
      const lastPair = items.slice(total - 2);

      return (
        <div className="flex flex-col items-center gap-y-10 sm:gap-y-12 w-fit">
          {/* Plné trojice */}
          {fullTriples.length > 0 && (
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${gapClass} w-fit justify-items-start`}
            >
              {fullTriples.map((contact) => (
                <div key={contact.email} className="w-fit max-w-sm">
                  <ContactItem {...contact} />
                </div>
              ))}
            </div>
          )}

          {/* Poslední dvojice: na mobilu 1 sloupec, na sm/lg 2 sloupce dokonale vycentrované podle středu */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 ${gapClass} w-fit justify-items-start`}
          >
            {lastPair.map((contact) => (
              <div key={contact.email} className="w-fit max-w-sm">
                <ContactItem {...contact} />
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div
        className={`grid grid-cols-1 ${
          columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'
        } ${gapClass} w-fit justify-items-start`}
      >
        {items.map((contact, index) => {
          let alignClass = '';

          if (columns === 3) {
            const remainder3 = total % 3;
            // Poslední položka, pokud zbývá přesně 1 na posledním řádku
            if (remainder3 === 1 && index === total - 1) {
              alignClass += ' lg:col-span-3 lg:justify-self-center';
            }

            // Pro tablet (sm: 2 sloupce), pokud je celkový počet lichý
            if (total % 2 === 1 && index === total - 1) {
              alignClass += ' sm:col-span-2 sm:justify-self-center';
              if (remainder3 === 1) {
                alignClass += ' lg:col-span-3 lg:justify-self-center';
              } else {
                alignClass += ' lg:col-span-1 lg:justify-self-start';
              }
            }
          } else if (columns === 2) {
            // Pro 2 sloupce, pokud je celkem lichý počet
            if (total % 2 === 1 && index === total - 1) {
              alignClass += ' sm:col-span-2 sm:justify-self-center';
            }
          }

          return (
            <div
              key={contact.email}
              className={`w-fit max-w-sm ${alignClass}`.trim()}
            >
              <ContactItem {...contact} />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="kontakty-seznam"
      className="bg-yellow relative min-h-screen pt-24 pb-8 sm:pt-28 sm:pb-8 md:pt-36 md:pb-16 overflow-hidden"
    >
      {/* Hlavní obsahová část s responsivní šířkou a paddingy */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 relative z-10 flex flex-col items-center">

        {/* Úroveň 1: Projektové manažerky */}
        {level1Contacts.length > 0 && (
          <div className="w-full max-w-4xl mb-12 sm:mb-16 md:mb-20 flex justify-center">
            {renderContactGrid(level1Contacts, 2, 'gap-8 sm:gap-12 md:gap-16')}
          </div>
        )}

        {/* Úroveň 2: Sekční manažeři */}
        {level2Contacts.length > 0 && (
          <div className="w-full mb-12 sm:mb-16 md:mb-20 flex justify-center">
            {renderContactGrid(level2Contacts, 3, 'gap-x-8 lg:gap-x-12 gap-y-10 sm:gap-y-12')}
          </div>
        )}

        {/* Úroveň 3: Koordinátoři a dílčí sekce */}
        {level3Contacts.length > 0 && (
          <div className="w-full mb-14 sm:mb-18 md:mb-24 flex justify-center">
            {renderContactGrid(level3Contacts, 3, 'gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-10')}
          </div>
        )}

        {/* Pořadatel (spodní část) */}
        <div className="w-full max-w-md flex justify-center pt-8 border-t border-lightGreen/50">
          <div className="w-fit max-w-sm">
            <OrganizerItem />
          </div>
        </div>
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <SquaredSquare className="absolute top-0 md:top-0 left-0 md:left-0 h-12 md:h-24" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
          <DotsTriangle className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24 rotate-180" colorMain="fill-lightGreen" colorBg="fill-transparent" />
          <DotsTriangle className="absolute top-12 md:top-24 left-0 md:left-0 h-12 md:h-24 rotate-180" colorMain="fill-lightGreen" colorBg="fill-transparent" />
        </div>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <BublyCircles className="absolute top-0 md:top-0 right-0 md:right-0 h-12 md:h-24 rotate-180" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          {/* Badge v pravém horním rohu */}
          <div className="absolute top-0 right-12 md:right-24 z-10">
            <span className="inline-flex items-center justify-center h-12 md:h-24 bg-lightGreen text-orange text-xl xs:text-xl sm:text-3xl md:text-5xl font-semibold px-4 xs:px-6 sm:px-8">
              Kontakty
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <DotsTriangle className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24 rotate-90" colorMain="fill-lightGreen" colorBg="fill-transparent" />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <div className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 w-12 md:h-24 md:w-24 bg-orange" />
          <Arc className="absolute bottom-0 md:bottom-0 right-4 md:right-8 h-8 md:h-16" colorMain="fill-lightGreen" />
          <Arc className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-8 md:h-16 -scale-x-100" colorMain="fill-orange" />
          <Rays className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-24 md:h-48 rotate-180" colorMain="stroke-orange" colorBg="fill-darkPurple" />
        </div>
      </div>
    </section>
  );
};
