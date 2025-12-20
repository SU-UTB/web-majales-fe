import React from 'react';

interface GalleryImageItemProps {
  imageSrc: string;
  onClick: () => void;
}

export const GalleryImageItem: React.FC<GalleryImageItemProps> = ({ imageSrc, onClick }) => {
  
  const handleImageLoad = () => {
    const fileName = imageSrc.split('/').pop() || 'unknown-image';
  };

  return (
    <div>
      <img
        onClick={onClick}
        onLoad={handleImageLoad}
        src={imageSrc}
        alt="Gallery item"
        // Accessibility/Testing label
        aria-label={`gallery_image-${imageSrc.split('/').pop()}`}
        className="mb-4 w-full h-auto object-cover rounded-md shadow cursor-pointer hover:opacity-90 transition-opacity"
      />
    </div>
  );
};