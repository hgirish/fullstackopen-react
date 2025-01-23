import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { createNote, toggleImportanceOf } from './reducers/note-reducer'
import NewNote from './components/NewNote'

const App = () => {


  const dispatch = useDispatch()
  const notes = useSelector(state => state)

const toggleImportance = (id) => {
  dispatch(toggleImportanceOf(id))
}



  return (
      <div>
          <NewNote />
       
      </div>
  )
}


export default App
