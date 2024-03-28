import type { BandType } from '../../../AppTypes';

export const BandListItem = ({ img, title }: BandType) => {
  return (
    <a className="relative group overflow-hidden" target="_blank" rel="noopener noreferrer external">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
      />
      <div className="inline-block absolute w-0 h-0 border-solid border-t-[120px] border-r-0 border-l-[265px] border-b-0 border-l-blue border-r-transparent border-t-transparent border-b-transparent" />
    </a>
  );
};
