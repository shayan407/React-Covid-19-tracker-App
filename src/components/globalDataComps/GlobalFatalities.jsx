/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import { NumericFormat } from 'react-number-format';

const globalFatalities = () => {
  const { globalData, fetchdata } = useContext(GlobalContext);
  // console.log("globaldata",globalData);

  const totalGlobalDeaths = globalData.reduce((sum, countryData) => {
    const cases = countryData?.deaths?.total;
    return sum + (cases || 0); // skip nulls
  }, 0);
  

  return (
    <div className="flex flex-col items-center data-div">
      <h2 className='text-white text-2xl font-light'>Global Deaths</h2>
      <h2 className='text-white text-3xl font-extrabold mt-2'>
        {fetchdata ? "Loading..." : <NumericFormat value={totalGlobalDeaths} allowLeadingZeros thousandSeparator="," displayType='text'/>}
      </h2>
    </div>
  );
}

export default globalFatalities
