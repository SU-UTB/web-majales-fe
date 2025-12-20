export const Star = ({ className, colorMain, colorSecondary}: { className?: string, colorMain?: string, colorSecondary?: string}) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M120 0H0V120H120V0Z" className={colorSecondary} />
      <mask
        id="mask0_3689_3264"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={120}
        height={120}
      >
        <path d="M120 0H0V120H120V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_3689_3264)">
        <path
          d="M0.29961 60.0001C33.271 60.0001 59.9996 33.2715 59.9996 0.300098C59.9996 -32.6713 33.271 -59.3999 0.29961 -59.3999C-32.6718 -59.3999 -59.4004 -32.6713 -59.4004 0.300098C-59.4004 33.2715 -32.6718 60.0001 0.29961 60.0001Z"
          className={colorMain}
        />
        <path
          d="M119.7 60.0001C152.671 60.0001 179.4 33.2715 179.4 0.300098C179.4 -32.6713 152.671 -59.3999 119.7 -59.3999C86.7286 -59.3999 60 -32.6713 60 0.300098C60 33.2715 86.7286 60.0001 119.7 60.0001Z"
          className={colorMain}
        />
        <path
          d="M0.29961 179.4C33.271 179.4 59.9996 152.671 59.9996 119.7C59.9996 86.7286 33.271 60 0.29961 60C-32.6718 60 -59.4004 86.7286 -59.4004 119.7C-59.4004 152.671 -32.6718 179.4 0.29961 179.4Z"
          className={colorMain}
        />
        <path
          d="M119.7 179.4C152.671 179.4 179.4 152.671 179.4 119.7C179.4 86.7286 152.671 60 119.7 60C86.7286 60 60 86.7286 60 119.7C60 152.671 86.7286 179.4 119.7 179.4Z"
          className={colorMain}
        />
      </g>
    </svg>
  );
};
