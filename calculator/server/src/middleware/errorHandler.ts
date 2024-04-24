import ApiError from 'errors/ApiError';
import RequestErrors from 'errors/requestErrors';
import { returnError } from 'common/response';
import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = async (err, req, res, next) => {
  console.error(err);
  if (err instanceof ApiError) {
    res.status(err.code).json(returnError(err.error));
    return;
  }
  const error = RequestErrors.INTERNAL.message;
  res.status(RequestErrors.INTERNAL.code).json(returnError(error));
};

export default errorHandler;
