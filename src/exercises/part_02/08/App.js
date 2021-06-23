import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.map(p => p.name === newName).includes(true)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
                name: newName,
                phone: newPhone,
            }
            setPersons(persons.concat(personObject))
            setNewName('')
        }
    }
    const handleNameChanged = (event) => {
        setNewName(event.target.value)
    }
    const handlePhoneChanged = (event) => {
        setNewPhone(event.target.value)
    }



    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newName} onChange={handleNameChanged} />
                </div>
                <div>
                    number: <input value={newPhone} onChange={handlePhoneChanged} />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person =>
                <div key={person.name} >
                    {person.name} {person.phone}< br />
                </div>)
            }
        </div >
    )
}

export default App