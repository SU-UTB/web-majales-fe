import React, { useState } from 'react';
import { trackEvent } from '../../analytics';
import { galleryImages } from '../../data/gallery';
import { GalleryImageItem } from './GalleryImageItem';
import { LightboxModal } from './LightboxModal';
import { Arc } from '../svg/shapes/Arc';
import { BublyCircles } from '../svg/shapes/BublyCircles';
import { DotsTriangle } from '../svg/shapes/DotsTriangle';
import { DoubleArrow } from '../svg/shapes/DoubleArrow';
import { Keyboard } from '../svg/shapes/Keyboard';
import { Rays } from '../svg/shapes/Rays';
import { SquaredSquare } from '../svg/shapes/SquaredSquare';
import { TitsWithNipples } from '../svg/shapes/TitsWithNipples';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const getFileNameFromSrc = (src: string) => {
  const parts = src.split('/');
  const lastPart = parts[parts.length - 1];
  const fileName = lastPart.split('?')[0];
  return `Galerie/${fileName}`;
};

export const GallerySection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    trackEvent('click', 'Galerie', getFileNameFromSrc(galleryImages[index].src));
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNext = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    trackEvent('click', 'Galerie', getFileNameFromSrc(galleryImages[nextIndex].src));
  };

  const showPrev = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    trackEvent('click', 'Galerie', getFileNameFromSrc(galleryImages[prevIndex].src));
  };

  return (
    <section
      id="galerie"
      className="relative min-h-[70vh] overflow-hidden bg-yellow py-20 sm:py-28 md:py-36"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-12 sm:px-8 md:px-12">
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
          {galleryImages.map((img, index) => (
            <GalleryImageItem
              key={index}
              imageSrc={img.src}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <LightboxModal
          images={galleryImages}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}

      {/* TOP LEFT */}
      <div className="absolute left-0 top-0" aria-hidden="true">
        <div className="relative">
          <div className="absolute left-12 top-0 z-10 md:left-24">
            <h1 className="inline-flex h-12 items-center justify-center whitespace-nowrap bg-lightGreen px-4 text-xl font-semibold text-orange xs:px-6 xs:text-xl sm:px-8 sm:text-3xl md:h-24 md:text-5xl">
              Galerie
            </h1>
          </div>
          <DotLottieReact
            src="/animations/DoubleArrowOrange.json"
            autoplay
            loop
            className="absolute bottom-0 -left-6 h-24 w-24 origin-bottom-left rotate-90 md:-left-12 md:h-48 md:w-48"
          />
          <Arc className="absolute left-12 top-12 h-8 rotate-90 md:left-24 md:top-24 md:h-16" colorMain="fill-darkPurple" />
        </div>
      </div>

      {/* TOP RIGHT */}
      <div className="absolute right-0 top-0" aria-hidden="true">
        <div className="relative">
          <Rays className="absolute right-0 top-0 h-24 md:h-48 -scale-x-100" colorMain="stroke-orange" colorBg="fill-darkPurple" />
          <Keyboard className="absolute right-12 top-0 h-12 md:right-24 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
        </div>
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-0 left-0" aria-hidden="true">
        <div className="relative">
          {/* <SquaredSquare className="absolute bottom-0 left-0 h-12 md:h-24" colorMain="fill-orange" colorBg="fill-lightGreen" /> */}
          <DotLottieReact
            src="/animations/SquaredSquare.json"
            loop
            autoplay
            className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24 aspect-square"
          />
          <DotsTriangle className="absolute bottom-0 left-12 h-12 rotate-90 md:left-24 md:h-24" colorMain="fill-orange" colorBg="fill-transparent" />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0" aria-hidden="true">
        <div className="relative">
          <BublyCircles className="absolute bottom-0 right-0 h-12 md:h-24" colorMain="fill-darkPurple" colorBg="fill-lightGreen" />
          <DotLottieReact
            src="/animations/TitsWithNipples.json"
            loop
            autoplay
            className="absolute bottom-12 md:bottom-24 right-0 md:right-0 h-12 md:h-24 aspect-square"
          />
        </div>
      </div>
    </section>
  );
};