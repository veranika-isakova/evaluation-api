const mongoose = require('../config/database')
const { Schema } = mongoose

const elaluationSchema = new Schema({
  color: { type: String, required: true },
  evaluationDate: { type: Date, default: Date.now },
  remark: { type: String, required: false }
})

const studentSchema = new Schema({
  name: { type: String, required: true },
  photo: { type: String, default: 'http://bit.ly/2CccBZl' },
  evaluations: [elaluationSchema]
})

const batchSchema = new Schema({
  title: { type: String, required: true },
  students: [studentSchema],
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true }
})

module.exports = mongoose.model('batches', batchSchema)
