import { SectionContainer } from '../shared/SectionContainer';

export const HowItWorksSection = () => {
  return (
    <SectionContainer id="jak-to-funguje">
      <div className="space-y-8 max-w-2xl">
        <article>
          <h2 className="text-h2 text-orange">Kdo se může stát Princem a Princeznou?</h2>
          <p>
            Soutěžní dvojice musí být složena z muže a ženy, kteří mohou studovat na jakékolivstřední škole (každý může
            studovat na jiné).
          </p>
        </article>
        <article>
          <h2 className="text-h2 text-orange">Proč se přihlásit?</h2>
          <p>
            Čeká vás spousta zábavy a výzev. Předvedete nejen vaši krásu, ale také sehranost,inteligenci a kreativitu v
            týmových soutěžích. Navíc vás čekají hodnocené ceny odUTB a našich partnerů.
          </p>
        </article>
        <p>
          Tak na co ještě čekáte? Registrace končí <span className="font-semibold">30. 4. 2024</span>, nezmeškejte svoji
          šanci!
        </p>
      </div>
    </SectionContainer>
  );
};