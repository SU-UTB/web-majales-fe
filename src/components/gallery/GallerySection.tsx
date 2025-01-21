import { galleryImages } from '../../data/gallery';
import { GalleryImageItem } from './GalleryImageItem';

export const GallerySection = () => {
  return (
    <section id="galerie" className="bg-beige">
      <div className="max-w-7xl mx-auto p-4 pt-8 bg-beige">
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4">
          {galleryImages.map((img) => (
            <GalleryImageItem imageSrc={img.src} />
          ))}
        </div>
      </div>
    </section>
  );
};
