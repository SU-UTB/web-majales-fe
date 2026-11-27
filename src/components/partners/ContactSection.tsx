import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import bea from '../../assets/img/contacts/bea.webp?url';
import lucka from '../../assets/img/contacts/lucka.webp?url';
import { ContactItem } from '../contacts/ContactItem';
import { SectionContainer } from '../shared/SectionContainer';
import { Arc } from '../svg/shapes/Arc';
import { AskewStrip } from '../svg/shapes/AskewStrip';
import { BublyCircles } from '../svg/shapes/BublyCircles';
import { DotsSquare } from '../svg/shapes/DotsSquare';
import { DotsTriangle } from '../svg/shapes/DotsTriangle';
import { OpenTriangles } from '../svg/shapes/OpenTriangles';
import { Rays } from '../svg/shapes/Rays';
import { SquaredSquare } from '../svg/shapes/SquaredSquare';

export const ContactSection = () => {
  return (
    <SectionContainer
      id="kontakty"
      bgColor="bg-yellow"
      className="pt-28 pb-12 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20"
    >
      <div className="mx-auto grid max-w-5xl px-2 gap-10 sm:px-6 md:grid-cols-2 md:px-0 md:items-start md:gap-12 lg:gap-24">
        <div className="w-full min-w-0">
          <h2 className="font-sans text-xl font-bold leading-tight text-orange">
            Máte zájem o&nbsp;partnerství?
          </h2>
          <p className="mt-2 max-w-md font-sans text-base leading-snug text-darkPurple md:text-xl">
            Poděkování patří také našim skvělým partnerům, kteří
            <br className="hidden sm:block" /> Majáles UTB podporují. Pokud chcete být partnerem
            <br className="hidden sm:block" /> i&nbsp;vy, kontaktujte nás.
          </p>

          <ContactItem
            position="Manažerka sponzoringu"
            name="BEATRICE ROCCA"
            email="rocca@sutb.cz"
            phone="+420 776 311 203"
            photo={bea}
            level={2}
            className="mt-5"
          />
        </div>

        <div className="w-full min-w-0">
          <h2 className="font-sans text-xl font-bold leading-tight text-orange">Press kit</h2>
          <p className="mt-2 max-w-md font-sans text-base leading-snug text-darkPurple md:text-xl">
            Sháníte naše logo, tiskovou zprávu nebo třeba fotografie
            <br className="hidden sm:block" /> z loňského ročníku?
            <br className="hidden sm:block" /> Vše jsme pro vás přehledně připravili tady.
          </p>

          <ContactItem
            position="Manažerka PR"
            name="LUCIE BEČKOVÁ"
            email="beckova@sutb.cz"
            phone="+420 604 545 834"
            photo={lucka}
            level={2}
            className="mt-5"
          />

          <a
            href="https://drive.google.com/drive/folders/147j9gm0UYpwz2vGKWfxjh7AKkGzxAvvy"
            target="_blank"
            rel="noopener noreferrer external"
            data-track-event="click"
            data-track-category="Partneři"
            data-track-label="Partneři/Press Kit"
            className="mt-6 inline-flex h-12 w-40 items-center justify-center rounded-md bg-darkPurple px-8 text-sm font-bold text-white transition-colors hover:bg-orange"
          >
            Press kit
          </a>
        </div>
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <Rays className="absolute top-0 md:top-0 left-0 md:left-0 h-24 md:h-48" colorMain="stroke-darkPurple" colorBg="fill-lightGreen" />
          <DotLottieReact
            src="/animations/DotsSquare.json"
            loop
            autoplay
            className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24 aspect-square"
          />
        </div>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <BublyCircles className="absolute top-0 md:top-0 right-0 md:right-0 h-12 md:h-24 rotate-180" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <AskewStrip className="absolute top-12 md:top-24 right-0 md:right-0 h-12 md:h-24" colorMain="fill-orange" colorBg="fill-lightGreen" />
          <Arc className="absolute top-12 md:top-24 right-12 md:right-24 h-8 md:h-16 rotate-180" colorMain="fill-orange" />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <DotLottieReact
            src="/animations/SquaredSquare-green-purple.json"
            loop
            autoplay
            className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24 aspect-square"
          />
          <DotsTriangle className="absolute bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-transparent" />
          <OpenTriangles className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
        </div>
      </div>
    </SectionContainer>
  );
};
