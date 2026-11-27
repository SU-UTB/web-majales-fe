import React from 'react';

interface GalleryImageItemProps {
  imageSrc: string;
  onClick: () => void;
}

export const GalleryImageItem: React.FC<GalleryImageItemProps> = ({ imageSrc, onClick }) => {
  return (
    <div className="mb-4 break-inside-avoid">
      <button
        type="button"
        onClick={onClick}
        aria-label={`Zobrazit fotografii ${imageSrc.split('/').pop()}`}
        className="group block w-full overflow-hidden rounded-xl bg-lightGreen/40 shadow-xl transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-darkPurple"
      >
        <img
          src={imageSrc}
          alt="Momentka z Majálesu UTB"
          loading="lazy"
          decoding="async"
          draggable={false}
          className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </button>
    </div>
  );
};