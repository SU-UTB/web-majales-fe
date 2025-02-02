interface GalleryImageItemProps {
  imageSrc: string;
  onClick: () => void;
}

export const GalleryImageItem: React.FC<GalleryImageItemProps> = ({ imageSrc, onClick }) => {
  return (
    <div>
      <img
        onClick={onClick}
        src={imageSrc}
        alt="Gallery item"
        className="mb-4 w-full h-auto object-cover rounded-md shadow cursor-pointer"
      />
    </div>
  );
};
