import React from "react";

interface Props {
  imageURL: string;
}

export const FinancialLiteratureView = ({ imageURL }: Props) => {
  return (
    <>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <div className="snap-always snap-start">
          <div
            className="snap-start relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url('${imageURL}')` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="flex flex-col justify-between min-h-screen p-16 relative z-10">
              <div>
                <h1 className="text-white text-5xl">
                  Free cup of Kopi every day
                </h1>
                <p className="pt-7 text-xl font-light">
                  With $20000 growing at 4% per year, you will receive $2.19
                  every day. Which is equal to about a cup of Kopi.
                </p>
              </div>

              <button className="bg-white text-black font-bold text-lg px-5 py-2 rounded-lg w-full mt-auto mb-10">
                Find Out More!
              </button>
            </div>
          </div>
        </div>

        <div className="snap-always snap-start">
          <div className="snap-center h-screen">TEST</div>{" "}
        </div>
      </div>
    </>
  );
};

export default FinancialLiteratureView;
