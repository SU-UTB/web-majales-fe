import video from '../../assets/videos/majales-2022.mp4';
import { Container } from '../shared/Container';

export const BaseInfoSection = () => {
  return (
    <section id="zakladni-informae" className="bg-purple">
      <Container>
        <div className="flex flex-wrap gap-8 xl:gap-12 w-full justify-between py-8 xl:py-16 xl:text-p-big">
          <div className="w-[492px] space-y-2">
            <p>
              Vstup <span className="font-semibold">ZDARMA</span> pro všechny
            </p>
            <p>2 stage se 7 interprety </p>
            <p>Food & Chill-out zóna</p>
            <p>Doprovodný program</p>
            <p>Král a Královna & Princ a Princezna Majálesu</p>
            <p>To a mnohem víc na Majálesu UTB!</p>
          </div>
          <video width={685} height={380} className="bg-beige rounded-2xl text-blue" autoPlay muted controls>
            <source src={video} type="video/mp4" />
            video z roku 2022
          </video>
        </div>
      </Container>
    </section>
  );
};
