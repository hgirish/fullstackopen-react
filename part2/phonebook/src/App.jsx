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

  const addPerson = (event) => {   
    event.preventDefault()
    if (newName && persons.findIndex(p =>p.name.toLowerCase() === newName.toLowerCase()) !== -1){
      const replaceNumber = confirm(`${newName} is already added to phonebook, replace the old number with new one?`)
      if (replaceNumber) {
        const existingPerson = persons.find(p=> p.name.toLowerCase() === newName.toLowerCase())
        const changedPerson = {...existingPerson, number: newNumber}
        personService.updatePerson(changedPerson)
       
        .then(returnedPerson => {        
          setPersons(persons.map(p => p.id === returnedPerson.id  ? returnedPerson : p))
          setNewName('')
          setNewNumber('')
        })
      }

      return
    }
    const personObject = {
      name: newName,
      number: newNumber
    }
    personService.addPerson(personObject)
    .then(returnedPerson => {     
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
    })
    
    

  }

const handleDelete = (id, name) => {
const confirmDelete = window.confirm(`Delete ${name}`)
if (confirmDelete) {
  personService.deletePerson(id)
  .then(() => {    
    setPersons(persons.filter(p => p.id !== id))
  })  
  .catch(() => {
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

        <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
  
        <h2>Numbers</h2>

        <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
       
   
  
  
      </div> 
  )
}

export default App
