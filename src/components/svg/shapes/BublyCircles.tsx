export const BublyCircles = ({ className, colorMain, colorBg }: { className?: string, colorMain?: string, colorBg?: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 300 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 630267036">
        <rect id="Rectangle 1831" width={150} height={150} className={colorMain} />
        <rect
          id="Rectangle 1832"
          x={150}
          width={150}
          height={150}
          className={colorMain}
        />
        <circle id="Ellipse 58" cx={37.5} cy={37.5} r={37.5} className={colorBg} />
        <circle id="Ellipse 61" cx={262.5} cy={112.5} r={37.5} className={colorBg} />
        <circle id="Ellipse 62" cx={187.5} cy={112.5} r={37.5} className={colorBg} />
        <path
          id="Subtract"
          d="M75.0068 38C75.2723 58.3138 91.6862 74.7277 112 74.9932V75.0059C91.6862 75.2713 75.2723 91.6862 75.0068 112H74.9932C74.7277 91.6862 58.3138 75.2713 38 75.0059V74.9932C58.3138 74.7277 74.7277 58.3138 74.9932 38H75.0068Z"
          className={colorBg}
        />
        <path
          id="Subtract_2"
          d="M150.007 38C150.272 58.3138 166.686 74.7277 187 74.9932V75.0059C166.686 75.2713 150.272 91.6862 150.007 112H149.993C149.728 91.6862 133.314 75.2713 113 75.0059V74.9932C133.314 74.7277 149.728 58.3138 149.993 38H150.007Z"
          className={colorBg}
        />
        <path
          id="Subtract_3"
          d="M299.993 112C299.728 91.6862 283.314 75.2723 263 75.0068V74.9941C283.314 74.7287 299.728 58.3138 299.993 38H300V112H299.993Z"
          className={colorBg}
        />
        <path
          id="Subtract_4"
          d="M113 149.993C133.314 149.728 149.728 133.314 149.993 113H150.006C150.271 133.314 166.686 149.728 187 149.993V150H113V149.993Z"
          className={colorBg}
        />
        <path
          id="Subtract_5"
          d="M225.007 38C225.272 58.3138 241.686 74.7277 262 74.9932V75.0059C241.686 75.2713 225.272 91.6862 225.007 112H225V38H225.007Z"
          className={colorBg}
        />
        <path
          id="Subtract_6"
          d="M187 0.00683594C166.686 0.272312 150.272 16.6862 150.007 37H149.994C149.729 16.6862 133.314 0.272312 113 0.00683594V0H187V0.00683594Z"
          className={colorBg}
        />
        <path
          id="Subtract_7"
          d="M262 0.00683594C241.686 0.272312 225.272 16.6862 225.007 37H224.994C224.729 16.6862 208.314 0.272312 188 0.00683594V0H262V0.00683594Z"
          className={colorBg}
        />
        <path
          id="Subtract_8"
          d="M38 149.993C58.3138 149.728 74.7277 133.314 74.9932 113H75.0059C75.2713 133.314 91.6862 149.728 112 149.993V150H38V149.993Z"
          className={colorBg}
        />
      </g>
    </svg>
  );
};
