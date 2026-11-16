export const Arc = ({ className, colorMain, colorBg }: { className?: string, colorMain?: string, colorBg?: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Subtract"
        d="M62.665 64.665C62.665 29.0325 35.2749 2.39452e-06 -5.6532e-06 5.47835e-06L-3.25974e-06 27.3779C20.2538 27.5292 36.666 44.1707 36.666 64.665L62.665 64.665Z"
        className={colorMain}
      />
    </svg>
  );
};
