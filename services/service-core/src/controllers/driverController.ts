import asyncError from '../utils/asyncError'
import DriverModel from '../models/driverModel'
import { Request, Response, NextFunction } from 'express'

export const createDriver = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const newDriver = await DriverModel.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        driver: newDriver,
      },
    })
  },
)

export const getAllDrivers = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const drivers = await DriverModel.find()

    res.status(200).json({
      status: 'success',
      results: drivers.length,
      data: {
        drivers,
      },
    })
  },
)

export const getDriver = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const driver = await DriverModel.findById(req.params.id)
      .populate({
        path: 'vehicle',
        select: '-driver -__v',
      })
      .populate({
        path: 'faultRecord',
        select: '-driver -__v',
      })

    res.status(200).json({
      status: 'success',
      data: {
        driver,
      },
    })
  },
)

export const updateDriver = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const updateDriver = await DriverModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    )
      .populate({
        path: 'vehicle',
        select: '-driver -__v',
      })
      .populate({
        path: 'faultRecord',
        select: '-driver -__v',
      })

    res.status(200).json({
      status: 'success',
      data: {
        driver: updateDriver,
      },
    })
  },
)
export const deleteDriver = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const deleteDriver = await DriverModel.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: 'success',
      data: null,
    })
  },
)
