import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries]=useState([]);
    const [visitedCountries, setVisitedCountries]=useState([]);
    const [visitedFlags, setVisitedFlag]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data => setCountries(data));
    },[])

    
    const handleVisitedCountry=country=>{
        const newVisitedCountries=[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags= flag =>{
        const newVisitedFlag=[...visitedFlags, flag];
        setVisitedFlag(newVisitedFlag);
    }
    // remove item from an array in state
    //  use filter to select all the elements except the one you want to remove



    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx)=> <img key={idx} src={flag}></img>)
                }
            </div>

            {/* vivited country */}
            <div>
                <h5>Visited countries</h5>
                <ul>

                </ul>
            </div>

            {/* Display */}
            <div className="country-container">
            {
                countries.map(country =><Country key={country.cca3} 
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags} 
                country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;