import DriverModel from '../models/userModel'
import { Request, Response, NextFunction } from 'express'

class UserController {
  async getAllUsers(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const users = await DriverModel.find()

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    })
  }

  async getUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const user = await DriverModel.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    })
  }

  async createUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const newUser = await DriverModel.create(req.body)

    res.status(201).json({
      status: 'success',
      data: {
        newUser,
      },
    })
  }

  async updateUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const user = await DriverModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    })
  }

  async deleteUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const user = await DriverModel.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: 'success',
      data: {
        user,
      },
    })
  }
}

export default UserController
