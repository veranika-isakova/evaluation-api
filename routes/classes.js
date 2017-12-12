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
      .then((class) => {
        if (!class) { return next() }
        res.json(class)
      })
      .catch((error) => next(error))
  })
  .post('/classes', (req, res, next) => {
    let newClass = req.body

    Class.create(newCLass)
      .then((class) => res.json(class))
      .catch((error) => next(error))
  })

module.exports = router
