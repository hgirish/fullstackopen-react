import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchString, setSearchString] = useState('')
  let notesToShow = [...persons];

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

  return (  
      <div>
        <h2>Phonebook</h2>
        <div>filter shown with <input onChange={handleFilterChange} /></div>
        <h2>add a new</h2>
        <form onSubmit={addNote}>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
       
       <ul>
        {personsToShow.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
       </ul>   
  
  
      </div> 
  )
}

export default App
