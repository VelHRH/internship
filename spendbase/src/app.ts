import { PathName } from "constants/pathNames";
import "dotenv/config";
import express, { Express } from "express";
import errorHandler from "middleware/errorHandler";
import createRouter from "router";

const startApp = async (): Promise<void> => {
  const app: Express = express();

  app.use(express.json());

  createRouter(app);
  app.use(errorHandler);

  app.listen(process.env.PORT, () => {
    console.log(
      `Server is running on http://localhost:${process.env.PORT}${PathName.API_PREFIX}`
    );
  });
};

export default startApp;
