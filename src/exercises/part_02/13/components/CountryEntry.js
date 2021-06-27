import React from 'react'

const CountryEntry = ({ country }) => (
    <div key={country.numericCode}>
        <h2>{country.name}</h2>

        capital: {country.capital} <br />
        population: {country.population} <br />

        <h3>languages</h3>

        <ul>
            {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
        </ul>

        <img className="countryFlag" src={country.flag} alt="country's flag" />
    </div>
)

export default CountryEntry