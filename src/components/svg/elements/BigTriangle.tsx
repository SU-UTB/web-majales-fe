export const BigTriangle = ({ className, color }: { className?: string, color: string }) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 236 236"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0L236 236V0H0Z" fill={color}/>
    </svg>
  );
};
