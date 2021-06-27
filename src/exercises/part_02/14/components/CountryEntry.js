import React from 'react'
import WeatherPanel from './WeatherPanel';

const CountryEntry = ({ country, weather, wIcon }) => {
    return (
        <div key={country.numericCode}>
            <h2>{country.name}</h2>

            capital: {country.capital} <br />
            population: {country.population} <br />

            <h3>Spoken languages</h3>

            <ul>
                {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
            </ul>

            <img className="countryFlag" src={country.flag} alt="country's flag" /> <br />

            <WeatherPanel country={country} weather={weather} wIcon={wIcon} />
        </div>
    )
}

export default CountryEntry