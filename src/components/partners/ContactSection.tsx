import anicka_d from '../../assets/img/contacts/anicka_d.webp?url';
import { ContactItem } from '../contacts/ContactItem';
import { SectionContainer } from '../shared/SectionContainer';
import { ArrowSquare } from '../svg/elements/ArrowSquare';
import { AsteriskSquare } from '../svg/elements/AsteriskSquare';
import type { CheckerSquare } from '../svg/elements/CheckerSquare';
import { CheckerTriangleTransparent } from '../svg/elements/CheckerTriangleTransparent';
import { SquareWithCircle } from '../svg/elements/SquareWithCircle';
import { Star } from '../svg/elements/Star';
import { Triangle } from '../svg/elements/Triangle';

export const ContactSection = () => {
  return (
    <SectionContainer id="kontakty" bgColor="lightPink">
      <div className="text-violet space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-medium">Máte zájem o&nbsp;partnerství?</h1>
          <p>
            Poděkování patří také našim skvělým partnerům, kteří Majáles UTB podporují. Pokud chcete být partnerem
            i&nbsp;vy, kontaktujte nás.
          </p>
        </div>
        <ContactItem
          position="Kontaktní osoba pro sponzoring"
          name="ANNA DAREBNÍČKOVÁ"
          email="darebnickova@sutb.cz"
          phone='+420 721 948 952'
          photo={anicka_d}
          textColor="violet"
        />
      </div>


      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0 z-10">
        <div className="relative">
          <Star className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24 rotate-180" colorMain='fill-pink' colorSecondary='fill-beige' />
          <SquareWithCircle className="absolute -rotate-90 bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24" colorBgLeft='fill-violet' colorBgRight='fill-violet' colorCirLeft='fill-beige' colorCirRight='fill-pink'/>
          <Triangle className="absolute rotate-180 bottom-0 md:bottom-0 right-24 md:right-48 h-12 md:h-24" colorMain='fill-beige' />
        </div>
      </div>
    </SectionContainer>
  );
};
