import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const onNameChange = (event) => {
    const changedName = event.target.value
    setNewName(changedName)
  }

  const addName = (event) => {
    event.preventDefault()
    for (let i = 0; i<persons.length; i++) {
      if (newName === persons[i].name){
        alert(`${newName} is already added to phonebook`)
        return
      }
    }
    const newPerson = { name: newName }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={onNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Members</h2>
      {persons.map(person => <div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App