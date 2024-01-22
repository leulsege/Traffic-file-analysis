import mongoose, { Document, Schema, Types, Query } from 'mongoose'
import VehicleModel from './vehicleModel'

interface FaultRecord {
  givenPoint: number
  reducedPoint: number
}

interface Driver extends Document {
  fullName: string
  licenseLevel: string
  licenseNumber: string
  licenseExpiredDate: Date
  gender: string
  phoneNumber: string
  commencementDate: Date
  age: number
  idNumber: string
  birthDate: Date
  photo?: string | null
  vehicle?: Schema.Types.ObjectId | null
}

const driverSchema = new Schema<Driver>(
  {
    fullName: {
      type: String,
      required: true,
    },
    licenseLevel: {
      type: String,
    },
    licenseNumber: {
      type: String,
      unique: true,
    },
    licenseExpiredDate: {
      type: Date,
    },
    gender: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    commencementDate: {
      type: Date,
    },
    birthDate: {
      type: Date,
    },
    idNumber: {
      type: String,
      unique: true,
    },
    photo: {
      type: String,
      default: null,
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'Vehicle',
      default: null,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

driverSchema.virtual('faultRecord', {
  ref: 'FaultRecord',
  foreignField: 'driver',
  localField: '_id',
})

driverSchema.virtual('accidentRecord', {
  ref: 'Accident',
  foreignField: 'driver',
  localField: '_id',
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
