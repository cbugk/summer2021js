import React from 'react'

const Filter = ({ text, onSearchChange }) => (
    <>
        find countries: <input value={text} onChange={onSearchChange} />
    </>
)

export default Filter