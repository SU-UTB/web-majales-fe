export const BublyCircles = ({ className, colorMain, colorBg }: { className?: string, colorMain?: string, colorBg?: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 200 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group 630267036">
        <rect id="Rectangle 1831" width={100} height={100} className={colorMain} />
        <rect
          id="Rectangle 1832"
          x={100}
          width={100}
          height={100}
          className={colorMain}
        />
        <circle id="Ellipse 58" cx={25} cy={25} r={25} className={colorBg} />
        <circle id="Ellipse 61" cx={175} cy={75} r={25} className={colorBg} />
        <circle id="Ellipse 62" cx={125} cy={75} r={25} className={colorBg} />
        <path
          id="Subtract"
          d="M50.0039 25.3334C50.1809 38.876 61.1243 49.8187 74.667 49.9955V50.0043C61.1244 50.1811 50.181 61.1239 50.0039 74.6664H49.9961C49.819 61.1239 38.8756 50.1811 25.333 50.0043V49.9955C38.8757 49.8187 49.8191 38.876 49.9961 25.3334H50.0039Z"
          className={colorBg}
        />
        <path
          id="Subtract_2"
          d="M100.004 25.3334C100.181 38.876 111.124 49.8187 124.667 49.9955V50.0043C111.124 50.1811 100.181 61.1239 100.004 74.6664H99.9961C99.819 61.1239 88.8756 50.1811 75.333 50.0043V49.9955C88.8757 49.8187 99.8191 38.876 99.9961 25.3334H100.004Z"
          className={colorBg}
        />
        <path
          id="Subtract_3"
          d="M199.996 74.6666C199.819 61.1241 188.876 50.1815 175.333 50.0045V49.9957C188.875 49.8187 199.819 38.876 199.996 25.3336H200V74.6666H199.996Z"
          className={colorBg}
        />
        <path
          id="Subtract_4"
          d="M75.333 99.9961C88.8755 99.8193 99.8178 88.8763 99.9951 75.334H100.004C100.181 88.8762 111.125 99.8191 124.667 99.9961V100H75.333V99.9961Z"
          className={colorBg}
        />
        <path
          id="Subtract_5"
          d="M150.004 25.3334C150.181 38.8759 161.124 49.8185 174.667 49.9955V50.0043C161.125 50.1813 150.181 61.124 150.004 74.6664H150V25.3334H150.004Z"
          className={colorBg}
        />
        <path
          id="Subtract_6"
          d="M124.667 0.00390625C111.125 0.180714 100.182 11.1237 100.005 24.666H99.9961C99.8188 11.1238 88.8753 0.180883 75.333 0.00390625V0H124.667V0.00390625Z"
          className={colorBg}
        />
        <path
          id="Subtract_7"
          d="M174.667 0.00390625C161.125 0.180714 150.182 11.1237 150.005 24.666H149.996C149.819 11.1238 138.875 0.180883 125.333 0.00390625V0H174.667V0.00390625Z"
          className={colorBg}
        />
        <path
          id="Subtract_8"
          d="M25.333 99.9961C38.8755 99.8193 49.8178 88.8763 49.9951 75.334H50.0039C50.1812 88.8762 61.1247 99.8191 74.667 99.9961V100H25.333V99.9961Z"
          className={colorBg}
        />
      </g>
    </svg>
  );
};
