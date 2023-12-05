import { Request, Response, NextFunction } from 'express'
import VehicleModel from '../models/vehicleModel'

class VehicleController {
  // Create a vehicle
  async createVehicle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const newVehicle = await VehicleModel.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        vehicle: newVehicle,
      },
    })
  }

  // Get all vehicles
  async getAllVehicles(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const vehicles = await VehicleModel.find()

    res.status(200).json({
      status: 'success',
      results: vehicles.length,
      data: {
        vehicles,
      },
    })
  }

  // Get a specific vehicle by ID
  async getVehicle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const vehicle = await VehicleModel.findById(req.params.id)

    if (!vehicle) {
      res.status(404).json({
        status: 'fail',
        message: 'Vehicle not found',
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: {
        vehicle,
      },
    })
  }

  // Update a vehicle
  async updateVehicle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const updatedVehicle = await VehicleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    )

    if (!updatedVehicle) {
      res.status(404).json({
        status: 'fail',
        message: 'Vehicle not found',
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: {
        vehicle: updatedVehicle,
      },
    })
  }

  // Delete a vehicle
  async deleteVehicle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const deletedVehicle = await VehicleModel.findByIdAndDelete(req.params.id)

    if (!deletedVehicle) {
      res.status(404).json({
        status: 'fail',
        message: 'Vehicle not found',
      })
      return
    }

    res.status(204).json({
      status: 'success',
      data: null,
    })
  }
}

export default VehicleController
