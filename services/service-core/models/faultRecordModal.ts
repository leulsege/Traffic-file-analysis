import mongoose, { Schema, Document } from 'mongoose'

interface FaultRecord extends Document {
  givenPoint: Number
  reducedPoint: Number
  remainingPoint: Number
}

const faultRecordSchema: Schema = new mongoose.Schema({
  givenPoint: {
    type: Number,
    required: true,
  },
  reducedPoint: {
    type: Number,
  },
  remainingPoint: {
    type: Number,
  },
})

const FaultRecordModal = mongoose.model<FaultRecord>(
  'FaultRecord',
  faultRecordSchema,
)

export default FaultRecordModal
