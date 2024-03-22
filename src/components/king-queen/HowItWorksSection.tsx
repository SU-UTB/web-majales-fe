import { SectionContainer } from '../shared/SectionContainer';

export const HowItWorksSection = () => {
  return (
    <SectionContainer id="jak-to-funguje" className="lg:bg-[url('/assets/img/news-right.webp')] bg-[position:right]">
      <div className="space-y-8 max-w-2xl">
        <div>
          <h2 className="text-h2 text-orange">Kdo se může stát Princem a&nbsp;Princeznou?</h2>
          <p>
            Soutěžní dvojice musí být složena z&nbsp;muže a&nbsp;ženy, kteří mohou studovat na jakékoliv střední škole
            (každý může studovat na jiné).
          </p>
        </div>
        <div>
          <h2 className="text-h2 text-orange">Proč se přihlásit?</h2>
          <p>
            Čeká vás spousta zábavy a&nbsp;výzev. Předvedete nejen vaši krásu, ale také sehranost, inteligenci
            a&nbsp;kreativitu v&nbsp;týmových soutěžích. Navíc vás čekají hodnocené ceny od UTB a&nbsp;našich partnerů.
          </p>
        </div>
        <p>
          Tak na co ještě čekáte? Registrace končí <span className="font-semibold">30. 4. 2024</span>, nezmeškejte svoji
          šanci!
        </p>
      </div>
    </SectionContainer>
  );
};
