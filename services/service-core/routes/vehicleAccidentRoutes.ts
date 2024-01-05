import express from 'express'
import {
  getAllVehicleAccidents,
  getVehicleAccident,
  updateVehicleAccident,
  deleteVehicleAccident,
  createVehicleAccident,
} from '../controllers/vehicleAccidentController'
import { protect, restrictTo } from '../middleware/authMiddleware'

const vehicleAccidentRouter = express.Router()

vehicleAccidentRouter
  .route('/')
  .all(protect, restrictTo('admin', 'owner'))
  .post(createVehicleAccident)
  .get(getAllVehicleAccidents)
vehicleAccidentRouter
  .route('/:id')
  .all(protect)
  .get(getVehicleAccident)
  .patch(restrictTo('admin', 'owner'), updateVehicleAccident)
  .delete(restrictTo('admin', 'owner'), deleteVehicleAccident)

export default vehicleAccidentRouter
