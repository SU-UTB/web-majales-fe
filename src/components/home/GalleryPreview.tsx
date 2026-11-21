import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { galleryImages } from '../../data/gallery';

import 'swiper/css';
import { OpenTriangles } from '../svg/shapes/OpenTriangles';
import { Arc } from '../svg/shapes/Arc';
import { AskewStrip } from '../svg/shapes/AskewStrip';
import { BublyCircles } from '../svg/shapes/BublyCircles';

interface CarouselColumn {
  type: 'double' | 'tall';
  images: typeof galleryImages;
}

export const GalleryPreview: React.FC = () => {
  // Připravíme sloupce střídavě: 2 fotky nad sebou a 1 vysoká fotka podle designu
  const columns: CarouselColumn[] = React.useMemo(() => {
    if (!galleryImages || galleryImages.length === 0) return [];

    const result: CarouselColumn[] = [];
    let imgIdx = 0;
    let isDouble = true;

    while (imgIdx < galleryImages.length) {
      if (isDouble) {
        const pair = [
          galleryImages[imgIdx % galleryImages.length],
          galleryImages[(imgIdx + 1) % galleryImages.length],
        ];
        result.push({ type: 'double', images: pair });
        imgIdx += 2;
      } else {
        const single = [galleryImages[imgIdx % galleryImages.length]];
        result.push({ type: 'tall', images: single });
        imgIdx += 1;
      }
      isDouble = !isDouble;
    }

    return result;
  }, []);

  return (
    <section id="galerie-preview" className="bg-yellow relative pt-24 pb-12 sm:pt-36 sm:pb-14 md:pt-44 md:pb-16 lg:pt-48 lg:pb-20 overflow-hidden select-none">
      <style>{`
        /* Plynulý continuous (lineární) pohyb pro swiper wrapper bez trhání */
        .gallery-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      {/* Automaticky plynule posouvaný Swiper carousel (bez manuálního přetahování či klikání) */}
      <div className="w-full pointer-events-none">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={6000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView="auto"
          spaceBetween={16}
          allowTouchMove={false}
          simulateTouch={false}
          className="gallery-swiper"
        >
          {columns.map((col, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="flex flex-col gap-4 md:gap-6 justify-between h-[360px] xs:h-[400px] sm:h-[460px] md:h-[520px]">
                {col.type === 'double' ? (
                  <>
                    <div className="w-[200px] xs:w-[240px] sm:w-[280px] md:w-[320px] flex-1 rounded-2xl md:rounded-3xl overflow-hidden bg-white/40 shadow-sm">
                      <img
                        src={col.images[0].src}
                        alt="Majáles UTB momentka"
                        loading="lazy"
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                    <div className="w-[200px] xs:w-[240px] sm:w-[280px] md:w-[320px] flex-1 rounded-2xl md:rounded-3xl overflow-hidden bg-white/40 shadow-sm">
                      <img
                        src={col.images[1].src}
                        alt="Majáles UTB momentka"
                        loading="lazy"
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </>
                ) : (
                  <div className="w-[170px] xs:w-[200px] sm:w-[230px] md:w-[260px] h-full rounded-2xl md:rounded-3xl overflow-hidden bg-white/40 shadow-sm">
                    <img
                      src={col.images[0].src}
                      alt="Majáles UTB momentka"
                      loading="lazy"
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tlačítko na celou galerii */}
      <div className="mt-8 md:mt-12 flex justify-center items-center relative z-10">
        <a
          href="/galerie"
          className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3.5 bg-darkPurple text-white text-xl sm:text-2xl md:text-3xl font-sans font-semibold rounded-xl hover:bg-orange transition-colors duration-200 shadow-md"
        >
          <span>Galerie</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>

      {/* TOP LEFT */}
      <div className="absolute top-0 left-0">
        <div className="relative">
          <OpenTriangles className="absolute top-0 md:top-0 left-0 md:left-0 h-12 md:h-24" colorMain="fill-lightGreen" colorBg="fill-darkPurple" />
          {/* Badge v levém horním rohu */}
          <div className="absolute top-0 left-12 md:left-24 z-10">
            <span className="inline-flex items-center justify-center h-12 md:h-24 bg-lightGreen text-orange text-xl xs:text-xl sm:text-3xl md:text-5xl font-semibold px-4 xs:px-6 sm:px-8 whitespace-nowrap">
              Galerie
            </span>
          </div>
          <Arc className="absolute top-12 md:top-24 left-0 md:left-0 h-8 md:h-16 rotate-90" colorMain="fill-orange" />
        </div>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute top-0 right-0">
        <div className="relative">
          <AskewStrip className="absolute top-0 md:top-0 right-0 md:right-0 h-12 md:h-24 rotate-90 -scale-x-100" colorMain="fill-orange" colorBg="fill-lightGreen" />
          <AskewStrip className="absolute top-0 md:top-0 right-12 md:right-24 h-12 md:h-24 rotate-90 -scale-x-100" colorMain="fill-orange" colorBg="fill-lightGreen" />
        </div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0">
        <div className="relative">
          <AskewStrip className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24 rotate-90 -scale-x-100" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <AskewStrip className="absolute bottom-0 md:bottom-0 left-12 md:left-24 h-12 md:h-24 rotate-90 -scale-x-100" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <div className="relative">
          <BublyCircles className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24" colorMain="fill-orange" colorBg="fill-lightGreen" />
          <Arc className="absolute bottom-0 md:bottom-0 right-24 md:right-48 h-8 md:h-16 -rotate-90" colorMain="fill-darkPurple" />
        </div>
      </div>
    </section>
  );
};
