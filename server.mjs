import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import pointRouter from './routes/points.mjs'

dotenv.config();

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.use('/points',pointRouter)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });