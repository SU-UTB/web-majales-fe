export const PinkRectangle = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
  return (
    <div className={`${className}`}>
      <svg
        viewBox="0 0 393 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="393" height="131" fill="#E7548A" />
      </svg>
      {children && (
        <div className="absolute inset-0 flex justify-center items-center">
          {children}
        </div>
      )}
    </div>
  );
};
