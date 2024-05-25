import React from "react";
import { GrowSavingsCard } from "../Components/GrowSavingsCard";

export const GrowSavingsView = () => {
  return (
    <>
      <div className="bg-[url('https://img.freepik.com/free-photo/subway-station-with-fastmoving-lights-shiny-escalators_157027-4278.jpg?t=st=1716637710~exp=1716641310~hmac=8b61f6b486ee4b5e19229fd60530a88751564cb54e932d3e817829b5d4239d31&w=2000')] h-screen bg-cover bg-center">
        <div className="p-12 bg-black bg-opacity-80 h-screen">
          <h1 className="text-5xl">Grow your savings!</h1>
          <div className="pt-4"></div>
          <GrowSavingsCard
            header="Fixed deposit"
            paragraph="Earn $150 in 3 month with $10,000"
            interestRate={5}
          />

          <GrowSavingsCard
            header="Singapore Savings Bonds"
            paragraph="Entrusted by the MAS, receive regularly payouts every 6 months!"
            interestRate={3}
          />

          <GrowSavingsCard
            header="Singapore T-Bills"
            paragraph="Entrusted by the MAS, receive interest after 6 months!"
            interestRate={3.6}
          />
        </div>
      </div>
    </>
  );
};

export default GrowSavingsView;
