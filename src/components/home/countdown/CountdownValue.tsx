type Props = {
  text: string;
  value: string | number;
};

export const CountdownValue = ({ text, value }: Props) => {
  return (
    <div className="flex flex-col items-center flex-1 min-w-0">
      <span className="w-full text-center tabular-nums font-semibold tracking-tight text-3xl xs:text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-darkPurple leading-none">
        {value}
      </span>
      <span className="text-xs xs:text-sm sm:text-lg md:text-2xl text-darkPurple font-normal mt-1 sm:mt-3 lowercase text-center">
        {text}
      </span>
    </div>
  );
};
