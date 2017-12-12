const mongoose = require('../config/database')
const { Schema } = mongoose

const elaluationSchema = new Schema({
  color: { type: String, required: true },
  evaluationDate: { type: Date, default: Date.now },
  remark: { type: String, required: false }
})

const studentSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, default: 'http://bit.ly/2C7NU0e' },
  evaluations: [elaluationSchema]
})

const classSchema = new Schema({
  batch: { type: Number, required: true },
  students: [studentSchema],
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, default: Date.now }
})

module.exports = mongoose.model('classes', classSchema)
