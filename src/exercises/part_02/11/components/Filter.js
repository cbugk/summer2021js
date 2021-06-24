import React from 'react'

const Filter = ({ text, onSearchChange }) => (
    <>
        filter shown with: <input value={text} onChange={onSearchChange} />
    </>
)

export default Filter