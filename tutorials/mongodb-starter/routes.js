
// Data. This emulates a datastore
const allPersons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada lovelace",
    number: "39-44-5232323",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-2345345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-64234122",
  },
]

module.exports = function (app) {

  app.get("/persons", (request, response) => {
    response.json(allPersons)
  })

  app.get("/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    const person = allPersons.find(person => person.id === id)

    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

  app.delete("/persons/:id", (request, response) => {
    const id = Number(request.params.id)
    const personIndex = allPersons.findIndex(person => person.id === id)
    if (personIndex > -1) {
      allPersons.splice(personIndex, 1) // We do NOT use delete because it creates a sparse array with a wrong length
    }
    response.status(204).end()
  })

  app.post("/persons", (request, response) => {
    const personPayload = request.body
    const newId = Math.floor(Math.random() * 1e9)
    const newPerson = {
      ...personPayload,
      id: newId,
    }

    const errorMessages = []
    if (!personPayload.name) {
      errorMessages.push("name must be present")
    }
    if (!personPayload.number) {
      errorMessages.push("number must be present")
    }

    const nameExists = allPersons.some(person => person.name === newPerson.name)
    if (nameExists) {
      errorMessages.push("name must be unique")
    }

    if (errorMessages.length > 0) {
      response.status(422).json({ errorMessages })
    }
    else {
      // push not concat here. We want to mutate the array.
      allPersons.push(newPerson)
      response.json(newPerson)
    }
  })

  app.put("/persons/:id", (request, response) => {
    const personPayload = request.body
    const id = Number(request.params.id)
    const personIndex = allPersons.findIndex(person => person.id === id)
    if (personIndex === -1) {
      response.status(404).end()
    }
    else {
      const updatedPerson = { ...personPayload, id:allPersons[personIndex].id }
      allPersons[personIndex] = updatedPerson
      response.json(updatedPerson)
    }
  })
}
