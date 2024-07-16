import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import personService from './services/persons'
import Notification from './components/Notification'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')
  const [message, setMessage] = useState(null)
  const [messageClassName, setMessageClassName] = useState('success')
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
        .catch(() => {
          setMessage(`the person '${newName}' has already been removed from the server`)
          setMessageClassName('error')
          setTimeout(()=>{
            setMessage(null)
            setMessageClassName('')
          }, 5000)
          
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
      setMessage(`Added '${returnedPerson.name}'`)
      setMessageClassName('success')
      setTimeout(()=>{
      setMessage(null)
      setMessageClassName('')
     }, 5000)
      
    })
    .catch(error => {
      const errorMessage = error.response.data.error
      console.log(errorMessage)
      setMessage(errorMessage)
    setMessageClassName('error')
    setTimeout(()=>{
      setMessage(null)
      setMessageClassName('')
    }, 5000)
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
    setMessage(`the person '${name}' was already deleted from the server`)
    setMessageClassName('error')
    setTimeout(()=>{
      setMessage(null)
      setMessageClassName('')
    }, 5000)
    setPersons(persons.filter(p => p.id !== id))
  })
}
}

  return (  
      <div>
        <h2>Phonebook</h2>
        <Notification message={message} className={messageClassName} />

       <Filter handleFilterChange={handleFilterChange} />

        <h2>add a new</h2>

        <PersonForm newName={newName} newNumber={newNumber} addPerson={addPerson} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
  
        <h2>Numbers</h2>

        <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
       
   
  
  
      </div> 
  )
}

export default App
