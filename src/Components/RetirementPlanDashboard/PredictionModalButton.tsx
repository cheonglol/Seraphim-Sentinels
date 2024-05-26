import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { LineChart } from "./LineChart";

export const PredictionModalButton = () => {
  const [modalVis, setModalVis] = useState<boolean>(false);
  return (
    <>
      <div className="h-[5rem]">
        <Button
          className="my-5 ml float-right p-4 bg-white text-black"
          label="View Forecast📈"
          onClick={() => setModalVis(true)}
        />
      </div>
      <Dialog
        showHeader={true}
        visible={modalVis}
        onHide={() => setModalVis(false)}
        className="min-h-[75vh] min-w-[80vw] m-auto"
      >
        <LineChart
          lineChartData={{
            labels: ["2024", "2025", "2026", "2027", "2028", "2029"],
            datasets: [
              {
                label: "Forecast based on current rate",
                data: [135000, 150000, 160000, 170000, 180000, 190000],
                fill: false,
                borderColor: "orange",
                pointRadius: 6,
                pointBackgroundColor: "#1d4ed8",
                pointHoverRadius: 10,
                tension: 0.4,
              },
            ],
          }}
        />
      </Dialog>
    </>
  );
};
