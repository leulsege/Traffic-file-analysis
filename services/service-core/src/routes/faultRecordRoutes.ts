import express from 'express'
import FaultRecordController from '../controllers/faultRecordController'

const faultRecordRouter = express.Router()
const {
  createFaultRecord,
  getAllFaultRecords,
  getFaultRecord,
  updateFaultRecord,
  deleteFaultRecord,
} = new FaultRecordController()

faultRecordRouter.route('/').post(createFaultRecord).get(getAllFaultRecords)
faultRecordRouter
  .route('/:id')
  .get(getFaultRecord)
  .patch(updateFaultRecord)
  .delete(deleteFaultRecord)

export default faultRecordRouter
