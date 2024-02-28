import { Container } from '../shared/Container';
import { Countdown } from './countdown/Countdown';

export const CountdownSection = () => {
  return (
    <section id="kolik-casu-zbyva" className="bg-blue text-beige">
      <Container>
        <div className="flex flex-wrap justify-between items-center py-8 xl:py-16 gap-8">
          <h2 className="text-h2">Do Majálesu UTB 2024 zbývá</h2>
          <Countdown />
        </div>
      </Container>
    </section>
  );
};
