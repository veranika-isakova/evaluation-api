const router = require('express').Router()
const { Batch, User, Student } = require('../models')
//const passport = require("../config/auth");

//const authenticate = passport.authorize("jwt", { session: false });

//router.get('/students', authenticate, (req, res, next) => {
router.get('/students', (req, res, next) => {
  result = []
  Batch.find()
    // Newest batches first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((batches) => {
    batches.map(batch => {result = result.concat(batch.students)})
    res.json(result)
  })
// Throw a 500 error if something goes wrong
.catch((error) => next(error))
})

.get('/students/:id', (req, res, next) => {
  const id = req.params.id
  Batch.find()
  // Newest batches first
  .sort({ createdAt: -1 })
  // Send the data in JSON format
  .then((batches) => {
    batches.map(batch => {result = result.concat(batch.students)})
    res.json(result.find(student => student._id === id))
  })
.catch((error) => next(error))
})

.post('/students', (req, res, next) => {
let newstudent = req.body

Student.create(newstudent)
.then((result) => res.json(result))
.catch((error) => next(error))
})

module.exports = router
