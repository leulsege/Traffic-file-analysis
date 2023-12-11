import express from 'express'
import {
  getAllTrainings,
  getTraining,
  updateTraining,
  deleteTraining,
  createTraining,
} from '../controllers/trainingController'
import { protect, restrictTo } from '../middleware/authMiddleware'

const trainingRouter = express.Router()

trainingRouter
  .route('/')
  .all(protect, restrictTo('admin', 'owner'))
  .post(createTraining)
  .get(getAllTrainings)
trainingRouter
  .route('/:id')
  .all(protect)
  .get(getTraining)
  .patch(restrictTo('admin', 'owner'), updateTraining)
  .delete(restrictTo('admin', 'owner'), deleteTraining)

export default trainingRouter
