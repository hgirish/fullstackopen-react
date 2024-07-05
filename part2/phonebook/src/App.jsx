import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import personService from './services/persons'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    console.log('effect')
    personService.getAll()
    .then(data => {
      console.log('promise fulfilled')
      setPersons(data)
    })
  }, [])


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange= (event) => {
   const newSearch = event.target.value;
   

 
    setSearchString(newSearch)
  }
  const personsToShow = searchString.length === 0 
  ? persons
  : persons.filter(x=> x.name.toLowerCase().includes(searchString.toLowerCase()))

  const addNote = (event) => {   
    event.preventDefault()
    if (newName && persons.findIndex(p =>p.name.toLowerCase() === newName.toLowerCase()) !== -1){
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
    const newPersons = persons.concat(personObject)
    setPersons(newPersons)
    
    setNewName('')
  }

const handleDelete = (id, name) => {
const confirmDelete = window.confirm(`Delete ${name}`)
if (confirmDelete) {
  personService.deletePerson(id)
  .then(response => {
    console.log(response)
    setPersons(persons.filter(p => p.id !== id))
  })  
  .catch(error => {
    alert(`the person '${name}' was already deleted from the server`)
    setPersons(persons.filter(p => p.id !== id))
  })
}
}

  return (  
      <div>
        <h2>Phonebook</h2>

       <Filter handleFilterChange={handleFilterChange} />

        <h2>add a new</h2>

        <PersonForm addNote={addNote} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
  
        <h2>Numbers</h2>

        <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
       
   
  
  
      </div> 
  )
}

export default App
