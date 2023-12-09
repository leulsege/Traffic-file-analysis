import asyncError from '../utils/asyncError'
import TrainingModel from '../models/trainingModel'
import GenericController from './genericController'

const TrainingController = new GenericController(TrainingModel)

export const createTraining = asyncError(
  TrainingController.create.bind(TrainingController),
)
export const getAllTrainings = asyncError(
  TrainingController.getAll.bind(TrainingController),
)
export const getTraining = asyncError(
  TrainingController.getOne.bind(TrainingController),
)
export const updateTraining = asyncError(
  TrainingController.updateOne.bind(TrainingController),
)
export const deleteTraining = asyncError(
  TrainingController.deleteOne.bind(TrainingController),
)
