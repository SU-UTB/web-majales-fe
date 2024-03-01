type Props = {
  text: string;
  value: string | number;
};

export const CountdownValue = ({ text, value }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h4 className="text-p">{text}</h4>
      <p className="text-countdown -skew-x-6">{value}</p>
    </div>
  );
};
