export const SquareWithHalfCircles = ({ className, colorMain, colorBg }: { className?: string, colorMain?: string, colorBg?: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 630267108">
        <g id="Group">
          <path id="Vector" d="M100 0L0 0L0 100L100 100L100 0Z" className={colorBg} />
          <path
            id="Vector_2"
            d="M100 50V100C72.385 100 50 77.615 50 50L100 50Z"
            className={colorMain}
          />
          <path
            id="Vector_3"
            d="M50 50L0 50L0 0C27.615 0 50 22.385 50 50Z"
            className={colorMain}
          />
          <path
            id="Vector_4"
            d="M50 50C50 77.615 27.615 100 0 100L0 50L50 50Z"
            className={colorMain}
          />
          <path
            id="Vector_5"
            d="M100 0V50L50 50C50 22.385 72.385 0 100 0Z"
            className={colorMain}
          />
        </g>
        <g id="Group_2">
          <path
            id="Vector_6"
            d="M200 0L100 0L100 100L200 100V0Z"
            className={colorBg}
          />
          <path
            id="Vector_7"
            d="M200 50V100C172.385 100 150 77.615 150 50L200 50Z"
            className={colorMain}
          />
          <path
            id="Vector_8"
            d="M150 50L100 50L100 0C127.615 0 150 22.385 150 50Z"
            className={colorMain}
          />
          <path
            id="Vector_9"
            d="M150 50C150 77.615 127.615 100 100 100L100 50L150 50Z"
            className={colorMain}
          />
          <path
            id="Vector_10"
            d="M200 0V50L150 50C150 22.385 172.385 0 200 0Z"
            className={colorMain}
          />
        </g>
      </g>
    </svg>
  );
};
