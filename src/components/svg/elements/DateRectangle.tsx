export const DateRectangle = ({ className, children, colorMain, colorSecondary }: { className?: string, children?: React.ReactNode, colorMain?: string, colorSecondary?: string }) => {
  return (
    <div className={`${className}`}>
      <svg
        viewBox="0 0 393 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="393" height="131" className={colorMain} />
      </svg>
      {children && (
        <div className={"absolute inset-0 p-2 flex justify-center items-center"}>
          {children}
        </div>
      )}
    </div>
  );
};
