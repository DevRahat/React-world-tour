import { useState } from 'react';
import '../Country/Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3}=country;

    const [visited, setVisited]=useState(false);

    const handleVisited= ()=>{
        setVisited(!visited);
    }

    const passWithParams=()=>handleVisitedCountry(country);
    
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple': 'white'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            
            <button onClick={()=>handleVisitedCountry}>Mark As visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited':'Going'} </button>
            {visited ? 'I have Visited this country': 'I Want to visit'}
            


        </div>
    );
};

export default Country;