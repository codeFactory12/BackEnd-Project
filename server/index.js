import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import projectRoutes from './routes/project.routes.js'
import { PORT } from './config.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

console.log(__dirname)

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(express.static(join(__dirname, '../client/dist')))

app.use('/api/v1', projectRoutes)

app.listen(PORT)
console.log(`Server is listening on port ${PORT}`)
