// import { useState } from 'react'

import CountryData from "./components/CountryData";
import GlobalData from "./components/GlobalData";
import DataFetch from "./DataFetch";

function App() {
  DataFetch();

  return (
    <>
      <div className="container flex flex-col mx-auto mt-10">
        <h1 className="text-4xl text-center font-bold text-[#540804] mb-16">Covid 19 Tracker</h1>
        <DataFetch>
          <GlobalData />
          <CountryData />
        </DataFetch>
      </div>
    </>
  )
}

export default App
