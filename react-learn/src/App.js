import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newNameFilter, setNewNameFilter] = useState('')

  const filteredPersons = newNameFilter 
    ? persons.filter(person => person.name.toLowerCase().includes(newNameFilter.toLowerCase()))
    : persons

  const onNameChange = (event) => {
    const changedName = event.target.value
    setNewName(changedName)
  }

  const onNumberChange = (event) => {
    const changedNumber = event.target.value
    setNewNumber(changedNumber)
  }

  const onNameFilterChange = (event) => {
    const changedName = event.target.value
    let newFilterPersons = []
    setNewNameFilter(changedName)
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = { name: newName, number: newNumber }
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with <input value={newNameFilter} onChange={onNameFilterChange}/>
        </div>
      <h2>add a new</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={onNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={onNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Members</h2>
      {filteredPersons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App