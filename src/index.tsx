import { PrimeReactProvider } from "primereact/api";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import "./global.css";
import { router } from "./Router/Router";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import reportWebVitals from "./reportWebVitals";

// ### PRIMEREACT CSS ###
import "primeicons/primeicons.css";
import "primereact/resources/themes/md-dark-deeppurple/theme.css";
import { Footer } from "./Components/Navigational/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

interface Props {
  children?: any;
}
const MasterProvider = ({ children }: Props) => {
  useEffect(() => {}, []);

  return (
    <>
      {/* <ReduxStoreProvider store={store}> */}
      <RouterProvider router={router} />
      <PrimeReactProvider>{children}</PrimeReactProvider>
      {/* </ReduxStoreProvider> */}
    </>
  );
};

root.render(
  <React.StrictMode>
    <MasterProvider children={<App />} />
    <Footer />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
