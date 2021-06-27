import React from 'react'

const CountryItem = ({ country, onClickShow }) => {
    return (
        <>
            {country.name}
            <button value={country.name} onClick={onClickShow}>show</button>
            < br />
        </>
    )
}
export default CountryItem