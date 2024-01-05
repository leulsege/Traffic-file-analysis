import asyncError from '../utils/asyncError'
import { User } from '../models/adminModel'

import { Request, Response, NextFunction } from 'express'
import AppError from '../utils/appError'

export const getAllUsers = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const users = await User.find()

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    })
  },
)

export const getUser = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = await User.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    })
  },
)

export const updateUser = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (req.body.password || req.body.passwordConfirm) {
      return next(
        new AppError(
          'This route is not for password updates. Please use /updateMyPassword.',
          400,
        ),
      )
    }
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({
      status: 'success',
      data: {
        user: updateUser,
      },
    })
  },
)
export const deleteUser = asyncError(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const deleteUser = await User.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: 'success',
      data: null,
    })
  },
)
