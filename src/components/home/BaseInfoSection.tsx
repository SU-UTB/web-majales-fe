import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';
import { Arc } from '../svg/shapes/Arc';
import { OpenTriangles } from '../svg/shapes/OpenTriangles';
import { SquareWithS } from '../svg/shapes/SquareWithS';
import { SquareWithSemiArcs } from '../svg/shapes/SquareWithSemiArcs';
import { Target } from '../svg/shapes/Target';

export const BaseInfoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const VIDEO_ID = 'HBOaVJqwdcI';
  const SPOTIFY_URL = 'https://open.spotify.com/embed/episode/0iCw1WaAcl2eq6axTCAsxk?utm_source=generator';

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <section
      id="zakladni-informace"
      className="bg-yellow relative pt-20 pb-20 sm:pt-28 sm:pb-28 md:pt-36 md:pb-36 overflow-hidden"
    >
      {/* Hlavní obsah se 2 boxy vedle sebe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">

          {/* Levý box: Video */}
          <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-lg flex flex-col justify-center items-center min-h-[340px] sm:min-h-[420px] md:min-h-[480px] min-w-0">
            {/* Obalový kontejner s pevným poměrem stran 16:9 přes celou šířku karty */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-yellow/20">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&playsinline=1&rel=0`}
                  title="YouTube video player"
                  width="100%"
                  height="100%"
                  style={{ width: '100%', height: '100%', maxWidth: '100%' }}
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="block w-full h-full border-0"
                />
              ) : (
                <button
                  onClick={handleVideoPlay}
                  data-track-event="click"
                  data-track-category="Video"
                  data-track-label="Mainpage/Play video"
                  className="group relative w-full h-full overflow-hidden cursor-pointer flex items-center justify-center"
                >
                  {/* Thumbnail Image */}
                  <img
                    src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                    alt="Majáles Video Thumbnail"
                    className="absolute inset-0 w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Play Button Icon */}
                  <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-darkPurple hover:bg-orange rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
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
          </div>

          {/* Pravý box: Podcast */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg flex flex-col justify-between min-h-[340px] sm:min-h-[420px] md:min-h-[480px] min-w-0">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-darkPurple font-sans">
                Podcast
              </h2>
              <p className="text-lg sm:text-xl text-darkPurple leading-relaxed font-sans">
                Zajímá vás zákulisí Majálesu UTB? Pusťte si podcast s našimi manažery.
              </p>
            </div>

            <div className="w-full min-w-0 mt-6">
              <iframe
                className="block rounded-2xl w-full h-[152px] border-0"
                width="100%"
                height="152"
                style={{ width: '100%', height: '152px', maxWidth: '100%' }}
                src={SPOTIFY_URL}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Podcast Episode"
                data-track-event="click"
                data-track-category="Spotify"
                data-track-label="Mainpage/Podcast"
              />
            </div>
          </div>

        </div>
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <DotLottieReact
            src="/animations/SunSquare.lottie"
            loop
            autoplay
            className="absolute top-0 md:top-0 left-0 md:left-0 h-12 md:h-24 aspect-square"
          />
          <div className="absolute top-12 md:top-24 left-0 md:left-0 h-12 w-12 md:h-24 md:w-24 bg-darkPurple" />
          <Arc className="absolute top-16 md:top-32 left-0 md:left-0 h-8 md:h-16" colorMain="fill-lightGreen" />
        </div>
        <Arc className="absolute top-12 md:top-24 left-12 md:left-24 h-8 md:h-16 -scale-y-100" colorMain="fill-orange" />
        <Arc className="absolute top-24 md:top-48 left-0 md:left-0 h-8 md:h-16 -scale-y-100" colorMain="fill-darkPurple" />
        <SquareWithSemiArcs className="absolute top-0 md:top-0 left-12 md:left-24 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
        <SquareWithS className="absolute top-0 md:top-0 left-24 md:left-48 h-12 md:h-24 rotate-90" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
      </div>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <div className="relative">
          <Target className="absolute top-0 md:top-0 right-0 md:right-0 h-12 md:h-24" colorMain1="fill-lightGreen" colorMain2="fill-orange" colorBg="fill-darkPurple" />
          {/* Badge v levém horním rohu */}
          <div className="absolute top-0 right-12 md:right-24 z-10">
            <span className="inline-flex items-center justify-center h-12 md:h-24 bg-lightGreen text-orange text-xl xs:text-xl sm:text-3xl md:text-5xl font-semibold px-4 xs:px-6 sm:px-8">
              Aftermovie
            </span>
          </div>
          <OpenTriangles className="absolute top-12 md:top-24 right-0 md:right-0 h-12 md:h-24 rotate-180" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
        </div>
      </div>
    </section>
  );
};