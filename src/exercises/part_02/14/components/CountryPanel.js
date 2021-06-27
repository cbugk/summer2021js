import React from 'react'
import CountryList from './CountryList'
import CountryEntry from './CountryEntry'

const CountryPanel = ({ countries, onClickShow, weather, wIcon }) => (
    (countries.length === 1)
        ? <CountryEntry country={countries[0]} weather={weather} wIcon={wIcon} />
        : (countries.length > 10)
            ? <>Too many matches, specify another filter<br /></>
            : < CountryList countries={countries} onClickShow={onClickShow} />
)

export default CountryPanel