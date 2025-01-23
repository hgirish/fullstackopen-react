import { useDispatch, useSelector } from "react-redux";
import Note from "./Note";
import { toggleImportanceOf } from "../reducers/note-reducer";

const Notes = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state);

    return (
        <ul>
        {notes.map(note => 
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