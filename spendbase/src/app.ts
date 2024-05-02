import dotenv from "dotenv";
import express, { Express } from "express";
import errorHandler from "middleware/errorHandler";
import createRouter from "router";

dotenv.config();

const startApp = async (): Promise<void> => {
  const app: Express = express();

  app.use(express.json());

  createRouter(app);
  app.use(errorHandler);

  app.listen(process.env.PORT, () => {
    console.log(
      `Server is running on http://localhost:${process.env.PORT}/api`
    );
  });
};

export default startApp;
