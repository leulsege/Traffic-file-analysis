import mongoose, { Schema, Document, Query, Types } from 'mongoose'
import DriverModel from './driverModel'

interface Vehicle extends Document {
  vehicleType: string
  plateNumber: string
  moterNumber: string
  chanciNumber: string
  sideNumber: string
  pmServiceTime: Number
  bmServiceTime: Number
  others: String
  driver?: Schema.Types.ObjectId | null
  history: Array<{
    date: any
    driver: Schema.Types.ObjectId | null
    user: Schema.Types.ObjectId | null
  }> | null
}

const vehicleSchema: Schema = new mongoose.Schema({
  vehicleType: {
    type: String,
    required: true,
  },
  plateNumber: {
    type: String,
    required: true,
  },
  moterNumber: {
    type: String,
    required: true,
  },
  chanciNumber: {
    type: String,
    required: true,
  },
  sideNumber: {
    type: String,
    required: true,
  },
  pmServiceTime: {
    type: Number,
    required: true,
  },
  bmServiceTime: {
    type: Number,
    required: true,
  },
  others: {
    type: String,
  },
})

vehicleSchema.virtual('driver', {
  ref: 'Driver',
  foreignField: 'vehicle',
  localField: '_id',
})

const VehicleModel = mongoose.model<Vehicle>('Vehicle', vehicleSchema)

export default VehicleModel
