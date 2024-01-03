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

// const faultRecordSchema = new mongoose.Schema<FaultRecord>(
//   {

//   },
//   {
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//   },
// )

// faultRecordSchema.virtual('remainingPoint').get(function (
//   this: FaultRecord & Document,
// ) {
//   return this.givenPoint - this.reducedPoint
// })

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
    faultRecord: {
      givenPoint: {
        type: Number,
        default: 20,
      },
      reducedPoint: {
        type: Number,
        default: 0,
      },
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

const DriverModel = mongoose.model<Driver>('Driver', driverSchema)

export default DriverModel
