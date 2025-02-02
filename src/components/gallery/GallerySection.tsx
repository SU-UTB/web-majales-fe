import React, { useState } from 'react';
import { galleryImages } from '../../data/gallery';
import { GalleryImageItem } from './GalleryImageItem';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // When an image is clicked, open the modal and set the current image index
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section id="galerie" className="bg-lightpink">
      <div className="max-w-7xl mx-auto p-4 pt-8 bg-lightpink">
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
    </section>
  );
};
