import express from 'express'
import {
  signup,
  signin,
  protect,
  restrictTo,
} from '../middleware/authMiddleware'

const adminRoute = express.Router()

adminRoute.post('/signup', signup)
adminRoute.post('/signin', signin)

export default adminRoute
