import React from 'react'

const Filter = ({ text, onSearchChange }) => (
    <>
        find countries: <input value={text} onChange={onSearchChange} /> <br />
    </>
)

export default Filter