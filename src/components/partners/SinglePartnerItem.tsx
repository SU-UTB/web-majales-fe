type Props = {
  headline: string;
  img: string;
  alt: string;
};

export const SinglePartnerItem = ({ headline, img, alt }: Props) => {
  return (
    <div className="space-y-8">
      <h4 className="text-blue text-h2 text-center">{headline}</h4>
      <img src={img} alt={alt} width={400} height={300} />
    </div>
  );
};
