import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { createNote, toggleImportanceOf } from './reducers/note-reducer'

const App = () => {


  const dispatch = useDispatch()
  const notes = useSelector(state => state)

const toggleImportance = (id) => {
  dispatch(toggleImportanceOf(id))
}

  const addNote = (event) => {
      event.preventDefault()
      const content = event.target.note.value 
      event.target.note.value = ''
      dispatch(createNote(content))
  }

  return (
      <div>
          <form onSubmit={addNote}>
              <input name="note" />
              <button type="submit">add</button>
          </form>
          <ul>
              {notes.map(note => 
                  <li key={note.id} onClick={()=> toggleImportance(note.id)} >
                      {note.content} <strong>{note.important ? 'important' : ''}</strong>
                  </li>
              )}
          </ul>
      </div>
  )
}


export default App
