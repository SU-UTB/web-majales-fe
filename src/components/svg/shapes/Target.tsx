export const Target = ({ className, colorMain1, colorMain2, colorBg }: { className?: string, colorMain1?: string, colorMain2?: string, colorBg?: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 630267049">
        <g id="Group">
          <path id="Vector" d="M0 50V100H100V0H0V50Z" className={colorBg} />
        </g>
        <path
          id="Vector_2"
          d="M50.07 81.9818C32.2533 81.9818 17.8125 67.6506 17.8125 49.9785C17.8125 32.3064 32.2533 17.9829 50.07 17.9829C67.8867 17.9829 82.3275 32.3064 82.3275 49.9785C82.3275 67.6506 67.8867 81.9818 50.07 81.9818Z"
          className={colorMain1}
        />
        <path
          id="Vector_3"
          d="M50.072 64.256C42.1199 64.256 35.6777 57.8661 35.6777 49.9786C35.6777 42.0911 42.1199 35.7012 50.072 35.7012C58.0241 35.7012 64.4663 42.0911 64.4663 49.9786C64.4663 57.8661 58.0241 64.256 50.072 64.256Z"
          className={colorMain2}
        />
      </g>
    </svg>
  );
};
