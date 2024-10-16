const mongoose = require('mongoose')
const args = process.argv.slice(2);

// Check if required args are present
if (args.length < 3) {
  console.log('Missing required arguments!\n\nUsage: npm start <server> <username> <password> [<name> <number>]\n')
  process.exit(1)
}

const server = args.shift()
const username = args.shift()
const password = args.shift()

// DO NOT SAVE YOUR PASSWORD INTO YOUR CODE!!
const url = `mongodb+srv://${username}:${password}@${server}/web3?retryWrites=true&w=majority`

// Connect to database
mongoose.connect(url)

// Define Schema and Model.
const personSchema = new mongoose.Schema({
  name: String,
  number: String
})
const Person = mongoose.model('Person', personSchema)

// Find all
if (args.length < 2) {
  Person.find({}).then(persons => {
    console.log(`phonebook (${persons.length} entries):`)
    persons.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}

// Insert one
else {
  const person = new Person({
    name: args[0],
    number: args[1]
  })
  person.save().then(newPerson => {
    console.log(`added "${newPerson.name}" with number [${newPerson.number}] to phonebook`)
    mongoose.connection.close()
  })
}
