import mongoose, { Schema, Document, Query, Types } from 'mongoose'
import DriverModel from './driverModel'

interface Vehicle extends Document {
  vehicleType: String
  plateNumber: Number
  moterNumber: Number
  chanciNumber: Number
  sideNumber: Number
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
    type: Number,
    required: true,
  },
  moterNumber: {
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
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'Driver',
    default: null,
  },
  history: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      driver: {
        type: Schema.Types.ObjectId,
        ref: 'Driver',
        default: null,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: null,
      },
    },
  ],
})

vehicleSchema.pre(
  /^find/,
  function (this: Query<Vehicle[], Vehicle, unknown>, next) {
    this.populate('driver').populate('history.driver').populate('history.user')
    next()
  },
)

const VehicleModel = mongoose.model<Vehicle>('Vehicle', vehicleSchema)

export default VehicleModel
