import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryPanel from './components/CountryPanel';
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

    const handleClickShow = (event) => {
        const name = event.target.value
        searchCountries(name, countries)
        setSearchField(name)
    }

    const handleSearchChanged = (event) => {
        let str = event.target.value
        setSearchField(str)
        if (!str) {
            setCountriesFiltered([])
            return
        }
        searchCountries(str, countries)
    }

    const searchCountries = (name, countryArr) =>
        setCountriesFiltered(
            countryArr.filter(
                country => country.name.toUpperCase()
                    .includes(name.toUpperCase())))

    return (
        <div>
            <Filter text={searchField} onSearchChange={handleSearchChanged} />
            <CountryPanel
                countries={countriesFiltered}
                onClickShow={handleClickShow}
            />
        </div>
    )
}

export default App