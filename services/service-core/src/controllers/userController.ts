import asyncError from '../utils/asyncError'
import DriverModel from '../models/userModel'
import GenericController from './genericController'

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
export const updateDriver = asyncError(
  DriverController.updateOne.bind(DriverController),
)
export const deleteDriver = asyncError(
  DriverController.deleteOne.bind(DriverController),
)
