import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import { router } from './routes/routes';
import { db } from './config/db.config';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

import { logger } from './config/setup/logger';
import { response } from './config/setup/response';

// Add initial middleware, loggers, authenticators, etc
app.use(logger);

// Add business logic routes
app.use('/api/v1', router);

// Add exit middleware
app.use(response);

db.then(() => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
});
