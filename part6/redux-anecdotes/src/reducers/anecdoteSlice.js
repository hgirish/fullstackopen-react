import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';



const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
       
        voteAnecdote(state, action) {
            
            const anecdote = action.payload
            return state.map((a) => a.id === anecdote.id ? anecdote : a)
        },
        setAnecdotes(state,action) {
          console.log(action.payload);
          
          return action.payload
        },
        appendAnecdote(state, action) {
            state.push(action.payload)
        }
    },
    
})

export const {  voteAnecdote , setAnecdotes, appendAnecdote} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch(setAnecdotes(anecdotes ))
    }
}

export const createAnecdote = (content) => {
    return async dispatch => {
        const anecdote = await anecdoteService.createNew(content)
        dispatch(appendAnecdote(anecdote))
    }
}

export default anecdoteSlice.reducer

