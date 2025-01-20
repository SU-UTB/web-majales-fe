export const PurpleRectangle = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
  return (
    <div className={`${className}`}>
      <svg
        viewBox="0 0 417 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="417" height="131" fill="#6459FD" />
      </svg>
      {children && (
        <div className="absolute inset-0 flex justify-center items-center">
          {children}
        </div>
      )}
    </div>
  );
};
