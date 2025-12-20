export const HalfCircles = ({ className, colorMain, colorSecondary}: { className?: string, colorMain?: string, colorSecondary?: string}) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M120 0H0V120H120V0Z" className={colorMain} />
      <path d="M120 60V120C86.862 120 60 93.138 60 60H120Z" className={colorSecondary} />
      <path d="M60 60H0V0C33.138 0 60 26.862 60 60Z" className={colorSecondary} />
      <path d="M60 60C60 93.138 33.138 120 0 120V60H60Z" className={colorSecondary} />
      <path d="M120 0V60H60C60 26.862 86.862 0 120 0Z" className={colorSecondary} />
    </svg>
  );
};
