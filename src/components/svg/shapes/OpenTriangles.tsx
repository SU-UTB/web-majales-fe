export const OpenTriangles = ({ className, colorMain, colorBg }: { className?: string, colorMain?: string, colorBg?: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 630267054">
        <path
          id="Vector"
          d="M100.003 0H0.00292969V100H100.003V0Z"
          className={colorBg}
        />
        <path
          id="Vector_2"
          d="M50.0859 63.2725L0 100V0H25.3359L50.0859 63.2725Z"
          className={colorMain}
        />
        <path
          id="Vector_3"
          d="M99.7523 63.2727L50.4189 100V0H75.7385L99.7523 63.2727Z"
          className={colorMain}
        />
      </g>
    </svg>
  );
};
