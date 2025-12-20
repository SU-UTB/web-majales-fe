export const Triangle = ({ className, colorMain, colorSecondary}: { className?: string, colorMain?: string, colorSecondary?: string}) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 131 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M-5.72619e-06 131L131 0L0 -5.72619e-06L-5.72619e-06 131Z" className={colorMain}/>
    </svg>
  );
};
