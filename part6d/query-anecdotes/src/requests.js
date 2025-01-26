import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes';

export const getAnecdotes = () => 
    axios.get(baseUrl)
    .then(response => response.data);

export const createAnecdote = (anecdote) => 
    {
        if (anecdote.content === '') {
            return new Promise((resolve, reject) => {
                reject(new Error('Anecdote content cannot be empty'));
            });
        }
        if (anecdote.content.length < 5) {
            return new Promise((resolve, reject) => {
                reject(new Error('Anecdote must be at least 5 characters long'));
            });
        }
        return axios.post(baseUrl, anecdote)
            .then(response => response.data);
    };

export const updateAnecdote = (anecdote) => 
    axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
    .then(response => response.data);
    