import { DataSource } from 'typeorm'
import express from 'express'
import { config } from 'dotenv'

config()

const app = express()

async function bootstrap() {
  const dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD.toString(),
    database: process.env.DB_DATABASE,
    entities: ['src/entities/*.ts'],
    migrations: ['src/migrations/*.ts'],
  })

  await dataSource.initialize()
  app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`)
  })
}

bootstrap()
