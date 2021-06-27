import React from 'react'
import CountryItem from './CountryItem'

const CountryList = ({ countries, onClickShow }) => (
    countries.map(country => <CountryItem key={country.numericCode} country={country} onClickShow={onClickShow} />)
)

export default CountryList