import asyncError from '../utils/asyncError'
import VehicleModel from '../models/vehicleModel'

import { Request, Response, NextFunction } from 'express'

export const createVehicle = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const newVehicle = await VehicleModel.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        vehicle: newVehicle,
      },
    })
  },
)

export const getAllVehicles = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const vehicles = await VehicleModel.find()

    res.status(200).json({
      status: 'success',
      results: vehicles.length,
      data: {
        vehicles,
      },
    })
  },
)

export const getVehicle = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const vehicle = await VehicleModel.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        vehicle,
      },
    })
  },
)

export const updateVehicle = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const updateVehicle = await VehicleModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    )

    res.status(200).json({
      status: 'success',
      data: {
        vehicle: updateVehicle,
      },
    })
  },
)
export const deleteVehicle = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const deleteVehicle = await VehicleModel.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: 'success',
      data: null,
    })
  },
)
