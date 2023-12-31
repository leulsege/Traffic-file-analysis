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
    default: 0,
  },
  remainingPoint: {
    type: Number,
    default: function (this: FaultRecord) {
      return this.givenPoint || 0
    },
  },
})

const FaultRecordModel = mongoose.model<FaultRecord>(
  'FaultRecord',
  faultRecordSchema,
)

export default FaultRecordModel
