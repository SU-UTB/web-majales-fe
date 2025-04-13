import DefaultPhoto from '../../assets/img/contacts/default.jpg?url';
import { ContactItem } from '../contacts/ContactItem';
import { SectionContainer } from '../shared/SectionContainer';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { AsteriskSquare } from '../svg/elements/AsteriskSquare';
import { CheckerSquare } from '../svg/elements/CheckerSquare';
import { CheckerTriangleTransparent } from '../svg/elements/CheckerTriangleTransparent';
import { Triangle } from '../svg/elements/Triangle';

export const GetOurLogoSection = () => {
  return (
    <SectionContainer id="media-logo" bgColor='darkDarkBlue' className="relative py-14 md:py-20 lg:py-24">
      <div className="max-w-2xl space-y-8 text-white pb-8 pr-6">
        <p>
          Sháníte naše logo, tiskovou zprávu nebo třeba fotografie z loňského ročníku?<br /> Vše jsme pro vás přehledně
          připravili tady.
        </p>
        <a
          href="https://drive.google.com/drive/folders/1yJkrVtKaPwjG8hMc4S5ObNAtqRgY9PTI"
          target="_blank"
          rel="noopener noreferrer external"
          className="bg-orange px-6 py-2 rounded-xl text-white inline-block"
        >
          Stáhnout
        </a>
        <ContactItem
          position="Kontaktní osoba pro média"
          name="MARTIN JANOTKA"
          email="janotka@sutb.cz"
          phone='+421 910 339 794'
          photo={DefaultPhoto}
          textColor="white"
        />
      </div>
      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0 z-10">
        <div className="relative">
          <Triangle className="absolute bottom-0 md:bottom-0 right-36 md:right-72 h-12 md:h-24 rotate-180" color='#FFE2DE' />
          <ArrowSquare className="absolute bottom-0 md:bottom-0 right-24 md:right-48 h-12 md:h-24 rotate-90" color='#E7548A' />
          <CheckerSquare className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24" color1='#FF785A' color2='#1F2041' />
          <AsteriskSquare className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24 rotate-90" color='#FFE2DE' asteriskColor='#FF785A' />
          <CheckerSquare className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24" color1='#E7548A' color2='#FFFFFF' />
          <CheckerTriangleTransparent className="absolute bottom-24 md:bottom-48 right-0 md:right-0 h-12 md:h-24 -rotate-90" color='#6459FD' />
        </div>
      </div>
    </SectionContainer>
  );
};
