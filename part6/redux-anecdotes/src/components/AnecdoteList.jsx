import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteSlice"
import { removeNotification, setNotification } from "../reducers/notificationSlice"
import anecdoteService from "../services/anecdotes"
const AnecdoteList = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(({anecdotes, filter}) => {
      console.log('anecdotes', anecdotes)
      let anecdotesFromState = anecdotes
      if (filter) {
        anecdotesFromState = 
        anecdotesFromState
        .filter(a => 
          a.content.toLowerCase().includes(
            filter.toLowerCase()))
      }
     
        
        return [...anecdotesFromState]
          .sort((a, b) => b.votes - a.votes)
     
    
    })
    
    const vote = async(anecdote) => {
       
        const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }  
        const returnedObeject = 
        await anecdoteService.update(updatedAnecdote.id, updatedAnecdote)

        dispatch(voteAnecdote(returnedObeject))
        dispatch(setNotification(`you voted '${anecdotes.find(a => a.id === returnedObeject.id).content}'`))
        setTimeout(() => {
          dispatch(removeNotification())
        }, 5000)
      }
    
    return (
        <>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )}
        </>
    )
}

export default AnecdoteList