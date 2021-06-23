import React, { useState } from 'react'

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

    const updatePersonsFiltered = (text, personArr) => setPersonsFiltered(personArr.filter(p => p.name.toUpperCase().includes(text)))
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
        setNewName(event.target.value)
    }
    const handleNumberChanged = (event) => {
        setNewNumber(event.target.value)
    }
    const handleSearchChanged = (event) => {
        let str = event.target.value
        setNewSearch(str)
        if (!str) {
            setPersonsFiltered(persons)
            return
        }
        str = str.toUpperCase()
        updatePersonsFiltered(str, persons)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            filter shown with: <input value={newSearch} onChange={handleSearchChanged} />
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChanged} />
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleNumberChanged} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {personsFiltered.map(person =>
                <div key={person.name} >
                    {person.name} {person.number}< br />
                </div>)
            }
        </div >
    )
}

export default App