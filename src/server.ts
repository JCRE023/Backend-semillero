import express from 'express';
import router from './router.js';
import { connectDB } from './config/db.js';

connectDB();

const app = express();

// Read data since form or postman:

app.use(express.json());

app.use("/", router);


export default app;