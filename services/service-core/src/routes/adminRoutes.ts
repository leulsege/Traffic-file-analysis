import express from 'express'
import {
  signup,
  signin,
  protect,
  restrictTo,
  verification,
} from '../middleware/authMiddleware'
import {
  createUser,
  deleteUser,
  getUser,
  getAllUsers,
  updateUser,
} from '../controllers/adminController'

const adminRoute = express.Router()

adminRoute.post('/signup', signup)
adminRoute.post('/signin', signin)

adminRoute.get('/verify/:token', verification)

adminRoute
  .route('/')
  .all(protect, restrictTo('owner'))
  .get(getAllUsers)
  .post(createUser)
adminRoute
  .route('/:id')
  .all(protect)
  .get(getUser)
  .patch(restrictTo('owner'), updateUser)
  .delete(restrictTo('owner'), deleteUser)

export default adminRoute
