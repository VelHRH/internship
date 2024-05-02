import express from 'express';

type RequestHandler = {
  (req: express.Request, res: express.Response, next: express.NextFunction): void;
};

export type { RequestHandler };
