export const AsteriskSquare = ({ className, color }: { className?: string, color: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 118 118"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={118} height={118} fill={color} />
    <g clipPath="url(#clip0_0_1)">
      <path
        d="M69.4339 18.0249L59.0187 43.0936L48.6596 18L37.403 22.6435L47.7683 47.7434L22.6934 37.322L18.0249 48.5599L43.0936 58.9813L18 69.3404L22.6435 80.5908L47.7372 70.2317L37.322 95.3004L48.5599 99.9751L58.9813 74.9001L69.3404 100L80.5908 95.3503L70.2317 70.2566L95.3004 80.678L99.9751 69.4339L74.9001 59.0187L100 48.6596L95.3503 37.403L70.2566 47.7683L80.678 22.6934L69.4339 18.0249Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_1">
        <rect
          width={82}
          height={82}
          fill="white"
          transform="translate(18 18)"
        />
      </clipPath>
    </defs>
  </svg>
  );
};
