import axios from "axios";

const baseUrl = '/api/persons'

const getAll = () => {
    const testPerson = {name: 'Test Person', number: 12345}
    return axios.get(baseUrl).then(response => response.data.concat(testPerson))
}

const deletePerson = (id) => {
    const request =  axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const addPerson = (person) => {
    const request =  axios.post(baseUrl, person)
    return request.then(response => response.data)
}

const updatePerson = (person) => {
    const request  = axios.put(`${baseUrl}/${person.id}`, person)
    return request.then(response => response.data)
}

export default {getAll, deletePerson, updatePerson, addPerson}