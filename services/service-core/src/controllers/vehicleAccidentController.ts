import { Request, Response, NextFunction } from 'express'
import VehicleAccidentModel from '../models/vehicleAccidentModel'
import asyncError from '../utils/asyncError'

export const createVehicleAccident = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const newVehicleAccident = await VehicleAccidentModel.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        vehicleAccident: newVehicleAccident,
      },
    })
  },
)

export const getAllVehicleAccidents = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const vehicleAccidents = await VehicleAccidentModel.find()

    res.status(200).json({
      status: 'success',
      results: vehicleAccidents.length,
      data: {
        vehicleAccidents,
      },
    })
  },
)

export const getVehicleAccident = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const vehicleAccident = await VehicleAccidentModel.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        vehicleAccident,
      },
    })
  },
)

export const updateVehicleAccident = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const updateVehicleAccident = await VehicleAccidentModel.findByIdAndUpdate(
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
        vehicleAccident: updateVehicleAccident,
      },
    })
  },
)
export const deleteVehicleAccident = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const deleteVehicleAccident = await VehicleAccidentModel.findByIdAndDelete(
      req.params.id,
    )

    res.status(204).json({
      status: 'success',
      data: null,
    })
  },
)
