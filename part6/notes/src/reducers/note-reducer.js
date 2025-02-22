
import noteService from '../services/notes'

const initialState = [
    {
        content: 'reducer defines how redux store works',
        important: true,
        id: 1
    },
    {
        content: 'state of store can contain any data',
        important: false,
        id: 2
    },
]
  
const generatedId = () => 
    Number((Math.random() * 1000000).toFixed(0))



export const createNote = (content) => {
    return {
        type: 'NEW_NOTE',
        payload: {
            content,
            important: false,
            id: generatedId()
        }
    }
}




export const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        payload: { id }
    }
}

const noteReducer = (state = initialState, action) => {
    console.log('ACTION:', action);
    
    switch(action.type) {
        case 'NEW_NOTE':
            return [...state,action.payload]
        case 'TOGGLE_IMPORTANCE': {
                const id = action.payload.id;
                const noteToChange = state.find(note => note.id == id);
                const changedNote = {
                    ...noteToChange,
                    important: !noteToChange.important
                };
                noteService.update(id, changedNote)
                
                return state.map(note => note.id !== id ? note : changedNote)
            }
        default: 
                return state
    }
}






export default noteReducer

