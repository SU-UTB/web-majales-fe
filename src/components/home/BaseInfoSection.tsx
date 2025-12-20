import { useState } from 'react';
import { SectionContainer } from '../shared/SectionContainer';
import { DateRectangle } from '../svg/elements/DateRectangle';
import { DualTriangle } from '../svg/elements/DualTriangle';
import { HalfCircles } from '../svg/elements/HalfCircles';
import { Star } from '../svg/elements/Star';
import { Triangle } from '../svg/elements/Triangle';

export const BaseInfoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const VIDEO_ID = 'ao12Gek8WRg';

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <SectionContainer id="zakladni-informace" bgColor="lightOrange">
      <div className="flex flex-wrap gap-8 xl:gap-12 w-full py-8 xl:py-16 xl:text-p-big items-center justify-center lg:justify-between">
        
        {/* Video Wrapper */}
        <div className="w-full lg:w-auto flex justify-center">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?si=N95euryS4_R8r7gT&autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="bg-beige rounded-2xl max-w-full aspect-video h-auto lg:w-[685px] lg:h-[380px]"
            />
          ) : (
            <button
              onClick={handleVideoPlay}
              data-track-event="click"
              data-track-category="Video"
              data-track-label="Mainpage/Play video"
              className="group relative bg-beige rounded-2xl max-w-full aspect-video h-auto w-full lg:w-[685px] lg:h-[380px] overflow-hidden cursor-pointer flex items-center justify-center"
            >
              {/* Thumbnail Image */}
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="Majáles Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
              
              {/* Play Button Icon */}
              <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          )}
        </div>

        {/* Textový kontejner */}
        <div className="flex-1 flex justify-center items-center min-w-[300px]">
          {/* w-fit zajistí, že div není širší než text, takže text-right funguje vizuálně správně */}
          <div className="space-y-2 pb-8 text-right text-violet w-fit">
            <p className="text-p-big">
              Vstup <span className="font-semibold">ZDARMA</span>
            </p>
            <br />
            <p>2 stage</p>
            <p>Food & Chill-out zóna</p>
            <p>Doprovodný program</p>
            <p>Král a Královna Majálesu</p>
          </div>
        </div>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <Star className="top-0 md:top-0 h-12 md:h-24" colorMain='fill-violet' colorSecondary='fill-lightOrange' />
          <Triangle className=" absolute top-12 md:top-24 h-12 md:h-24 rotate-90" colorMain='fill-orange' />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <HalfCircles className="bottom-0 md:bottom-0 h-12 md:h-24" colorMain='fill-violet' colorSecondary='fill-beige' />
          <DateRectangle className="absolute right-12 md:right-24 bottom-0 md:bottom-0 w-36 md:w-72 overflow-hidden" colorMain='fill-orange' >
            <h2 className="text-xs md:text-2xl font-semibold text-right text-beige">
              To a mnohem víc<br/>na Majálesu UTB!!!
            </h2>
          </DateRectangle>
          <DualTriangle className="absolute bottom-0 md:bottom-0 right-48 md:right-96 h-12 md:h-24" colorMain='fill-beige' colorSecondary='fill-violet'/>
        </div>
      </div>
    </SectionContainer>
  );
};