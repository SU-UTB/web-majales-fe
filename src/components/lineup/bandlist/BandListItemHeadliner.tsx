import type { BandType } from '../../../AppTypes';

export const BandListItemHeadliner = ({ img, title }: BandType) => {
  return (
    <div className="relative group overflow-visible w-full flex items-center justify-center md:py-6">
      <img
        src={img}
        alt={title}
        className="w-full h-auto object-cover object-center md:group-hover:scale-105 md:transition-transform md:duration-500 shadow-xl"
      />
    </div>
  );
};
