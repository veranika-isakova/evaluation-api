const router = require('express').Router()
const { Class } = require('../models')

router.get('/classes', (req, res, next) => {
  Class.find()
    // Newest classes first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((classes) => res.json(classes))
    // Throw a 500 error if something goes wrong
    .catch((error) => next(error))
  })

  .get('/classes/:id', (req, res, next) => {
      const id = req.params.id
      Class.findById(id)
        .then((result) => {
          if (!result) { return next() }
          res.json(result)
        })
        .catch((error) => next(error))
    })

  .post('/classes', (req, res, next) => {
    let newClass = req.body

    Class.create(newCLass)
      .then((result) => res.json(result))
      .catch((error) => next(error))
  })

module.exports = router
