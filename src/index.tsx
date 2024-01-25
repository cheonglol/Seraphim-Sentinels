import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import App from "./App";
import { MasterProvider } from "./Providers/MasterProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MasterProvider children={<App />} />
  </React.StrictMode>,
);
