import { Document, Schema, model } from 'mongoose'

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
const AccidentSchema: Schema = new Schema({
  accident_date: { type: Date, required: true },
  accident_place: { type: String, required: true },
  damages: { type: String, required: true },
  cause: { type: String, required: true },
  guilty: { type: String, required: true },
  damageEstimation: { type: Number, required: true },
  insuranceSentDate: { type: Date, required: true },
  maintenanceProcess: { type: String, required: true },
  preformDate: { type: Date, required: true },
  ክፍያ_የተጠየቀበት_ቀን_የደብዳቤ_ቁጥር: { type: String, required: true },
  paymentRequestLetterDate: { type: Date, required: true },
})

const VehicleAccidentModel = model<VehicleAccident>('Accident', AccidentSchema)

export default VehicleAccidentModel
