import mongoose, { Document, Schema, Types, Query } from 'mongoose'
import VehicleModel from './vehicleModel'

interface FaultRecord {
  givenPoint: number
  reducedPoint: number
}

interface Driver extends Document {
  name: string
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
}

const driverSchema = new Schema<Driver>(
  {
    name: {
      type: String,
      required: true,
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
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

driverSchema.virtual('vehicle', {
  ref: 'Vehicle',
  foreignField: 'driver',
  localField: '_id',
})

driverSchema.virtual('faultRecord', {
  ref: 'FaultRecord',
  foreignField: 'driver',
  localField: '_id',
})
const DriverModel = mongoose.model<Driver>('Driver', driverSchema)

export default DriverModel
