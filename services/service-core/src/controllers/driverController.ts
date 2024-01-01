import asyncError from '../utils/asyncError'
import DriverModel from '../models/driverModel'
import GenericController from './genericController'
import VehicleModel from '../models/vehicleModel'
import { Request, Response, NextFunction } from 'express'
import AppError from '../utils/appError'

const DriverController = new GenericController(DriverModel)

export const createDriver = asyncError(
  DriverController.create.bind(DriverController),
)
export const getAllDrivers = asyncError(
  DriverController.getAll.bind(DriverController),
)
export const getDriver = asyncError(
  DriverController.getOne.bind(DriverController),
)
export const updateDriverAndVehicle = asyncError(async function updateOne(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  console.log('------------------------------------------------------------')
  console.log(req.body)
  const driver = await DriverModel.findById(req.body.driver_id)
  if (!driver) {
    throw new AppError('driver not found', 404)
  }

  const vehicle = await VehicleModel.findById(req.body.vehicle_id)
  if (!vehicle) {
    throw new AppError('vehicle not found', 404)
  }

  driver.vehicle = vehicle._id
  driver.save()

  vehicle.driver = driver._id
  vehicle.save()

  res.status(200).json({
    success: true,
    message: 'Driver is updated for the vehicle.yy',
  })
})

export const updateDriver = asyncError(
  DriverController.updateOne.bind(DriverController),
)

export const deleteDriver = asyncError(
  DriverController.deleteOne.bind(DriverController),
)
