import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

const App = () => {
    const json_server_addr_port = 't2micro.aws.kesik.top:3001'

    const [persons, setPersons] = useState([])
    const [personsFiltered, setPersonsFiltered] = useState([])
    const [newSearch, setNewSearch] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    useEffect(() => {
        axios
            .get(`http://${json_server_addr_port}/persons`)
            .then(response => {
                setPersons(response.data)
                setPersonsFiltered(response.data)
            })
    }, [])

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