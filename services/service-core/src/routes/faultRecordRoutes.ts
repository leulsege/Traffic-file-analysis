import express from 'express'
import {
  createFaultRecord,
  getAllFaultRecords,
  getFaultRecord,
  updateFaultRecord,
  deleteFaultRecord,
} from '../controllers/faultRecordController'

const faultRecordRouter = express.Router()

faultRecordRouter.route('/').post(createFaultRecord).get(getAllFaultRecords)
faultRecordRouter
  .route('/:id')
  .get(getFaultRecord)
  .patch(updateFaultRecord)
  .delete(deleteFaultRecord)

export default faultRecordRouter
