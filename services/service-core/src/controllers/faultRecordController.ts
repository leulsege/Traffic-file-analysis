import { Request, Response, NextFunction } from 'express'
import FaultRecordModel from '../models/faultRecordModel'

class FaultRecordController {
  // Create a fault record
  async createFaultRecord(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const newFaultRecord = await FaultRecordModel.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        faultRecord: newFaultRecord,
      },
    })
  }

  // Get all fault records
  async getAllFaultRecords(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const faultRecords = await FaultRecordModel.find()

    res.status(200).json({
      status: 'success',
      results: faultRecords.length,
      data: {
        faultRecords,
      },
    })
  }

  // Get a specific fault record by ID
  async getFaultRecord(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const faultRecord = await FaultRecordModel.findById(req.params.id)

    if (!faultRecord) {
      res.status(404).json({
        status: 'fail',
        message: 'Fault record not found',
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: {
        faultRecord,
      },
    })
  }

  // Update a fault record
  async updateFaultRecord(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const updatedFaultRecord = await FaultRecordModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    )

    if (!updatedFaultRecord) {
      res.status(404).json({
        status: 'fail',
        message: 'Fault record not found',
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: {
        faultRecord: updatedFaultRecord,
      },
    })
  }

  // Delete a fault record
  async deleteFaultRecord(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const deletedFaultRecord = await FaultRecordModel.findByIdAndDelete(
      req.params.id,
    )

    if (!deletedFaultRecord) {
      res.status(404).json({
        status: 'fail',
        message: 'Fault record not found',
      })
      return
    }

    res.status(204).json({
      status: 'success',
      data: null,
    })
  }
}

export default FaultRecordController
