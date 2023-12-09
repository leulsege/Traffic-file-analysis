import express from 'express'
import {
  getAllDrivers,
  createDriver,
  getDriver,
  updateDriver,
  deleteDriver,
} from '../controllers/userController'
import { Request, Response, NextFunction } from 'express'

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>

const catchAsync = (fn: AsyncFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((error: Error) => {
      console.error('Error:', error)
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      })
    })
  }
}

const driverRouter = express.Router()

driverRouter.route('/').get(catchAsync(getAllDrivers)).post(createDriver)
driverRouter
  .route('/:id')
  .get(getDriver)
  .patch(updateDriver)
  .delete(deleteDriver)

export default driverRouter
