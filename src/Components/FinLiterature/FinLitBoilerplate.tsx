/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export interface FinLitSlideProps {
  backgroundImageURL: string;
  imageURL: string;
  title: string;
  description: string;
  endText?: string;
}

export const FinLitBoilerplate = ({
  backgroundImageURL,
  imageURL,
  title,
  description,
  endText,
}: FinLitSlideProps) => {
  return (
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
            <p className="text-white text-ellipsis">{title}</p>
            <p className="pt-7 font-light text-lg">{description}</p>
            <div className="flex items-center space-x-4 pt-8">
              <img src={imageURL} className="w-32 h-32 object-cover rounded" />
              <div className="flex flex-col justify-end items-end h-full">
                {/* <p className="pt-7 text-l font-light">{endText}</p> */}
              </div>
            </div>
          </div>

          <button className="bg-white text-black font-bold text-lg px-5 py-2 rounded-lg w-full mb-[5rem]">
            Find Out More!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinLitBoilerplate;
