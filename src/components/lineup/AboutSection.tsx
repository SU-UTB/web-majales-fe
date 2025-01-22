import { CAN_SHOW_BANDS } from '../../config/constants';
import { ExternalLink } from '../shared/ExternalLink';
import { SectionContainer } from '../shared/SectionContainer';
import { BigTriangle } from '../svg/elements/BigTriangle';

export const AboutSection = () => {
  return (
    <SectionContainer id="lineup" bgColor="pink" className='text-white'>
      <h2 className="text-h2">Line up</h2>
      <div className="max-w-[800px] space-y-4">
        {CAN_SHOW_BANDS ? (
          <>
            <p>Měli byste zájem vystoupit jakožto interpret Majálesu UTB 2025?</p>
            <p>
              Dejte nám vědět na našich sociálních sítích:{' '}
              <strong>
                <a href="https://www.facebook.com/studentskaunieutb">Facebook</a>
              </strong>{' '}
              &nbsp;nebo&nbsp;&nbsp;
              <strong>
                <a href="https://www.instagram.com/studentskaunieutb/">Instagram</a>
              </strong>
            </p>
          </>
        ) : (
          <>
            <p>
              Kompletní line-up vám zatím neprozradíme, ale těšit se můžete na spoustu interpretů. Ti se postupně
              vystřídají na dvou stagích. A&nbsp;můžeme vám slíbit, že tobude fakt něco. Těšit se totiž můžete na
              interprety různých žánrů, a&nbsp;to od rocku přes pop až po rap.
            </p>
            <p>
              Mimo jiné se můžete zapojit i&nbsp;do doprovodných programů, ve kterých můžete vyhrát hodnotné ceny nebo
              se prostě jen pořádně zasmát, navštívit Chill-out zónu, kde si odpočinete, nebo si zajít na dobré jídlo
              a&nbsp;pití. V&nbsp;areálu se rozhodně nudit nebudete.
            </p>
          </>
        )}
      </div>
      <div className="absolute top-0 right-0">
        <div className="relative">
          <BigTriangle className="absolute top-0 md:top-0 right-0 md:right-0 h-24 md:h-48" color='#FFE2DE'/>
        </div>
      </div>
    </SectionContainer>
  );
};
