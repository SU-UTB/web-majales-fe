import { Container } from '../shared/Container';

export const BaseInfoSection = () => {
  return (
    <section id="zakladni-informae" className="bg-purple">
      <Container>
        <div className="flex flex-wrap gap-8 xl:gap-12 w-full justify-center items-center py-8 xl:py-16 xl:text-p-big">
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
          <video src="" width={685} height={377} className="bg-beige rounded-2xl text-blue">
            video z roku 2022
          </video>
        </div>
      </Container>
    </section>
  );
};
