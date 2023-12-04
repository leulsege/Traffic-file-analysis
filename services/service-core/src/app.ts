import express from 'express'
import userRouter from './routes/userRoutes'

const app = express()

app.use(express.json())
app.use('/users', userRouter)
export default app

// NODE_ENV=development
// PORT=3000
// DATABASE=mongodb://localhost:27017/trafficanalaysis_db
