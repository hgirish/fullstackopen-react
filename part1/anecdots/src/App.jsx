import { useState } from 'react'


function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
 const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
 const [mostVotes, setMostVotes] = useState(0)

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    console.log(randomNumber)
    setSelected(randomNumber)
     const mostVotesIndex = votes.indexOf(Math.max(...votes))
     setMostVotes(mostVotesIndex)
  }
 const handleVote = () => {
  const copyOfVotes = [...votes]
  console.log(copyOfVotes)
  copyOfVotes[selected] = copyOfVotes[selected] + 1
  setVotes(copyOfVotes)
 }
  return (
   <div>
    <h1>Anectdote of the day</h1>
    {anecdotes[selected]}
    <p>has {votes[selected]} votes</p>
    <hr />
    <button onClick={handleVote}>Vote</button>
    <button onClick={handleClick} >next anecdote</button>
    <hr />
<h1>Anecdots with most votes</h1>
{anecdotes[mostVotes]}
   </div>
  )
}

export default App
