import type { ReactNode } from 'react';

type Props = {
  fillColor?: string;
  rotationValue?: number;
  width?: number;
  children?: ReactNode;
};

export const HeadlineBubble = ({ fillColor = '#EF5A23', rotationValue = 0, width = 320, children }: Props) => {
  return (
    <div
      className="relative max-w-[240px] md:max-w-max z-0 opacity-[0.99]"
      style={{ transform: `rotate(${rotationValue}deg)` }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 337 189"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: `${width}px`, maxWidth: '100%' }}
      >
        <path
          d="M336.855 75.5277C280.455 93.2692 276.132 104.452 319.398 125.17C258.948 124.757 246.094 133.872 262.985 165.687C214.482 148.186 195.729 153.37 179 188.246C154.964 157.945 135.529 157.039 92.1064 184.857C101.53 150.097 86.9761 144.044 28.1175 157.844C65.7195 128.057 59.0292 118.113 0.096608 113.309C56.4963 95.5677 60.8198 84.3851 17.5532 63.667C78.0034 64.0795 90.8578 54.9652 73.9671 23.1499C122.469 40.6509 141.222 35.4668 157.952 0.590547C181.987 30.8922 201.422 31.7984 244.845 3.97995C235.422 38.7402 249.976 44.7933 308.834 30.9925C271.232 60.7798 277.922 70.7237 336.855 75.5277Z"
          fill={fillColor}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{children}</div>
    </div>
  );
};
