import express from 'express'
import {
  signup,
  signin,
  protect,
  restrictTo,
  verification,
} from '../middleware/authMiddleware'
import {
  createAdmin,
  deleteAdmin,
  getAdmin,
  getAllAdmins,
  updateAdmin,
} from '../controllers/adminController'

const adminRoute = express.Router()

adminRoute.post('/signup', signup)
adminRoute.post('/signin', signin)

adminRoute.get('/verify/:token', verification)

adminRoute
  .route('/')
  .all(protect, restrictTo('owner'))
  .get(getAllAdmins)
  .post(createAdmin)
adminRoute
  .route('/:id')
  .all(protect)
  .get(getAdmin)
  .patch(restrictTo('owner'), updateAdmin)
  .delete(restrictTo('owner'), deleteAdmin)

export default adminRoute
