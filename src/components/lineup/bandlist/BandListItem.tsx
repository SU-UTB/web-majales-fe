import type { BandType } from '../../../AppTypes';

export const BandListItem = ({ img, title }: BandType) => {
  return (
    <div className="relative group overflow-visible w-full flex items-center justify-center">
      {/* <p className="text-beige text-p-mobile md:text-useful-link opacity-[0.99] z-[2] absolute left-4 bottom-4">
        {title}
      </p>
      <div className="inline-block absolute bottom-0 w-0 h-0 border-solid border-t-[100px] sm:border-t-[140px] border-r-0 border-l-[460px] border-b-0 border-l-blue border-r-transparent border-t-transparent border-b-transparent z-[1] opacity-[0.97]"></div> */}
      <img
        src={img}
        alt={title}
        className="lg:w-full h-auto object-cover object-center md:group-hover:scale-105 md:transition-transform z-0 shadow-lg"
      />
    </div>
  );
};
