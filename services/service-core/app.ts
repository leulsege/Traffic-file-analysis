import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import * as path from 'path'

import driverRouter from './routes/driverRoutes'
import trainingRouter from './routes/trainingRoutes'
import errorHandler from './middleware/errorMiddleware'
import adminRoute from './routes/adminRoutes'
import faultRecordRouter from './routes/faultRecordRoutes'
import vehicleRouter from './routes/vehicleRoutes'
import vehicleAccidentRouter from './routes/vehicleAccidentRoutes'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')))
app.use('/admins', adminRoute)
app.use('/drivers', driverRouter)
app.use('/trainings', trainingRouter)
app.use('/faultrecords', faultRecordRouter)
app.use('/vehicleaccidents', vehicleAccidentRouter)
app.use('/vehicles', vehicleRouter)

app.use(errorHandler)

export default app
