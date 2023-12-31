import express from 'express'
import cors from 'cors'

import userRouter from './routes/driverRoutes'
import trainingRouter from './routes/trainingRoutes'
import errorHandler from './middleware/errorMiddleware'
import adminRoute from './routes/adminRoutes'
import faultRecordRouter from './routes/faultRecordRoutes'

const app = express()
app.use(cors())

app.use(express.json())

app.use('/admin', adminRoute)
app.use('/users', userRouter)
app.use('/training', trainingRouter)
app.use('/faultrecord', faultRecordRouter)

app.use(errorHandler)

export default app
