import ApiError from "error/ApiError";
import RequestErrors from "error/requestErrors";
import { ErrorRequestHandler } from "express";
import { returnError } from "utils/response";

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
