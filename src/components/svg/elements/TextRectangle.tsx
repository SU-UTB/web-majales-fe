export const TextRectangle = ({ className, children, color }: { className?: string, children?: React.ReactNode, color: string }) => {
  return (
    <div className={`${className}`}>
      <svg
        viewBox="0 0 393 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="393" height="131" fill={color} />
      </svg>
      {children && (
        <div className="absolute inset-0 flex justify-center items-center">
          {children}
        </div>
      )}
    </div>
  );
};
