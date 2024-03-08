import { SectionContainer } from '../shared/SectionContainer';
import { Countdown } from './countdown/Countdown';

export const CountdownSection = () => {
  return (
    <SectionContainer id="kolik-casu-zbyva" bgColor="blue">
      <div className="flex flex-wrap justify-between items-center gap-8 text-beige">
        <h2 className="text-h2">Do Majálesu UTB 2024 zbývá</h2>
        <Countdown />
      </div>
    </SectionContainer>
  );
};
