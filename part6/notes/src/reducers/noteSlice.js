import { createSlice, current } from '@reduxjs/toolkit'
import noteService from '../services/notes'

const initialState = [
    
]
  
const generatedId = () => 
    Number((Math.random() * 1000000).toFixed(0))

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        createNote(state, action) {            
            state.push(action.payload)
        },
        toggleImportanceOf(state, action) {            
            const changedNote = action.payload
            return state.map(note => note.id !== changedNote.id ? note : changedNote)
        },
        appendNote(state,action) {
            state.push(action.payload)
        },
        setNotes(state,action) {
            return action.payload
        }
    }
})

export const { createNote, toggleImportanceOf , appendNote, setNotes} = noteSlice.actions


export const initializeNotes = () => {
    return async dispatch => {
      const notes = await noteService.getAll()
      dispatch(setNotes(notes))
    }
  }
  
export default noteSlice.reducer
