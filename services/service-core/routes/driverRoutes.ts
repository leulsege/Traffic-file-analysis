import express from 'express'
import {
  getAllDrivers,
  createDriver,
  getDriver,
  updateDriver,
  deleteDriver,
  uploadUserPhoto,
  resizeUserPhoto,
} from '../controllers/driverController'
import { protect, restrictTo } from '../middleware/authMiddleware'

const driverRouter = express.Router()

driverRouter
  .route('/uploadphoto/:id')
  .patch(protect, uploadUserPhoto, resizeUserPhoto, updateDriver)

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
