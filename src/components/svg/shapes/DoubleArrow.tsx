export const DoubleArrow = ({ className, colorMain, colorBg }: { className?: string, colorMain?: string, colorBg?: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 101 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 630267106">
        <g id="Group 630266995">
          <rect
            id="Rectangle 1826"
            x={-0.00000437114}
            width={100}
            height={100}
            className={colorMain}
          />
          <path
            id="Vector"
            d="M50.1328 50L0.000537872 -2.18557e-06L50.1328 0L50.1328 50Z"
            className={colorBg}
          />
          <path
            id="Vector_2"
            d="M50.1328 50L100.265 2.18557e-06L50.1328 0L50.1328 50Z"
            className={colorBg}
          />
          <path
            id="Vector_3"
            d="M100.264 50L50.1314 100L100.264 100L100.264 50Z"
            className={colorBg}
          />
          <path
            id="Vector_4"
            d="M2.18557e-06 50L50.1323 100L0 100L2.18557e-06 50Z"
            className={colorBg}
          />
        </g>
        <g id="Group 630266996">
          <rect
            id="Rectangle 1826_2"
            x={-0.00000437114}
            y={100}
            width={100}
            height={100}
            className={colorMain}
          />
          <path
            id="Vector_5"
            d="M50.1328 150L0.000537872 100L50.1328 100L50.1328 150Z"
            className={colorBg}
          />
          <path
            id="Vector_6"
            d="M50.1328 150L100.265 100L50.1328 100L50.1328 150Z"
            className={colorBg}
          />
          <path
            id="Vector_7"
            d="M100.264 150L50.1314 200L100.264 200L100.264 150Z"
            className={colorBg}
          />
          <path
            id="Vector_8"
            d="M2.18557e-06 150L50.1323 200L0 200L2.18557e-06 150Z"
            className={colorBg}
          />
        </g>
      </g>
    </svg>
  );
};
