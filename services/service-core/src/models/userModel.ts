import mongoose, { Schema, Document } from 'mongoose'

interface Driver extends Document {
  driverName: string
  licenseLevel: string
  licenseNumber: string
  licenseExpiredDate: Date
  gender: string
  commencementDate: Date
  age: number
  idNumber: string
  startingPoint: String
  destination: String
  stayingPlace: String
}

const driverSchema: Schema = new mongoose.Schema({
  driverName: {
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

const DriverModel = mongoose.model<Driver>('Driver', driverSchema)

export default DriverModel
