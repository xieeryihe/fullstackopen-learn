import { useState, useEffect } from 'react'
import phonebookService from './services/phonebookService'

const Filter = ({nameFilter, setNameFilter}) => {
  const onNameFilterChange = (event) => {
    const changedName = event.target.value
    setNameFilter(changedName)
  }
  return <div>filter shown with <input value={nameFilter} onChange={onNameFilterChange}/></div>
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
    const person = persons.find(person => person.name === newName);
    if (person) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const newContact = {
          name: newName,
          number: newNumber
        }
        phonebookService.updateContact(person.id, newContact).then(contact => {
          console.log(`New contact is ${JSON.stringify(newContact)}`);
          const newPersons = persons.map(person => person.id === contact.id ? contact : person)
          setPersons(newPersons)
          setNewName('')
          setNewNumber('')
        })
      }
    } else {
      const newPerson = { name: newName, number: newNumber }
      phonebookService.addContact(newPerson).then(person => {
        setPersons(persons.concat(person))
        setNewName('')
        setNewNumber('')
      })
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

const Contacts = ({filteredPersons, persons, setPersons}) => {
  const deleteContact = (targetContact) => {
    if (window.confirm(`Delete ${targetContact.name}?`)) {
      phonebookService.deleteContact(targetContact.id)
        .then(deletedContact => {
          console.log(deletedContact);
          const newPersons = persons.filter(person => person.id !== deletedContact.id)
          setPersons(newPersons)
        })
        .catch(error => 
          console.error('Error:', error)
        )
    }
  }

  return filteredPersons.map(contact => 
    <div key={contact.name}>
      {contact.name} {contact.number}&nbsp;
      <button onClick={() => deleteContact(contact)}> delete </button>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameFilter, setNameFilter] = useState('')

  const filteredPersons = nameFilter 
    ? persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))
    : persons

  useEffect(() => {
    phonebookService.getAllContacts().then(allContacts => setPersons(allContacts))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} setnameFilter={setNameFilter}/>
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h3>Members</h3>
      <Contacts filteredPersons={filteredPersons} persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App