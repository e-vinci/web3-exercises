import axios from "axios"



const baseUrl = "//localhost:3001/persons"

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = (personPayload) => axios.post(baseUrl, personPayload).then(response => response.data)

const remove = (person) => axios.delete(`${baseUrl}/${person.id}`)

const update = (person, payload) => axios.put(`${baseUrl}/${person.id}`, payload).then(response => response.data)

const PersonsAPI = {
  getAll,
  create,
  remove,
  update
}

export default PersonsAPI