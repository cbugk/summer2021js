import React from 'react'

const WeatherPanel = ({ country, weather, wIcon }) => {
    let content = <></>

    const toCompass = (degrees) =>
        ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
            'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N']
        [Math.floor(0.5 + degrees / 22.50) % 16]

    try {
        content = <>
            temperature: {(new Intl.NumberFormat('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            })).format(weather.main.temp - 273.15)} Celcius <br />

            <img src={wIcon} alt="weather icon" /> <br />

            wind: {weather.wind.speed} m/s <br />
            direction: {toCompass(weather.wind.deg)} <br />
        </>
    } catch (e) {
    }

    return (
        <>
            <h3>Weather in {country.capital}</h3>
            {content}
        </>
    )
}

export default WeatherPanel