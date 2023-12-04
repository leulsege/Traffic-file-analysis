import express from 'express'
import UserController from '../controllers/userController'
import { Request, Response, NextFunction } from 'express'

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>

const catchAsync = (fn: AsyncFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((error: Error) => {
      console.error('Error:', error)
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      })
    })
  }
}

const userRouter = express.Router()
const { getAllUsers, getUser, createUser, updateUser, deleteUser } =
  new UserController()
userRouter.route('/').get(catchAsync(getAllUsers)).post(createUser)
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser)

export default userRouter
