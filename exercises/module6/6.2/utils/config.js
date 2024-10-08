require('dotenv-flow').config()

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT

if ((MONGODB_URI||'') === '') {
  throw new Error('Missing or empty "MONGODB_URI" environement variable!');
}

if ((PORT||0) === 0) {
  throw new Error('Missing or empty "PORT" environement variable!');
}


module.exports = {
  MONGODB_URI,
  PORT
}