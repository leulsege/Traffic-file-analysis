import mongoose, { Schema, Document } from 'mongoose'

interface Vehicle extends Document {
  vehicleType: String
  PlateNumber: Number
  MoterNumber: Number
  chanciNumber: Number
  sideNumber: Number
  pmServiceTime: Number
  bmServiceTime: Number
  others: String
}

const vehicleSchema: Schema = new mongoose.Schema({
  vehicleType: {
    type: String,
    required: true,
  },
  PlateNumber: {
    type: Number,
    required: true,
  },
  MoterNumber: {
    type: Number,
    required: true,
  },
  chanciNumber: {
    type: Number,
    required: true,
  },
  sideNumber: {
    type: Number,
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
  startingPoint: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  stayingPlace: {
    type: String,
    required: true,
  },
})

const VehicleModal = mongoose.model<Vehicle>('Vehicle', vehicleSchema)

export default VehicleModal
