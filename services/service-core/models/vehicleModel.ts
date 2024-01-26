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
}

const vehicleSchema: Schema = new mongoose.Schema({
  vehicleType: {
    type: String,
  },
  plateNumber: {
    type: String,
    required: true,
    unique:true
  },
  moterNumber: {
    type: String,
  },
  chanciNumber: {
    type: String,
  },
  sideNumber: {
    type: String,
  },
  pmServiceTime: {
    type: Number,
  },
  bmServiceTime: {
    type: Number,
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
