import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addNote = (event) => {   
    event.preventDefault()
    if (newName && persons.findIndex(p =>p.name.toLowerCase() === newName.toLowerCase()) !== -1){
      alert(`${newName} is already added to phonebook`)
      return
    }
    const personObject = {
      name: newName
    }
    const newPersons = persons.concat(personObject)
    setPersons(newPersons)
    
    setNewName('')
  }

  return (  
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addNote}>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
       
       <ul>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
       </ul>   
  
  
      </div> 
  )
}

export default App
