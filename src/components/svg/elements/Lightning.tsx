export const Lightning = ({ className, colorMain, colorSecondary}: { className?: string, colorMain?: string, colorSecondary?: string}) => {
  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M60.3011 0.000208007L0 60.3013L2.10866e-05 0.00018692L60.3011 0.000208007Z" 
      className={colorMain}/>
      <path d="M59.6989 60.3016L120 0.000488281L120 60.3016L59.6989 60.3016Z" 
      className={colorMain}/>
      <path d="M59.3963 120L120 60.0005L120 120L59.3963 120Z" 
      className={colorMain}/>
      <path d="M60.6037 60.0005L0 120L2.09814e-05 60.0005L60.6037 60.0005Z" 
      className={colorMain}/>
    </svg>
  );
};
