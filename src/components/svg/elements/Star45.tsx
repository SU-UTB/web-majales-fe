export const Star45 = ({ className, colorMain, colorSecondary}: { className?: string, colorMain?: string, colorSecondary?: string}) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M120 0H0V120H120V0Z" className={colorMain} />
      <path
        d="M106.769 106.77C80.9386 80.9405 39.0527 80.9405 13.2227 106.77C39.0527 80.9405 39.0527 39.0605 13.2227 13.2305C39.0527 39.0605 80.9386 39.0605 106.769 13.2305C80.9386 39.0605 80.9386 80.9405 106.769 106.77Z"
        className={colorSecondary}
      />
    </svg>
  );
};
