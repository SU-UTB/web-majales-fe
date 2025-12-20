import React, { useState } from 'react';
import { trackEvent } from '../../analytics';
import { galleryImages } from '../../data/gallery';
import { GalleryImageItem } from './GalleryImageItem';
import { LightboxModal } from './LightboxModal';
import { Lightning } from '../svg/elements/Lightning';
import { SquareWithCircle } from '../svg/elements/SquareWithCircle';
import { Triangle } from '../svg/elements/Triangle';
import { Star } from '../svg/elements/Star';

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
    <section id="galerie" className="bg-lightOrange">
      <div className="max-w-7xl mx-auto p-4 pt-8 pb-16 md:pb-32">
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

      {/* BOTTOM LEFT */}
      <div className="bottom-0 left-0">
        <div className="relative">
          <Lightning className="absolute bottom-0 md:bottom-0 left-0 md:left-0 h-12 md:h-24" colorMain='fill-violet' colorSecondary='fill-transparent' />
          <SquareWithCircle className="absolute bottom-0 md:bottom-0 left-12 md:left-24 h-12 md:h-24" colorBgLeft='fill-violet' colorBgRight='fill-orange' colorCirLeft='fill-beige' colorCirRight='fill-beige' />
          <Triangle className="absolute -rotate-90 bottom-0 md:bottom-0 left-24 md:left-48 h-12 md:h-24" colorMain='fill-beige' />
        </div>
      </div>

      {/* BOTTOM RIGHT */}
      <div className="bottom-0 right-0">
        <div className="relative">
          <Star className="absolute bottom-0 md:bottom-0 right-0 md:right-0 h-12 md:h-24" colorMain='fill-orange' colorSecondary='fill-beige' />
          <SquareWithCircle className="absolute -rotate-90 bottom-0 md:bottom-0 right-12 md:right-24 h-12 md:h-24" colorBgLeft='fill-violet' colorBgRight='fill-violet' colorCirLeft='fill-beige' colorCirRight='fill-orange' />
          <Triangle className="absolute rotate-180 bottom-0 md:bottom-0 right-24 md:right-48 h-12 md:h-24" colorMain='fill-beige' />
        </div>
      </div>
    </section>
  );
};