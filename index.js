const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { batches, users, sessions } = require('./routes')
const { Batch, User } = require('./models')
const port = process.env.PORT || 3030
const passport = require('./config/auth')

let app = express()

 // it's not nessassary
  .use(cors())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(passport.initialize())
  // Our recipes routes
  .use(batches, users, sessions) // for users!
  // catch 404 and forward to error handler, actuall error
  .use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })
  // final error handler
  .use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({ //send an object
      //only print full errors in development
      message: err.message,
      error: err
    })
  })
  .listen(port, () => {
    console.log(`Server is listening on port ${port}`)
  })
