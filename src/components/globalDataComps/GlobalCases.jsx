/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import { NumericFormat } from 'react-number-format';


const globalCases = () => {
  const { globalData, fetchdata } = useContext(GlobalContext);
  // console.log("globaldata",globalData);

  const totalGlobalCases = globalData.reduce((sum, countryData) => {
    const cases = countryData?.cases?.total;
    return sum + (cases || 0); // skip nulls
  }, 0);
  

  return (
    <div className="flex flex-col items-cente data-div">
      <h2 className='text-white text-2xl font-light'>Global Cases as of Today</h2>
      <h2 className='text-white text-3xl font-extrabold mt-2'>
        {fetchdata ? "Loading..." : <NumericFormat value={totalGlobalCases} allowLeadingZeros thousandSeparator="," displayType='text'/>}
      </h2>
    </div>
  );
};


export default globalCases
