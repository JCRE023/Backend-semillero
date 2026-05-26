// The next line gets a express from node_modules/express:
// const express = require('express'); // common JS.
// Now we can use the import using ESModule, this characteristic was enable in the file package.json:
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './router.js';
import { connectDB } from './config/db.js';
import { corsConfig } from './config/cors.js';

connectDB();

const app = express();

// Cors
app.use(cors(corsConfig))

// The next sentence reads data, sent since a form or Postman:
app.use(express.json());

app.use('/', router);

export default app;