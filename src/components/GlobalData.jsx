import React from 'react'
import GlobalCases from './globalDataComps/GlobalCases'
import GlobalActiveCases from './globalDataComps/GlobalActiveCases'
import GlobalRecoveredCases from './globalDataComps/GlobalRecoveredCases'
import GlobalFatalities from './globalDataComps/GlobalFatalities'

const GlobalData = () => {
  return (
    <>
      <div className="container flex justify-between">
        <GlobalCases className="flex-1/4"/>
        <GlobalActiveCases className="flex-1/4"/>
        <GlobalRecoveredCases className="flex-1/4"/>
        <GlobalFatalities className="flex-1/4"/>
      </div>
    </>
  )
}

export default GlobalData
