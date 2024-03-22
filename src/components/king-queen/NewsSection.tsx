import { HeadlineBubble } from '../shared/HeadlineBubble';
import { SectionContainer } from '../shared/SectionContainer';
import { Register } from './Register';

export const NewsSection = () => {
  return (
    <SectionContainer id="novinka" bgColor="blue">
      <HeadlineBubble>
        <h2 className="text-h2-reversed text-beige">Novinka</h2>
      </HeadlineBubble>
      <div className="text-beige py-8">
        <h2 className="text-h2">GENICZECH-M Princ a Princezna Majálesu</h2>
        <p>Představujeme vám novinku na letošním Majálesu UTB – soutěž o titul prince a princezny!</p>
      </div>
      <Register registerLink="https://docs.google.com/forms/d/e/1FAIpQLScRg9UM420GZu1A74pAHVqTRqSE3bHDNzhv0ZOAnEDGAFwFhw/viewform" />
    </SectionContainer>
  );
};
