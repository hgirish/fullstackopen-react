import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    
    noteService
    .getAll()
      .then(initialNotes => {      
        setNotes(initialNotes)
      })
  }, [])


  
  const notesToShow = 
  showAll ? notes : notes.filter(note => note.important)

  const handleNewNoteChange = (event) => {
setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      
    }
    noteService.create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote))
      setNewNote('')
    })
    
    
  }

const toggleImportanceOf = id => {

const note = notes.find(note => note.id === id)
const changedNote = {...note, important: !note.important}

noteService
.update(id, changedNote)
.then(returnedNote => {
  setNotes(notes.map(note => note.id === id ? returnedNote : note))
})
.catch(error => {
  alert(`the note '${note.content}' was already deleted from server`)
  setNotes(notes.filter(note => note.id !== id))
})

}
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={()=> setShowAll(!showAll)}>show {showAll ? 'important' : 'all'}</button>
      </div>
      <h2>Add new note</h2>
      <form>
        <input value={newNote} onChange={handleNewNoteChange} />
        <button type='submit' onClick={addNote}>Add note</button>
      </form>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
           />
        )}
      </ul>
    </div>
  )
}
export default App
