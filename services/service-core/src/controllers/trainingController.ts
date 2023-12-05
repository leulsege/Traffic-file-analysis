import { Request, Response, NextFunction } from 'express'
import TrainingModel from '../models/trainingModel'

class TrainingController {
  async createTraining(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const newTraining = await TrainingModel.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        training: newTraining,
      },
    })
  }

  async getAllTrainings(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const trainings = await TrainingModel.find()

    res.status(200).json({
      status: 'success',
      results: trainings.length,
      data: {
        trainings,
      },
    })
  }

  async getTraining(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const training = await TrainingModel.findById(req.params.id)

    if (!training) {
      res.status(404).json({
        status: 'fail',
        message: 'Training not found',
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: {
        training,
      },
    })
  }

  async updateTraining(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const updatedTraining = await TrainingModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    )

    if (!updatedTraining) {
      res.status(404).json({
        status: 'fail',
        message: 'Training not found',
      })
      return
    }

    res.status(200).json({
      status: 'success',
      data: {
        training: updatedTraining,
      },
    })
  }

  // Delete a training
  async deleteTraining(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const deletedTraining = await TrainingModel.findByIdAndDelete(req.params.id)

    if (!deletedTraining) {
      res.status(404).json({
        status: 'fail',
        message: 'Training not found',
      })
      return
    }

    res.status(204).json({
      status: 'success',
      data: null,
    })
  }
}

export default TrainingController
