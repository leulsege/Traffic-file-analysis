import DriverModel from '../models/userModel'
import GenericController from './genericController'

const DriverController = new GenericController(DriverModel)

export const createDriver = DriverController.create.bind(DriverController)
export const getAllDrivers = DriverController.getAll.bind(DriverController)
export const getDriver = DriverController.getOne.bind(DriverController)
export const updateDriver = DriverController.updateOne.bind(DriverController)
export const deleteDriver = DriverController.deleteOne.bind(DriverController)
