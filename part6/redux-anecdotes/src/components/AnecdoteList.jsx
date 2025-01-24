import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteSlice"

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
    
    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteAnecdote(id))
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
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )}
        </>
    )
}

export default AnecdoteList