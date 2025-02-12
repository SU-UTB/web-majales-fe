export const ArrowSquare = ({ className, color }: { className?: string, color: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 131 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-1.56216e-06 131L0 0L131 1.56216e-06L131 131L-1.56216e-06 131ZM50.8743 37.9859L36.8385 38.0191L36.7363 94.3918L92.2407 94.2789L92.2677 80.2493L60.7166 80.3161L99.3442 41.6885L89.4396 31.7839L50.812 70.4115L50.8743 37.9859Z"
        fill={color}
      />
    </svg>
  );
};
