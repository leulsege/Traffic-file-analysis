import express from 'express'
import cors from 'cors'

import userRouter from './routes/driverRoutes'
import trainingRouter from './routes/trainingRoutes'
import errorHandler from './middleware/errorMiddleware'
import adminRoute from './routes/adminRoutes'
import faultRecordRouter from './routes/faultRecordRoutes'
import vehicleRouter from './routes/vehicleRoutes'

const app = express()
app.use(cors())

app.use(express.json())

app.use('/admin', adminRoute)
app.use('/drivers', userRouter)
app.use('/training', trainingRouter)
app.use('/faultrecord', faultRecordRouter)
app.use('/vehicles', vehicleRouter)

app.use(errorHandler)

export default app
