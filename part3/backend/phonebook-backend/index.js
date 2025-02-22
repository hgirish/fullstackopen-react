require('dotenv').config()

const express = require('express')

const app = express()
app.use(express.static('dist'))
app.use(express.json())



const cors = require('cors')
app.use(cors())

const mongoose = require('mongoose')

const password = process.argv[2]


const url = process.env.MONGODB_URL;

mongoose.set('strictQuery', false)

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)


let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]


app.get('/api/notes', (request, response)=>{
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id =  Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }    
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

const generateId = () => {
    const maxId = notes.length > 0
   ? Math.max(...notes.map(n=> Number(n.id)))
   : 0
   return (maxId+1)
}
app.post('/api/notes', (request, response) => {
  const body = request.body
  if (!body.content) {
    return response.status(400).json({
        error: 'content missing'
    })
  }
  const note = {
    content: body.content,
    important : Boolean(body.important) || false,
    id: generateId(),
  }
  notes = notes.concat(note)
   
   response.json(note)
})

app.put('/api/notes/:id', (request, response) => {
	const body = request.body
	const note = notes.find(note => note.id === body.id)
	if (!note) {
		return response.status(400).json({error: 'missing content'})
	}
	notes = notes.filter(note => note.id !== body.id).concat(body)
	return response.json(body)
	
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
}
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})
