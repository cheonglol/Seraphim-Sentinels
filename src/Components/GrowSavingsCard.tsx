type Props = {
  header: string;
  paragraph: string;
  interestRate: number;
};

export const GrowSavingsCard = ({ header, paragraph, interestRate }: Props) => {
  return (
    <div className="rounded-xl bg-white mt-6 bg-opacity-15 backdrop-filter backdrop-blur flex flex-col justify-between">
      <h1 className="pt-4 pl-4 pr-4 font-semibold">{header}</h1>
      <p className="pt-2 pl-4 pr-4 font-light text-lg">{paragraph}</p>
      <p className="text-right pt-2 pl-4 pr-4 pb-4 font-medium text-xl">
        {interestRate}% p.a
      </p>
    </div>
  );
};
