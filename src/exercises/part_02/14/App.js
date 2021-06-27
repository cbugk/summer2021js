import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import CountryPanel from './components/CountryPanel';
import './App.css';

const App = () => {
    // OpenWeatherMap API key for "Current Weather data" service
    const owpApiKey = process.env.REACT_APP_OWP_API_KEY
    const restCountriesEndpoint = 'https://restcountries.eu/rest/v2/all'

    const [countries, setCountries] = useState([])
    const [countriesFiltered, setCountriesFiltered] = useState([])
    const [searchFilter, setSearchFilter] = useState('')
    const [weather, setWeather] = useState({})
    const [weatherIcon, setWeatherIcon] = useState('')

    // initial values to fill are fetched from api (after first render)
    useEffect(() => {
        axios
            .get(restCountriesEndpoint)
            .then(response => {
                setCountries(response.data)
                searchCountries(searchFilter, countries)
            })
    }, [])

    useEffect(() => {
        if (countriesFiltered.length === 1) {
            axios
                .get(owpEndpointGen(countriesFiltered[0].capital))
                .then(response => {
                    setWeather(response.data)
                })
        }
    }, [countriesFiltered])

    useEffect(() => {
        try {
            setWeatherIcon(wIconAddress(weather.weather[0].icon))
        } catch (error) {
        }
    }, [weather])

    const owpEndpointGen = (
        () => (cityName) => (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${owpApiKey}`)
    ).call()

    const wIconAddress = (icon) => `https://openweathermap.org/img/wn/${icon}.png`

    const handleClickShow = (event) => {
        const name = event.target.value
        searchCountries(name, countries)
        setSearchFilter(name)
    }

    const handleSearchChanged = (event) => {
        let str = event.target.value
        setSearchFilter(str)
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
            <Filter text={searchFilter} onSearchChange={handleSearchChanged} />
            <CountryPanel
                countries={countriesFiltered}
                onClickShow={handleClickShow}
                weather={weather}
                wIcon={weatherIcon}
            />
        </div>
    )
}

export default App