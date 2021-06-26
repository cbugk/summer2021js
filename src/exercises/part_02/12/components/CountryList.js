import React from 'react'

const CountryList = ({ countries }) => (
    countries.map(country =>
        <div key={country.numericCode} >
            {country.name} < br />
        </div>)
)

export default CountryList