import asyncError from '../utils/asyncError'
import VehicleModel from '../models/vehicleModel'
import GenericController from './genericController'

const VehicleController = new GenericController(VehicleModel)

export const createVehicle = asyncError(
  VehicleController.create.bind(VehicleController),
)
export const getAllVehicles = asyncError(
  VehicleController.getAll.bind(VehicleController),
)
export const getVehicle = asyncError(
  VehicleController.getOne.bind(VehicleController),
)
export const updateVehicle = asyncError(
  VehicleController.updateOne.bind(VehicleController),
)
export const deleteVehicle = asyncError(
  VehicleController.deleteOne.bind(VehicleController),
)
