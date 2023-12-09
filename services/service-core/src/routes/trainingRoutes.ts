import express from 'express'
import {
  getAllTrainings,
  getTraining,
  updateTraining,
  deleteTraining,
  createTraining,
} from '../controllers/trainingController'

const trainingRouter = express.Router()

trainingRouter.route('/').post(createTraining).get(getAllTrainings)
trainingRouter
  .route('/:id')
  .get(getTraining)
  .patch(updateTraining)
  .delete(deleteTraining)

export default trainingRouter
