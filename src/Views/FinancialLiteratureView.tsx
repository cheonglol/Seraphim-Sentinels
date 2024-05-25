import React from "react";

interface Props {
  backgroundImageURL: string;
  subImageURL: string;
}

export const FinancialLiteratureView = ({
  backgroundImageURL,
  subImageURL,
}: Props) => {
  return (
    <>
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <div className="snap-always snap-start">
          <div
            className="relative bg-cover bg-center h-screen"
            style={{
              backgroundImage: `url('${backgroundImageURL}')`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>

            <div className="flex flex-col justify-between min-h-screen p-16 relative z-10">
              <div>
                <h1 className="text-white text-5xl">
                  Free cup of Kopi every day
                </h1>
                <p className="pt-7 text-xl font-light">
                  With $20000 growing at 4% per year, you will receive $2.19
                  every day. Which is...
                </p>
                <div className="flex items-center space-x-4 pt-8">
                  <img
                    src={subImageURL}
                    className="w-32 h-32 object-cover rounded"
                  />
                  <div className="flex flex-col justify-end items-end h-full">
                    <p className="pt-7 text-xl font-light">
                      A cup of Kopi every day!
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-white text-black font-bold text-lg px-5 py-2 rounded-lg w-full mt-auto mb-10">
                Find Out More!
              </button>
            </div>
          </div>
        </div>

        <div className="snap-always snap-start">
          <div className="snap-center h-screen bg-white text-neutral-900 text-2xl">
            TEST
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default FinancialLiteratureView;
