import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface HeadlineProps {
  width?: number;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export const MajalesHeadline = ({
  width,
  className = '',
  loop = false,
  autoplay = true,
}: HeadlineProps) => {
  return (
    <div
      className={`w-full ${className}`}
      style={width ? { maxWidth: `${width}px` } : undefined}
    >
      <DotLottieReact
        src="/animations/lada_to_majales.json"
        loop={loop}
        autoplay={autoplay}
        className="w-full h-auto"
        renderConfig={{
          autoResize: true,
        }}
      />
    </div>
  );
};


