import { Request, Response, NextFunction } from 'express'
import { Document, Model } from 'mongoose'

class GenericController {
  private model

  constructor(model) {
    this.model = model
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    const newRecord = await this.model.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        record: newRecord,
      },
    })
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    const records = await this.model.find()

    res.status(200).json({
      status: 'success',
      results: records.length,
      data: {
        records,
      },
    })
  }

  async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    const record = await this.model.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        record,
      },
    })
  }

  async updateOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const updatedRecord = await this.model.findByIdAndUpdate(
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
        record: updatedRecord,
      },
    })
  }

  async deleteOne(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const deletedRecord = await this.model.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: 'success',
      data: null,
    })
  }
}

export default GenericController
