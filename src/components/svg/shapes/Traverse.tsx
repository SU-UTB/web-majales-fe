export const Traverse = ({ className, colorMain, colorBg }: { className?: string, colorMain?: string, colorBg?: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 630267046">
        <g id="Group">
          <path id="Vector" d="M100 50V100H0V0H100V50Z" className={colorBg} />
        </g>
        <path
          id="Vector_2"
          d="M100 0H50.3646L0 100L50.3547 100L100 0Z"
          fillRule="evenodd"
          clipRule="evenodd"
          className={colorMain}
        />
      </g>
    </svg>
  );
};
