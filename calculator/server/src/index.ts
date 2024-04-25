import express, { Express } from 'express';
import cors from 'cors';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import dotenv from 'dotenv';
import appRouter from './trpc/router';
dotenv.config();

const app: Express = express();

app.use(cors());

app.use(
  '',
  createExpressMiddleware({
    router: appRouter,
    onError: opts => console.error(opts.error),
  }),
);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
