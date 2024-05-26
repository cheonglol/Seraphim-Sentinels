/* eslint-disable jsx-a11y/alt-text */

import { Skeleton } from "primereact/skeleton";
import { useEffect, useState } from "react";
import FinLitBoilerplate, {
  FinLitSlideProps,
} from "../Components/FinLiterature/FinLitBoilerplate";
import { getFinLitSlideContents } from "../Helpers/FinLitStaticContentHelper";

export const FinancialLiteratureView = () => {
  const [contentArr, setContentArr] = useState<FinLitSlideProps[] | undefined>(
    undefined
  );

  useEffect(() => {
    const fetchData = async () => {
      const prom = await getFinLitSlideContents();
      Promise.resolve(prom).then((data) => {
        setContentArr(data as FinLitSlideProps[]);
      });
    };
    if (!contentArr) {
      fetchData();
    }
  });

  if (!!contentArr) {
    return (
      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        {contentArr.map((element) => {
          return (
            <FinLitBoilerplate
              backgroundImageURL={element.backgroundImageURL}
              imageURL={element.imageURL}
              title={element.title}
              description={element.description}
              endText={element.endText}
            />
          );
        })}
      </div>
    );
  } else {
    return <Skeleton animation="wave" height="90vh" />;
  }
};

export default FinancialLiteratureView;
