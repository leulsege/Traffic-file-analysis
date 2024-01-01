import mongoose, { Schema, Document, Query, Types } from 'mongoose'
import DriverModel from './driverModel'

interface Vehicle extends Document {
  vehicleType: String
  PlateNumber: Number
  MoterNumber: Number
  chanciNumber: Number
  sideNumber: Number
  pmServiceTime: Number
  bmServiceTime: Number
  others: String
  driver?: Types.ObjectId | null
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
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'Driver',
    default: null,
  },
})

vehicleSchema.pre(
  /^find/,
  function (this: Query<Vehicle[], Vehicle, unknown>, next) {
    this.populate('driver')
    next()
  },
)

// vehicleSchema.pre('findOneAndUpdate', async function (this: any, next) {
//   const query = this.getQuery();
//   const update = this.getUpdate();

//   try {
//     // Use findOne directly on the model and populate the 'driver' field
//     const original = await this.model
//       .findOne(query)
//       .populate('driver')
//       .exec();

//     const newDriverId = update.$set?.driver?._id || update.driver?._id;

//     if (original && original.driver && original.driver._id !== newDriverId) {
//       // If the driver is modified and original is defined, unset the previous driver's vehicle
//       await DriverModel.updateOne(
//         { _id: original.driver._id },
//         { $set: { vehicle: null } }
//       );

//       // Set the new driver's vehicle
//       if (newDriverId) {
//         await DriverModel.updateOne(
//           { _id: newDriverId },
//           { $set: { vehicle: this._id } }
//         );

//         // Now, update the vehicle's driver attribute
//         await this.model.updateOne(
//           { _id: this._id },
//           { $set: { driver: newDriverId } }
//         );
//       }
//     }
//   } catch (error) {
//     console.error('Error in findOneAndUpdate middleware:', error);
//   }

//   next();
// });

const VehicleModel = mongoose.model<Vehicle>('Vehicle', vehicleSchema)

export default VehicleModel
