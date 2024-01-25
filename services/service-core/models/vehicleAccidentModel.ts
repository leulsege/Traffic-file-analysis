import { Document, Schema, model, Query } from 'mongoose'

// Define the interface for the data
interface VehicleAccident extends Document {
  accident_date: Date
  accident_place: string
  damages: string
  cause: string
  guilty: string
  damageEstimation: number
  insuranceSentDate: Date
  excessLetterDate: Date
  maintenanceProcess: string
  preformDate: Date
  paymentDateLetterNumber: string
  paymentRequestLetterDate: Date
  // reducedPoint: number
  givenDecision: string
  vehicle: Schema.Types.ObjectId
  driver: Schema.Types.ObjectId
}

// Define the mongoose schema
const accidentSchema: Schema = new Schema({
  accidentDate: { type: Date },
  accidentPlace: { type: String },
  damages: { type: String },
  cause: { type: String },
  guilty: { type: String },
  damageEstimation: { type: Number },
  insuranceSentDate: { type: Date },
  excessLetterDate: { type: String },
  maintenanceProcess: { type: String },
  preformDate: { type: Date },
  paymentDateLetterNumber: { type: String },
  paymentRequestLetterDate: { type: Date },
  reducedPoint: {
    type: Number,
    required: true,
  },
  givenDecision: String,
  photo: {
    type: String,
    default: null,
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: 'Vehicle',
    required: [true, 'accident belongs to a vehicle'],
  },
  driver: {
    type: Schema.Types.ObjectId,
    ref: 'Driver',
    required: [true, 'accident belongs to a driver'],
  },
})

accidentSchema.pre(
  /^find/,
  function (this: Query<VehicleAccident[], VehicleAccident, unknown>, next) {
    this.populate('driver').populate({ path: 'vehicle', select: '-driver' })
    next()
  },
)

const VehicleAccidentModel = model<VehicleAccident>('Accident', accidentSchema)

export default VehicleAccidentModel
