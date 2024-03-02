import { SectionContainer } from '../shared/SectionContainer';

export const AboutSection = () => {
  return (
    <SectionContainer id="lineup" bgColor="purple">
      <h2 className="text-h2">Line up</h2>
      <div className="max-w-[800px] space-y-4">
        <p>
          Kompletní line-up vám zatím neprozradíme, ale těšit se můžete celkem na 7interpretů. Ti se postupně vystřídají
          na dvou stagích. A můžeme vám slíbit, že tobude fakt něco. Těšit se totiž můžete na interprety různých žánrů,
          a to od rocku přespop až po rap.
        </p>
        <p>
          Už teď vám ale můžeme prozradit, že na Majálesu UTB vystoupí výherci UniBandContestu. Chcete ovlivnit, kdo to
          bude? Zapojte se do hlasování – proklik?
        </p>
        <p>
          Mimo jiné se můžete zapojit i do doprovodných programů, ve kterých můžete vyhráthodnotné ceny nebo se prostě
          jen pořádně zasmát, navštívit Chill-out zónu, kde si pořádně odpočinete, nebo si zajít na dobré jídlo a pití.
          V areálu se rozhodně nudit nebudete.
        </p>
      </div>
    </SectionContainer>
  );
};
