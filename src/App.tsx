import React from "react";
import { SWRConfig } from 'swr'
// import { Pages } from "./pages";
import { fetcher } from "./api/apiHelper";
import { OrderOnline } from "./components/OrderOnline";

export const App = () => (
  <SWRConfig
    value={{
      refreshInterval: 3000,
      fetcher: fetcher
    }}
  >
    <OrderOnline />
  </SWRConfig>
);
