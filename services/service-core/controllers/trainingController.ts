import asyncError from '../utils/asyncError'
import TrainingModel from '../models/trainingModel'
import { Request, Response, NextFunction } from 'express'

export const createTraining = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const newTraining = await TrainingModel.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        training: newTraining,
      },
    })
  },
)

export const getAllTrainings = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const trainings = await TrainingModel.find()

    res.status(200).json({
      status: 'success',
      results: trainings.length,
      data: {
        trainings,
      },
    })
  },
)

export const getTraining = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const training = await TrainingModel.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        training,
      },
    })
  },
)

export const updateTraining = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const updateTraining = await TrainingModel.findByIdAndUpdate(
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
        training: updateTraining,
      },
    })
  },
)
export const deleteTraining = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const deleteTraining = await TrainingModel.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: 'success',
      data: null,
    })
  },
)
