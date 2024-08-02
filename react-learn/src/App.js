import { useState } from 'react'

const Filter = ({newNameFilter, setNewNameFilter}) => {
  const onNameFilterChange = (event) => {
    const changedName = event.target.value
    setNewNameFilter(changedName)
  }
  return <div>filter shown with <input value={newNameFilter} onChange={onNameFilterChange}/></div>
}
  
const PersonForm = ({persons, setPersons}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const onNameChange = (event) => {
    const changedName = event.target.value  // event.target 是 <input value="aaa">, aaa 是输出的内容
    setNewName(changedName)
  }

  const onNumberChange = (event) => {
    const changedNumber = event.target.value
    setNewNumber(changedNumber)
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
  )
}

const Persons = ({filteredPersons}) => 
  <>{filteredPersons.map(person => <div key={person.name}>{person.name} {person.number}</div>)}</>
  // map 方法需要确保返回一个包裹元素，否则渲染可能不会按预期工作。所以加了一个

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newNameFilter, setNewNameFilter] = useState('')

  const filteredPersons = newNameFilter 
    ? persons.filter(person => person.name.toLowerCase().includes(newNameFilter.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newNameFilter={newNameFilter} setNewNameFilter={setNewNameFilter}/>
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h3>Members</h3>
      <Persons filteredPersons={filteredPersons}/>
    </div>
  )
}

export default App