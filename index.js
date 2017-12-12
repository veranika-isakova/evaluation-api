const express = require('express')
const { Class } = require('./models') // this works because of the index file!

const PORT = process.env.PORT || 3030

let app = express()

app.get('/classes', (req, res, next) => {
  Class.find()
    // Newest classes first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((classes) => res.json(classes))
    // Forward any errors to error handler
    .catch((error) => next(error))
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
