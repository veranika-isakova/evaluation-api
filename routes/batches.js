const router = require('express').Router()
const { batch } = require('../models')

router.get('/batches', (req, res, next) => {
  batch.find()
    // Newest batches first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((batches) => res.json(batches))
    // Throw a 500 error if something goes wrong
    .catch((error) => next(error))
  })

  .get('/batches/:id', (req, res, next) => {
      const id = req.params.id
      batch.findById(id)
        .then((result) => {
          if (!result) { return next() }
          res.json(result)
        })
        .catch((error) => next(error))
    })

  .post('/batches', (req, res, next) => {
    let newbatch = req.body

    batch.create(newbatch)
      .then((result) => res.json(result))
      .catch((error) => next(error))
  })

module.exports = router
