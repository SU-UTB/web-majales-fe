export const SquareWithS = ({ className, colorMain, colorBg }: { className?: string, colorMain?: string, colorBg?: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 630266702">
        <path
          id="Vector"
          d="M100.262 0H0V99.7173L100.262 99.6645V0Z"
          className={colorMain}
        />
        <path
          id="Vector_2"
          d="M0 0H56.3654V56.2165C41.4163 56.2165 27.0796 50.2937 16.509 39.751C5.93847 29.2084 0 14.9095 0 0V0Z"
          className={colorBg}
        />
        <path
          id="Vector_3"
          d="M56.3652 37.4771C67.9352 37.4771 79.0314 42.0929 87.2126 50.3092C95.3939 58.5254 99.99 69.6691 99.99 81.2887L100.261 99.6645L56.3652 99.8822V37.4771Z"
          className={colorBg}
        />
      </g>
    </svg>
  );
};
