import FaultRecordModel from '../models/faultRecordModel'
import GenericController from './genericController'

const FaultRecordController = new GenericController(FaultRecordModel)

export const createFaultRecord = FaultRecordController.create.bind(
  FaultRecordController,
)
export const getAllFaultRecords = FaultRecordController.getAll.bind(
  FaultRecordController,
)
export const getFaultRecord = FaultRecordController.getOne.bind(
  FaultRecordController,
)
export const updateFaultRecord = FaultRecordController.updateOne.bind(
  FaultRecordController,
)
export const deleteFaultRecord = FaultRecordController.deleteOne.bind(
  FaultRecordController,
)
