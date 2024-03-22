import { HeadlineBubble } from '../shared/HeadlineBubble';
import { SectionContainer } from '../shared/SectionContainer';
import { Map } from './Map';
import { UsefulLinkList } from './UsefulLinkList';

export const AboutSection = () => {
  return (
    <SectionContainer
      id="co-je-majales"
      className="lg:bg-[url('/assets/img/about-left.webp'),_url('/assets/img/about-right.webp')] bg-[position:top_left,_100%_40%]"
      style={{
        backgroundSize: '700px',
      }}
    >
      <HeadlineBubble width={400}>
        <h2 className="font-normal text-p md:text-[38px] text-beige text-center">
          Co je
          <br />
          <span className="text-h2-reversed-mobile md:text-h2-reversed">Majáles UTB?</span>
        </h2>
      </HeadlineBubble>
      <div className="p-8 space-y-4 max-w-[600px] bg-beige rounded-xl">
        <p>
          Jedná se o studenty pořádaný multižánrový open-air festival s nabitým programempro všechny věkové kategorie!
        </p>
        <p>
          Těšit se můžete na dvě stage plné živé hudby, Chill-out zónu, Food zónu anadupaný doprovodný program, ať už
          přímo v den D nebo i v týdnech předsamotnou akcí.
        </p>
        <p>
          Projděte se s námi centrem Zlína v prvomájovém průvodu, zapojte se do soutěžekapel UNIBAND CONTEST, díky které
          si zahrajete na studentských Majálesech v Brně, Ostravě a ve Zlíně nebo si třeba v den Majálesu vybojujte
          královský titul.
        </p>
        <p>Zní to dobře, co? Těšíme se na vás už 3. května v parku před Baťovou vilou.</p>
      </div>
      <Map />
      <UsefulLinkList />
    </SectionContainer>
  );
};
