import mongoose, { Schema, Document, Query } from 'mongoose'

interface FaultRecord extends Document {
  givenPoint: Number
  reducedPoint: Number
  remainingPoint: Number
}

const faultRecordSchema: Schema = new mongoose.Schema(
  {
    givenPoint: {
      type: Number,
      default: 10,
    },
    reducedPoint: {
      type: Number,
      default: 0,
    },
    driver: {
      type: Schema.Types.ObjectId,
      ref: 'Driver',
      required: [true, 'a fault belongs to a driver'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

faultRecordSchema.virtual('remainingPoint').get(function () {
  return this.givenPoint - this.reducedPoint
})

faultRecordSchema.pre(
  /^find/,
  function (this: Query<FaultRecord[], FaultRecord, unknown>, next) {
    this.populate('driver')
    next()
  },
)

const FaultRecordModel = mongoose.model<FaultRecord>(
  'FaultRecord',
  faultRecordSchema,
)

export default FaultRecordModel
