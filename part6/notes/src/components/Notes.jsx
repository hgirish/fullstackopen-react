import { useDispatch, useSelector } from "react-redux";
import Note from "./Note";
import { toggleImportanceOf } from "../reducers/noteSlice";

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
//console.log(filteredNotes);
    return (
        <ul>
        {filteredNotes.map(note => 
          <Note 
          note={note} 
          key={note.id} 
          handleClick = {()=> dispatch(toggleImportanceOf(note.id))}
           />
        )}
    </ul>
    );
}
export default Notes;     // Don't forget to use export default!