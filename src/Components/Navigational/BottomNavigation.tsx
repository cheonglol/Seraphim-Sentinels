import React from "react";
import { Link } from "react-router-dom";

export const BottomNavigation: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-neutral-950 shadow-md">
      <div className="flex justify-around py-4">
        <div className="text-center">
          <Link
            to="/"
            className="text-white font-bold mx-2 px-2 py-1 rounded flex items-center"
          >
            <img
              src="https://i.ibb.co/pJ6WB3T/home.png"
              alt="Home"
              className="inline-block w-6 h-6"
            />
          </Link>
        </div>
        <div className="text-center">
          <Link
            to="/fin-lit"
            className="text-white font-bold mx-2 px-2 py-1 rounded flex items-center "
          >
            <img
              src="https://i.ibb.co/WWr2qcH/save-money.png"
              alt="Invest"
              className="inline-block w-6 h-6"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
