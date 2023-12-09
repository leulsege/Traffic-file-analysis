import TrainingModel from '../models/trainingModel'
import GenericController from './genericController'
import { Request, Response, NextFunction } from 'express'

const TrainingController = new GenericController(TrainingModel)

export const createTraining = TrainingController.create.bind(TrainingController)
export const getAllTrainings =
  TrainingController.getAll.bind(TrainingController)
export const getTraining = TrainingController.getOne.bind(TrainingController)
export const updateTraining =
  TrainingController.updateOne.bind(TrainingController)
export const deleteTraining =
  TrainingController.deleteOne.bind(TrainingController)
