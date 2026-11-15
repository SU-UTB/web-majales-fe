export const SquaredSquare = ({ className, colorMain, colorBg}: { className?: string, colorMain?: string, colorBg?: string}) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 630267056">
        <g id="Group">
          <path id="Vector" d="M100 50V100H0V0H100V50Z" className={colorBg} />
          <path
            id="Vector_2"
            d="M23.6189 49.6107C23.8464 35.1203 35.8488 23.5568 50.4272 23.7829C65.0055 24.009 76.6393 35.939 76.4118 50.4294C76.1844 64.9197 64.1819 76.4832 49.6035 76.2572C35.0252 76.0311 23.3915 64.1011 23.6189 49.6107Z"
            className={colorMain}
          />
        </g>
        <path id="Vector_3" d="M32.6667 0H0V31.3333H32.6667V0Z" className={colorMain} />
        <path
          id="Vector_4"
          d="M32.6667 68.6665H0V99.9998H32.6667V68.6665Z"
          className={colorMain}
        />
        <path
          id="Vector_5"
          d="M100.001 68.6665H67.334V99.9998H100.001V68.6665Z"
          className={colorMain}
        />
      </g>
    </svg>
  );
};
