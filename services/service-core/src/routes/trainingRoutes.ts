import express from 'express'
import TrainingController from '../controllers/trainingController'

const trainingRouter = express.Router()
const {
  createTraining,
  getAllTrainings,
  getTraining,
  updateTraining,
  deleteTraining,
} = new TrainingController()

trainingRouter.route('/').post(createTraining).get(getAllTrainings)
trainingRouter
  .route('/:id')
  .get(getTraining)
  .patch(updateTraining)
  .delete(deleteTraining)

export default trainingRouter
