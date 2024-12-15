interface GalleryImageItemProps {
  imageSrc: string;
}

export const GalleryImageItem: React.FC<GalleryImageItemProps> = ({ imageSrc }) => {
  return (
    <div>
      <img src={imageSrc} alt="Gallery item" className="mb-4 w-full h-auto object-cover rounded-md shadow" />
    </div>
  );
};
