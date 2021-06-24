import React from 'react'
import PersonEntry from './PersonEntry'

const PersonList = ({ persons }) => (
    <>
        {persons.map(person => <PersonEntry key={person.name} person={person} />)}
    </>
)

export default PersonList