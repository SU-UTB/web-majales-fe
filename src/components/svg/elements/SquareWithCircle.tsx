export const SquareWithCircle = ({ className, colorBg, colorLeftHalf, colorRightHalf }: { className?: string, colorBg: string, colorLeftHalf: string, colorRightHalf: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 131 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M131,0v131H0L0,0L131,0z M91.1,91.1c14.3-14.3,14.3-37.4,0-51.6L39.5,91.1C53.7,105.4,76.8,105.4,91.1,91.1z" fill={colorBg}/>
      <path d="M39.5,91.1c-14.3-14.3-14.3-37.4,0-51.6c14.3-14.3,37.4-14.3,51.6,0L39.5,91.1z" fill={colorLeftHalf}/>
      <path d="M91.1,39.5c14.3,14.3,14.3,37.4,0,51.6c-14.3,14.3-37.4,14.3-51.6,0L91.1,39.5z" fill={colorRightHalf}/>
    </svg>
  );
};
