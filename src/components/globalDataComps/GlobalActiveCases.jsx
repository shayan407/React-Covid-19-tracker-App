/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import { NumericFormat } from 'react-number-format';

const globalActiveCases = () => {
  const { globalData, fetchdata } = useContext(GlobalContext);
  // console.log("globaldata",fetchdata ? globalData : null);

  const totalGlobalActiveCases = globalData.reduce((sum, countryData) => {
    const cases = countryData?.cases?.active;
    return sum + (cases || 0); // skip nulls
  }, 0);
  

  return (
    <div className="flex flex-col items-center data-div">
      <h2 className='text-white text-2xl font-light'>Global Active Cases</h2>
      <h2 className='text-white text-3xl font-extrabold mt-2'>
        {fetchdata ? "Loading..." : <NumericFormat value={totalGlobalActiveCases} allowLeadingZeros thousandSeparator="," displayType='text'/>}
      </h2>
    </div>
  );
}

export default globalActiveCases
