import asyncError from '../utils/asyncError'
import { User } from '../models/adminModel'
import GenericController from './genericController'

const AdminController = new GenericController(User)

export const createAdmin = asyncError(
  AdminController.create.bind(AdminController),
)
export const getAllAdmins = asyncError(
  AdminController.getAll.bind(AdminController),
)
export const getAdmin = asyncError(AdminController.getOne.bind(AdminController))
export const updateAdmin = asyncError(
  AdminController.updateOne.bind(AdminController),
)
export const deleteAdmin = asyncError(
  AdminController.deleteOne.bind(AdminController),
)
