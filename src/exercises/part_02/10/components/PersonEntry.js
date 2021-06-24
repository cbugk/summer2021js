import React from 'react'

const PersonEntry = ({ person }) => (
    <div>
        {person.name} {person.number}< br />
    </div>
)

export default PersonEntry