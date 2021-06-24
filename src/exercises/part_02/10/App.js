import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [personsFiltered, setPersonsFiltered] = useState([...persons])
    const [newSearch, setNewSearch] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const updatePersonsFiltered = (text, personArr) => setPersonsFiltered(personArr.filter(p => p.name.toUpperCase().includes(text.toUpperCase())))
    const addPerson = (event) => {
        event.preventDefault()
        if (persons.map(p => p.name === newName).includes(true)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName,
                number: newNumber,
            }
            const personsCache = persons.concat(personObject)
            setPersons(personsCache)
            setNewName('')
            setNewNumber('')
            updatePersonsFiltered(newSearch, personsCache)
        }
    }
    const handleNameChanged = (event) => {
        event.preventDefault()
        setNewName(event.target.value)
    }
    const handleNumberChanged = (event) => {
        event.preventDefault()
        setNewNumber(event.target.value)
    }
    const handleSearchChanged = (event) => {
        event.preventDefault()
        let str = event.target.value
        setNewSearch(str)
        if (!str) {
            setPersonsFiltered(persons)
            return
        }
        updatePersonsFiltered(str, persons)
    }

    return (
        <div>
            <h2>Phonebook</h2>

            <Filter text={newSearch} onSearchChange={handleSearchChanged} />

            <h3>Add a new</h3>
            <PersonForm
                onSubmit={addPerson}
                name={newName}
                onNameChange={handleNameChanged}
                number={newNumber}
                onNumberChange={handleNumberChanged}
            />

            <h3>Numbers</h3>
            <PersonList persons={personsFiltered} />
        </div>
    )
}

export default App