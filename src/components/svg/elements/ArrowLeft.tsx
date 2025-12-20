export const ArrowLeft = ({ className, colorMain, colorSecondary}: { className?: string, colorMain?: string, colorSecondary?: string}) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.62939e-06 120L120 120L120 1.52588e-05L1.81201e-05 4.76806e-06L7.62939e-06 120Z"
        className={colorSecondary}
      />
      <path d="M120 120L60 60L120 60L120 120Z" className={colorMain} />
      <path
        d="M9.06006e-06 60L60 120L3.8147e-06 120L9.06006e-06 60Z"
        className={colorMain}
      />
      <path d="M60 60L120 3.8147e-06L120 60L60 60Z" className={colorMain} />
      <path
        d="M60 3.8147e-06L3.8147e-06 60L9.06006e-06 -1.43067e-06L60 3.8147e-06Z"
        className={colorMain}
      />
    </svg>
  );
};
