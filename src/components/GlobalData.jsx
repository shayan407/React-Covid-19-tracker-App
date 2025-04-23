import React from 'react'
import GlobalCases from './globalDataComps/globalCases'
import GlobalActiveCases from './globalDataComps/globalActiveCases'
import GlobalRecoveredCases from './globalDataComps/globalRecoveredCases'
import GlobalFatalities from './globalDataComps/globalFatalities'

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
