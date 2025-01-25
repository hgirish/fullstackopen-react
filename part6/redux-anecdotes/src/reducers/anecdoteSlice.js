import { createSlice } from '@reduxjs/toolkit';



const anecdoteSlice = createSlice({
    name: 'anecdotes',
    initialState: [],
    reducers: {
        createAnecdote(state, action) {
            state.push(action.payload)
        },
        voteAnecdote(state, action) {
            
            const anecdote = action.payload
            return state.map((a) => a.id === anecdote.id ? anecdote : a)
        },
        setAnecdotes(state,action) {
          console.log(action.payload);
          
          return action.payload
        }
    },
    
})

export const { createAnecdote, voteAnecdote , setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer

