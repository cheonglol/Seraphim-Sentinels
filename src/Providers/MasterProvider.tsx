import React, { useEffect } from "react";
import { Provider as ReduxStoreProvider } from "react-redux";
import { store } from "../Redux/store";
import { RouterProvider } from "react-router-dom";
import { router } from "../Router/router";

interface Props {
  children?: any;
}

export const MasterProvider = ({ children }: Props) => {
  useEffect(() => {}, []);

  return (
    <>
      <ReduxStoreProvider store={store}>
        <RouterProvider router={router} />
        {children}
      </ReduxStoreProvider>
    </>
  );
};
