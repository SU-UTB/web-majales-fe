import { ExternalLink } from '../shared/ExternalLink';
import { SectionContainer } from '../shared/SectionContainer';

export const AboutSection = () => {
  return (
    <SectionContainer id="lineup" bgColor="purple">
      <h2 className="text-h2">Line up</h2>
      <div className="max-w-[800px] space-y-4">
        <p>
          Kompletní line-up vám zatím neprozradíme, ale těšit se můžete celkem na 8 interpretů. Ti se postupně
          vystřídají na dvou stagích. A&nbsp;můžeme vám slíbit, že tobude fakt něco. Těšit se totiž můžete na interprety
          různých žánrů, a&nbsp;to od rocku přes pop až po rap.
        </p>
        <p>
          Už teď vám ale můžeme prozradit, že na Majálesu UTB vystoupí výherci UniBand Contestu. Více zjistíte na&nbsp;
          <ExternalLink link="https://unibandcontest.cz/" text="unibandcontest.cz" className="underline" />
        </p>
        <p>
          Mimo jiné se můžete zapojit i&nbsp;do doprovodných programů, ve kterých můžete vyhrát hodnotné ceny nebo se
          prostě jen pořádně zasmát, navštívit Chill-out zónu, kde si odpočinete, nebo si zajít na dobré jídlo
          a&nbsp;pití. V&nbsp;areálu se rozhodně nudit nebudete.
        </p>
      </div>
    </SectionContainer>
  );
};
