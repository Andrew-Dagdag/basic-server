import express, { Express, Request, Response, Router } from 'express'
import dotenv from 'dotenv'
import { router } from './server/routes/routes'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

import { logger } from './server/utils/logger';
import { response } from './server/utils/response';

// Add initial middleware, loggers, authenticators, etc
app.use(logger);

// Add business logic routes
app.use('/api/v1', router)

// Add exit middleware
app.use(response);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
