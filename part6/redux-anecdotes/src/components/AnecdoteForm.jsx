
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteSlice';
import anecdoteService from '../services/anecdotes';

const AnecdoteForm = () => { 
    const dispatch  = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createAnecdote(newAnecdote))
      }

    return (
        <div>
             <h2>create new</h2>
        <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type='submit'>create</button>
      </form>
      </div>
    )
}


export default AnecdoteForm // This is the default export of the AnecdoteForm component. It is exported so that it can be imported and used in other components.