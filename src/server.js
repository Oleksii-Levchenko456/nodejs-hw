import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectMongoDB } from './db/connectMongoDB.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import logger from './middleware/logger.js'
import notesRoutes from './routes/notesRoutes.js'
import {errorHandlers} from './middleware/errorHandler.js'


export const app = express();
export const PORT = process.env.PORT || 3000;

app.use(logger)
app.use(cors())
app.use(express.json())

app.use(notesRoutes)

app.use(notFoundHandler);
app.use(errorHandlers)

await connectMongoDB()

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
