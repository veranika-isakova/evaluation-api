const router = require('express').Router()
const { Batch, User } = require('../models')
const passport = require("../config/auth");

const authenticate = passport.authorize("jwt", { session: false });

//router.get('/batches', authenticate, (req, res, next) => {
router.get('/batches', (req, res, next) => {
  Batch.find()
    // Newest batches first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((batches) => res.json(batches))
    // Throw a 500 error if something goes wrong
    .catch((error) => next(error))
  })

  .get('/batches/:id', (req, res, next) => {
      const id = req.params.id
      Batch.findById(id)
        .then((result) => {
          if (!result) { return next() }
          res.json(result)
        })
        .catch((error) => next(error))
    })

  .post('/batches', (req, res, next) => {
    let newbatch = req.body

    Batch.create(newbatch)
      .then((result) => res.json(result))
      .catch((error) => next(error))
  })

module.exports = router
