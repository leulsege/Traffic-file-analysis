import VehicleModel from '../models/vehicleModel'
import GenericController from './genericController'

const VehicleController = new GenericController(VehicleModel)

export const createVehicle = VehicleController.create.bind(VehicleController)
export const getAllVehicles = VehicleController.getAll.bind(VehicleController)
export const getVehicle = VehicleController.getOne.bind(VehicleController)
export const updateVehicle = VehicleController.updateOne.bind(VehicleController)
export const deleteVehicle = VehicleController.deleteOne.bind(VehicleController)
