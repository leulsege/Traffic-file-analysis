import express from 'express'
import {
  getAllDrivers,
  createDriver,
  getDriver,
  updateDriver,
  deleteDriver,
} from '../controllers/userController'
import { protect, restrictTo } from '../middleware/authMiddleware'

const driverRouter = express.Router()

driverRouter
  .route('/')
  .all(protect, restrictTo('admin', 'owner'))
  .get(getAllDrivers)
  .post(createDriver)
driverRouter
  .route('/:id')
  .all(protect)
  .get(getDriver)
  .patch(restrictTo('admin', 'owner'), updateDriver)
  .delete(restrictTo('admin', 'owner'), deleteDriver)

export default driverRouter
