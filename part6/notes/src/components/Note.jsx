

const Note = ({note, handleClick}) => {
    
    
    return (
        <li  onClick={handleClick} >

        {note.content} <strong>{note.important ? 'important' : ''}</strong>
        
    </li>
    );
}

export default Note;     // Don't forget to use export default!