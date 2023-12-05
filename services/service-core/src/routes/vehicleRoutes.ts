import express from 'express'
import VehicleController from '../controllers/vehicleController'

const vehicleRouter = express.Router()
const {
  createVehicle,
  getAllVehicles,
  getVehicle,
  updateVehicle,
  deleteVehicle,
} = new VehicleController()

vehicleRouter.route('/').post(createVehicle).get(getAllVehicles)
vehicleRouter
  .route('/:id')
  .get(getVehicle)
  .patch(updateVehicle)
  .delete(deleteVehicle)

export default vehicleRouter
