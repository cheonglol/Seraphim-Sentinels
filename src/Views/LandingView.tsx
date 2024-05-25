import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import ReactPlayer from "react-player";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import {
  getCustomerList,
  getCustomerList_ByCustomerID,
} from "../APIs/Supabase/Customer_Table_APIs";
import { getTransactionAPI_ByCustomerID } from "../APIs/Supabase/Transaction_Table_APIs";

// TODO: move each post as its own component under `src\Components\blog` so i dont make this fucking landing page SO LONG TO READ wtf

export const LandingView = () => {
  const [isDataFetched, setIsDataFetched] = useState<boolean>(false);
  //   const [first, setfirst] = useState<unknown>("NOTHING");

  useEffect(() => {
    if (!isDataFetched) {
      const fetchData = async () => {
        try {
          //const data = await getCustomerList();
          const data = await getTransactionAPI_ByCustomerID(1);
          alert(JSON.stringify(data));
        } catch (error) {
          alert(JSON.stringify(error));
        }
        setIsDataFetched(true);
      };
      fetchData();
    }
  }, []);

  return (
    <BasicLayout
      mainContent={
        <div className="grid grid-cols-1 sm:grid-cols-0 gap-4 max-w-[90vw] m-auto">
          <Card
            title="Getting Started"
            subTitle="Using `Prime React` as UI Lib"
          >
            <ReactPlayer
              width="fit"
              controls={true}
              url={
                "https://www.youtube.com/watch?v=OrRffCobuts&list=PLC9bp-OHi-WnsnYrHSNwSvKUVDyjXvfqF&index=3"
              }
            />
          </Card>
        </div>
      }
    />
  );
};
