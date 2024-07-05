import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const testPerson = {name: 'Test Person', number: 12345}
    return axios.get(baseUrl).then(response => response.data.concat(testPerson))
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {getAll, deletePerson}