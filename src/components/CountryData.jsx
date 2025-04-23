import React from 'react'
import Input from './countryDataComps/Input'
import CountryCases from './countryDataComps/CountryCases'
import CountryActiveCases from './countryDataComps/CountryActiveCases'
import CountryRecoveredCases from './countryDataComps/CountryRecoveredCases'
import CountryFatalities from './countryDataComps/CountryFatalities'

const CountryData = () => {
  return (
    <>
        <div className='my-16'>
            <h2 className='text-white text-center text-3xl font-semibold'>Individual Country Data</h2>
            <Input />
        </div>
        <div className="container flex justify-between">
            <CountryCases className="flex-1/4"/>
            <CountryActiveCases className="flex-1/4"/>
            <CountryRecoveredCases className="flex-1/4"/>
            <CountryFatalities className="flex-1/4"/>
        </div>
    </>
  )
}

export default CountryData
