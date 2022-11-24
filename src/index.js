import express from 'express';
import morgan from 'morgan';
import projectRoutes from './routes/project.routes.js';
import indexRoutes from './routes/index.routes.js';

const app = express();


app.use(express.json())
app.use(morgan('dev'))
app.use('/api', projectRoutes)
app.use(indexRoutes)



app.listen(3001)
console.log('Server on port 3001')