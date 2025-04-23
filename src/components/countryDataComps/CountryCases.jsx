/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useState } from 'react'
import GlobalContext from '../../context/GlobalContext'
import { NumericFormat } from 'react-number-format';


const globalCases = () => {
  const { globalData, selectedCountry, fetchdata } = useContext(GlobalContext);
  // console.log("globaldata",globalData);

  const filteredData = globalData.filter(
    (item) => item.country === selectedCountry
  );

  const totals = filteredData.reduce(
    (acc, item) => {
      acc.cases += item.cases?.total || 0;
      return acc;
    },
    { cases: 0 }
  );


  return (
    <div className="flex flex-col items-center data-div">
      <h2 className='text-white text-2xl font-light'>{selectedCountry} Cases as of Today</h2>
      <h2 className='text-white text-3xl font-extrabold mt-2'>
        {fetchdata ? "Loading..." : <NumericFormat value={totals.cases} allowLeadingZeros thousandSeparator="," displayType='text'/>}
      </h2>
    </div>
  );
};


export default globalCases
