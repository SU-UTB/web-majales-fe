export const Squares45 = ({ className, colorMain, colorSecondary}: { className?: string, colorMain?: string, colorSecondary?: string}) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M120.004 0H0.00390625V120H120.004V0Z" className={colorMain} />
      <path
        d="M29.9593 0.00509728L0.00195312 29.9624L29.9592 59.9197L59.9165 29.9624L29.9593 0.00509728Z"
        className={colorSecondary}
      />
      <path
        d="M29.9573 59.8762L0 89.8335L29.9573 119.791L59.9146 89.8335L29.9573 59.8762Z"
        className={colorSecondary}
      />
      <path
        d="M89.8362 0.00512426L59.8789 29.9624L89.8362 59.9197L119.793 29.9624L89.8362 0.00512426Z"
        className={colorSecondary}
      />
      <path
        d="M89.8323 59.874L59.875 89.8313L89.8323 119.789L119.79 89.8313L89.8323 59.874Z"
        className={colorSecondary}
      />
    </svg>
  );
};
