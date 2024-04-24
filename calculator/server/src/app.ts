import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import createRouter from 'router/router';
import errorHandler from 'middleware/errorHandler';

dotenv.config();

const startApp = async (): Promise<void> => {
  const app: Express = express();

  app.use(cors());
  app.use(express.json());

  createRouter(app);
  app.use(errorHandler);

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}/api`);
  });
};

export default startApp;
