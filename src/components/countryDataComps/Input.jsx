import React, { useState, useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'

const Input = () => {
    const {countryData, setSelectedCountry} = useContext(GlobalContext);
    // console.log(selectedCountry);
    
    return (
        <div className='container my-4 w-1/3 mx-auto'>
            <select 
                className="dropdown w-full p-2 px-5 border border-gray-300 rounded-sm outline-none border-none bg-white shadow-2xl" 
                onChange={(e) => setSelectedCountry(e.target.value)}>
                {countryData.map((country, index) => {
                    return(
                        <option key={index} value={country}>
                            {country}
                        </option>
                    )
                })}
            </select>
        </div>
    );
};

export default Input
