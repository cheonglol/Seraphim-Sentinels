import { Accordion, AccordionTab } from "primereact/accordion";
import { useRouteError } from "react-router-dom";
import { BasicLayout } from "../../Layouts/Base/BasicLayout";

export const ErrorView = () => {
  const routerError: any = useRouteError();
  console.log(routerError);
  return (
    <BasicLayout
      mainContent={
        <div className="max-w-[80vw] mx-auto flex flex-col gap-6">
          <h1 className="text-6xl text-center">{routerError.status}</h1>
          <p className="text-center">{routerError.error.message}</p>
          <Accordion className="mx-6">
            <AccordionTab header="Stack Message">
              <code>{routerError.error.stack}</code>
            </AccordionTab>
          </Accordion>
        </div>
      }
    />
  );
};
