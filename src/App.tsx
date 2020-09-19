import React from "react";
import { SWRConfig } from 'swr'
import { Pages } from "./pages";
import { fetcher } from "./api/apiHelper";

export const App = () => (
  <SWRConfig
    value={{
      refreshInterval: 3000,
      fetcher: fetcher
    }}
  >
    <Pages />
  </SWRConfig>
);
