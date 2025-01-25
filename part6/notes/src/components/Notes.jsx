import { useDispatch, useSelector } from "react-redux";
import Note from "./Note";
import { toggleImportanceOf } from "../reducers/noteSlice";
import noteService from "../services/notes";
const Notes = () => {
    const dispatch = useDispatch();
    const filteredNotes = useSelector(state => {
        console.log('state.filter', state.filter)
        if ( state.filter === 'ALL' ) {
          return state.notes
        }
        return state.filter  === 'IMPORTANT' 
          ? state.notes.filter(note => note.important)
          : state.notes.filter(note => !note.important)
      })

      const handleClick =async (note) => {
 const changedNote = { ...note, important: !note.important }
 const data =  await noteService.update(note.id, changedNote)
        dispatch(toggleImportanceOf(data))
      }
//console.log(filteredNotes);
    return (
        <ul>
        {filteredNotes.map(note => 
          <Note 
          note={note} 
          key={note.id} 
          handleClick = {()=> handleClick(note)}
           />
        )}
    </ul>
    );
}
export default Notes;     // Don't forget to use export default!