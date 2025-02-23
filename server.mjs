import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import pointsRouter from './routes/points.mjs';
import polygonsRouter from './routes/polygons.mjs';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/points', pointsRouter);
app.use('/polygons', polygonsRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
