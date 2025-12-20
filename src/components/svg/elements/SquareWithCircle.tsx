export const SquareWithCircle = ({
  className,
  colorBgLeft,
  colorBgRight,
  colorCirLeft,
  colorCirRight,
}: {
  className?: string;
  colorBgLeft: string;
  colorBgRight: string;
  colorCirLeft: string;
  colorCirRight: string;
}) => {
  // 1. Define the overlay paths (Right side only)
  // We don't need the left path anymore because the "Left" is now the full base layer.
  const rightBgPath = "M120 0L0 120H120V0Z";
  const rightCirclePath = "M34.6751 85.3267C48.6611 99.3127 71.335 99.3127 85.321 85.3267C99.307 71.3407 99.307 48.6667 85.321 34.6807L34.6751 85.3267Z";

  // Calculated radius from your path data (Distance from center 60,60 to approx 85.32,34.68)
  const circleRadius = "35.82";

  return (
    <svg
      className={`w-auto ${className}`}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
    >
      {/* --- BACKGROUND --- */}
      {/* Layer 1: Full Square Base (Left Color) */}
      <rect width="120" height="120" className={colorBgLeft} />
      
      {/* Layer 2: Right Triangle Overlay (Right Color) */}
      <path d={rightBgPath} className={colorBgRight} />


      {/* --- CIRCLE --- */}
      {/* Layer 3: Full Circle Base (Left Color) */}
      <circle cx="60" cy="60" r={circleRadius} className={colorCirLeft} />

      {/* Layer 4: Right Half Circle Overlay (Right Color) */}
      <path d={rightCirclePath} className={colorCirRight} />
    </svg>
  );
};