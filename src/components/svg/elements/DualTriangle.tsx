export const DualTriangle = ({ className, colorMain, colorSecondary}: { className?: string, colorMain?: string, colorSecondary?: string}) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M60 60L120 120L5.24537e-06 120L60 60Z" className={colorMain} />
      <path d="M120 -5.00671e-06L120 120L60 60L120 -5.00671e-06Z" className={colorSecondary} />
    </svg>
  );
};
