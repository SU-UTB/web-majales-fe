export const NarrowTriangles = ({ className, colorMain, colorBg }: { className?: string, colorMain?: string, colorBg?: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 630266707">
        <g id="Group 630266705">
          <path id="Vector" d="M0 0L0 100H100V0H0Z" className={colorBg} />
          <g id="Group 630266704">
            <path id="Vector_2" d="M0 100L49.9748 0L49.9748 100H0Z" className={colorMain} />
            <path id="Vector_3" d="M49.9736 100L99.9989 0V100H49.9736Z" className={colorMain} />
          </g>
        </g>
      </g>
    </svg>
  );
};
