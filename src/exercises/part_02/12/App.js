import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryList from './components/CountryList'
import CountryEntry from './components/CountryEntry'
import './App.css';

const App = () => {
    const countries_api_endpoint = 'https://restcountries.eu/rest/v2/all'

    const [countries, setCountries] = useState([])
    const [countriesFiltered, setCountriesFiltered] = useState([])
    const [searchField, setSearchField] = useState('')

    // initial values to fill are fetched from api (after first render)
    useEffect(() => {
        axios
            .get(countries_api_endpoint)
            .then(response => {
                setCountries(response.data)
                searchCountries(searchField, countries)
            })
    }, [])

    const searchCountries = (name, countryArr) =>
        setCountriesFiltered(
            countryArr.filter(
                country => country.name.toUpperCase()
                    .includes(name.toUpperCase())))

    const handleSearchChanged = (event) => {
        let str = event.target.value
        setSearchField(str)
        if (!str) {
            setCountriesFiltered([])
            return
        }
        searchCountries(str, countries)
    }

    const hasTooManyMatches = (countries) => (searchField && (countries.length > 10))
    const isCountryFound = (countries) => (countries.length === 1)
    const warningTooManyMatches = "Too many matches, specify another filter"

    return (
        <div>
            <Filter text={searchField} onSearchChange={handleSearchChanged} />
            {(hasTooManyMatches(countriesFiltered))
                ? <p>{warningTooManyMatches}<br /></p>
                : (isCountryFound(countriesFiltered))
                    ? <CountryEntry country={countriesFiltered[0]} />
                    : <CountryList countries={countriesFiltered} />
            }
        </div>
    )
}

export default App