const NotFoundError = require('./NotFoundError')

// Error handler
exports.errorHandler = (error, req, res, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  }
  if (error instanceof NotFoundError) {
    return res.status(404).end()
  }
  next(error)
}

exports.disableCors = (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.set("Access-Control-Allow-Methods", "*");
  next();
}

