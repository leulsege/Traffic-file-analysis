import express from 'express'
import {
  getAllDrivers,
  createDriver,
  getDriver,
  updateDriver,
  deleteDriver,
} from '../controllers/userController'

const driverRouter = express.Router()

driverRouter.route('/').get(getAllDrivers).post(createDriver)
driverRouter
  .route('/:id')
  .get(getDriver)
  .patch(updateDriver)
  .delete(deleteDriver)

export default driverRouter
