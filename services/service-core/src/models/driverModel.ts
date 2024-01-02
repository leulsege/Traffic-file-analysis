import mongoose, { Document, Schema, Types, Query } from 'mongoose'
import VehicleModel from './vehicleModel'

interface FaultRecord {
  givenPoint: number
  reducedPoint: number
  remainingPoint: number
}

interface Driver extends Document {
  name: string
  email?: string
  licenseLevel: string
  licenseNumber: string
  licenseExpiredDate: Date
  gender: string
  commencementDate: Date
  age: number
  idNumber: string
  startingPoint: string
  destination: string
  stayingPlace: string
  faultRecord?: FaultRecord
  vehicle?: Types.ObjectId | null
}

const faultRecordSchema = new mongoose.Schema<FaultRecord>(
  {
    givenPoint: {
      type: Number,
      required: true,
    },
    reducedPoint: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

faultRecordSchema.virtual('remainingPoint').get(function (
  this: FaultRecord & Document,
) {
  return this.givenPoint - this.reducedPoint
})

const driverSchema = new Schema<Driver>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  licenseLevel: {
    type: String,
    required: true,
  },
  licenseNumber: {
    type: String,
    required: true,
    unique: true,
  },
  licenseExpiredDate: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  commencementDate: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
    unique: true,
  },
  startingPoint: String,
  destination: String,
  stayingPlace: String,
  faultRecord: {
    type: faultRecordSchema,
    default: null,
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: 'Vehicle',
    default: null,
  },
})

driverSchema.pre(
  /^find/,
  function (this: Query<Driver[], Driver, unknown>, next) {
    this.populate('vehicle')
    next()
  },
)

const DriverModel = mongoose.model<Driver>('Driver', driverSchema)

export default DriverModel
