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
  maintenanceProcess: string
  preformDate: Date
  ክፍያ_የተጠየቀበት_ቀን_የደብዳቤ_ቁጥር: string
  paymentRequestLetterDate: Date
}

// Define the mongoose schema
const accidentSchema: Schema = new Schema({
  accident_date: { type: Date },
  accident_place: { type: String },
  damages: { type: String },
  cause: { type: String },
  guilty: { type: String },
  damageEstimation: { type: Number },
  insuranceSentDate: { type: Date },
  ኤክሰስ_የተቆረጠበት_ደብዳ_ቁጥር: { type: String },
  maintenanceProcess: { type: String },
  preformDate: { type: Date },
  ክፍያ_የተጠየቀበት_ቀን_የደብዳቤ_ቁጥር: { type: String },
  paymentRequestLetterDate: { type: Date },
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
