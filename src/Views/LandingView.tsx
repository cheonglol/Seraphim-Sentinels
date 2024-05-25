import { useEffect, useState } from "react";
import { Card } from "primereact/card";
import ReactPlayer from "react-player";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import { createClient } from "@supabase/supabase-js";

// TODO: move each post as its own component under `src\Components\blog` so i dont make this fucking landing page SO LONG TO READ wtf

export const LandingView = () => {
  const supabaseUrl = process.env.REACT_APP_SUPABASE_PROJECT_URL;
  const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
  const [isDataFetched, setIsDataFetched] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      let supabase = createClient(supabaseUrl as string, supabaseKey as string);
      if (isDataFetched) {
        return;
      }
      try {
        const { data, error } = await supabase.from("Customer").select("*");
        console.log(data);
        //alert(data);
        //alert(JSON.stringify(error));
      } catch (error) {
        console.log(error);
      }
      setIsDataFetched(true);
      return;
    };
    fetchData();
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
