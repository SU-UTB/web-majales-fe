import { SectionContainer } from '../shared/SectionContainer';

export const BaseInfoSection = () => {
  return (
    <SectionContainer id="zakladni-informae" bgColor="lightpink">
      <div className="flex flex-wrap gap-8 xl:gap-12 w-full lg:justify-between py-8 xl:py-16 xl:text-p-big items-center justify-center">
        <div className="w-full max-w-[685px] lg:max-w-max space-y-2 text-p-big">
          <p>
            Vstup <span className="font-semibold">ZDARMA</span> pro všechny
          </p>
          <p>2 stage s 8 interprety </p>
          <p>Food & Chill-out zóna</p>
          <p>Doprovodný program</p>
          <p>Král a Královna Majálesu</p>
          <p>To a mnohem víc na Majálesu UTB!</p>
        </div>
        <iframe
          width="685"
          height="380"
          src="https://www.youtube.com/embed/ao12Gek8WRg?si=N95euryS4_R8r7gT"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="bg-beige rounded-2xl"
        />
      </div>
    </SectionContainer>
  );
};
