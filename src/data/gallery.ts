export type GalleryImageType = {
  src: string;
  width: number;
  height: number;
  format: string;
};

const galleryImagesImport = import.meta.globEager('/src/assets/img/gallery/*.{png,jpg,jpeg,gif,webp,PNG,JPG}'); // globEager works - dont change it!!!

export const galleryImages: GalleryImageType[] = Object.values(galleryImagesImport).map((mod) => {
  return (mod as { default: GalleryImageType }).default;
});
