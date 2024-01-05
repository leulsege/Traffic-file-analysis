import express from 'express'
import {
  createVehicle,
  getAllVehicles,
  getVehicle,
  updateVehicle,
  deleteVehicle,
} from '../controllers/vehicleController'
import { protect, restrictTo } from '../middleware/authMiddleware'

const vehicleRouter = express.Router()

vehicleRouter
  .route('/')
  .all(protect, restrictTo('admin', 'owner'))
  .post(createVehicle)
  .get(getAllVehicles)
vehicleRouter
  .route('/:id')
  .all(protect)
  .get(getVehicle)
  .patch(restrictTo('admin', 'owner'), updateVehicle)
  .delete(restrictTo('admin', 'owner'), deleteVehicle)

export default vehicleRouter
