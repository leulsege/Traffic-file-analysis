import asyncError from '../utils/asyncError'
import FaultRecordModel from '../models/faultRecordModel'
import GenericController from './genericController'

const FaultRecordController = new GenericController(FaultRecordModel)

export const createFaultRecord = asyncError(
  FaultRecordController.create.bind(FaultRecordController),
)
export const getAllFaultRecords = asyncError(
  FaultRecordController.getAll.bind(FaultRecordController),
)
export const getFaultRecord = asyncError(
  FaultRecordController.getOne.bind(FaultRecordController),
)
export const updateFaultRecord = asyncError(
  FaultRecordController.updateOne.bind(FaultRecordController),
)
export const deleteFaultRecord = asyncError(
  FaultRecordController.deleteOne.bind(FaultRecordController),
)
