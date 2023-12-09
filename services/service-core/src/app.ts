import express from 'express'
import userRouter from './routes/userRoutes'
import trainingRouter from './routes/trainingRoutes'

const app = express()

app.use(express.json())
app.use('/users', userRouter)
app.use('/training', trainingRouter)

export default app
