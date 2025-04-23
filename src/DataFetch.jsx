import React,{ useState,useEffect } from 'react'
import GlobalContext from './context/GlobalContext';

const DataFetch = ({children} = {}) => {
    const [globalData, setGlobalData] = useState([]);
    const [countryData, setCountryData] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('Afghanistan');
    const [fetchdata, setFetchData] = useState(false);


    useEffect(() =>{
        async function fetchApiData() {
            setFetchData(true);

            const url = 'https://covid-193.p.rapidapi.com/statistics';
            const options = {
                method: 'GET',
                headers: {
                'X-RapidAPI-Key': 'e803afe9abmsheddf022fbb09a44p13b25ajsn14ac80938e4d',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
                }
            };

            try{
                const response = await fetch(url, options);
                var data = await response.json();
            }catch (error) {
                console.error('Error fetching data:', error);
            }
            // console.log(data);

            setGlobalData(data ? data.response : []);
            setFetchData(false);
        }
        fetchApiData();
        
    }, []);


    useEffect(() =>{
        async function fetchCountryData() {
            setFetchData(true);

            const url = 'https://covid-193.p.rapidapi.com/countries';
            const options = {
                method: 'GET',
                headers: {
                'X-RapidAPI-Key': 'e803afe9abmsheddf022fbb09a44p13b25ajsn14ac80938e4d',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
                }
            };

            try{
                const response = await fetch(url, options);
                var data2 = await response.json();
            }catch (error) {
                console.error('Error fetching data:', error);
            }
            // console.log(data2);

            setCountryData(data2 ? data2.response : []);
            setFetchData(false);
        }
        fetchCountryData();
        
    }, []);

    return (
        <GlobalContext.Provider value={{globalData, countryData, selectedCountry, setSelectedCountry, fetchdata}}>
            {children}
        </GlobalContext.Provider>
    )
};

export default DataFetch
