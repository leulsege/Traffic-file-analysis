import express from 'express'
import {
  createVehicle,
  getAllVehicles,
  getVehicle,
  updateVehicle,
  deleteVehicle,
} from '../controllers/vehicleController'

const vehicleRouter = express.Router()

vehicleRouter.route('/').post(createVehicle).get(getAllVehicles)
vehicleRouter
  .route('/:id')
  .get(getVehicle)
  .patch(updateVehicle)
  .delete(deleteVehicle)

export default vehicleRouter
