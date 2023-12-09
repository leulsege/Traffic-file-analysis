import express from 'express'
import userRouter from './routes/userRoutes'
import trainingRouter from './routes/trainingRoutes'
import errorHandler from './middleware/errorMiddleware'

const app = express()

app.use(express.json())
app.use('/users', userRouter)
app.use('/training', trainingRouter)

app.use(errorHandler)

export default app
