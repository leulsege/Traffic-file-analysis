import mongoose, { Schema, Document } from 'mongoose'

interface Training extends Document {
  trainingType: String
  trainingStartDate: Date
  trainingEndDate: Date
  trainingPassPoint: Number
  trainingResult: Number
  checkUp: String
}

const trainingSchema: Schema = new mongoose.Schema({
  trainingType: {
    type: String,
    required: true,
  },
  trainingStartDate: {
    type: Date,
    required: true,
  },
  trainingEndDate: {
    type: Date,
  },
  trainingPassPoint: {
    type: Number,
    required: true,
  },
  trainingResult: {
    type: Number,
  },
  checkUp: {
    type: String,
  },
})

const TrainingModal = mongoose.model<Training>('Training', trainingSchema)

export default TrainingModal
