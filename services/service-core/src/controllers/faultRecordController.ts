import asyncError from '../utils/asyncError'
import FaultRecordModel from '../models/faultRecordModel'
import { Request, Response, NextFunction } from 'express'

export const createFaultRecord = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const newFaultRecord = await FaultRecordModel.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        faultRecord: newFaultRecord,
      },
    })
  },
)

export const getAllFaultRecords = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const faultRecords = await FaultRecordModel.find()

    res.status(200).json({
      status: 'success',
      results: faultRecords.length,
      data: {
        faultRecords,
      },
    })
  },
)

export const getFaultRecord = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const faultRecord = await FaultRecordModel.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        faultRecord,
      },
    })
  },
)

export const updateFaultRecord = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const updateFaultRecord = await FaultRecordModel.findByIdAndUpdate(
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
        faultRecord: updateFaultRecord,
      },
    })
  },
)
export const deleteFaultRecord = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const deleteFaultRecord = await FaultRecordModel.findByIdAndDelete(
      req.params.id,
    )

    res.status(204).json({
      status: 'success',
      data: null,
    })
  },
)
