import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createAnecdote } from "../requests"
import { useState } from "react"

const AnecdoteForm = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const queryClient = useQueryClient()

const newMutation = useMutation({
  mutationFn: createAnecdote,
  onSuccess: (response) => {
    console.log(response);
    
queryClient.invalidateQueries({queryKey: ['anecdotes']})
  },
  onError: (error) => {
    console.log(error)
    setErrorMessage(error.message)
  }
})

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newMutation.mutate({content, votes: 0})
}

  return (
    <div>
      <h3>create new</h3>
      {errorMessage}
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
