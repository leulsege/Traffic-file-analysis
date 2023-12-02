import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
import app from './app'

dotenv.config({ path: `${__dirname}/../.env` })
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
)

const connectDB = async (): Promise<void> => {
  try {
    const options: ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions

    await mongoose.connect(DB, options)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

connectDB()

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
