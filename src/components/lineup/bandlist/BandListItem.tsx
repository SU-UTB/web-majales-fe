import type { BandType } from '../../../AppTypes';

export const BandListItem = ({ img, title }: BandType) => {
  return (
    <div className="relative group overflow-hidden w-full max-w-[432px] h-[238px] rounded-xl">
      <p className="text-beige text-p-mobile md:text-useful-link z-20 absolute left-4 bottom-4">{title}</p>
      <div className="inline-block absolute bottom-0 w-0 h-0 border-solid border-t-[100px] sm:border-t-[140px] border-r-0 border-l-[460px] border-b-0 border-l-blue border-r-transparent border-t-transparent border-b-transparent z-10"></div>
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform z-0"
      />
    </div>
  );
};
