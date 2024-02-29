import { Container } from '../shared/Container';
import { HeadlineBubble } from '../shared/HeadlineBubble';
import { Map } from './Map';

export const AboutSection = () => {
  return (
    <section id="co-je-majales" className="py-8 xl:py-16">
      <Container>
        <HeadlineBubble width={400}>
          <h2 className="font-normal text-[38px] text-beige text-center">
            Co je
            <br />
            <span className="text-h2-reversed">Majales UTB?</span>
          </h2>
        </HeadlineBubble>
        <div className="py-8 space-y-4 max-w-[600px]">
          <p>
            Jedná se o studenty pořádaný multižánrový open-air festival s nabitým programempro všechny věkové kategorie!
          </p>
          <p>
            Těšit se můžete na dvě stage plné živé hudby, Chill-out zónu, Food zónu anadupaný doprovodný program, ať už
            přímo v den D nebo i v týdnech předsamotnou akcí.
          </p>
          <p>
            Projděte se s námi centrem Zlína v prvomájovém průvodu, zapojte se do soutěžekapel UNIBAND CONTEST, díky
            které si zahrajete na studentských Majálesech v Brně, Ostravě a ve Zlíně nebo si třeba v den Majálesu
            vybojujte královský titul.
          </p>
          <p>Zní to dobře, co? Těšíme se na vás už 3. května v parku před Baťovou vilou.</p>
        </div>
        <Map />
      </Container>
    </section>
  );
};
