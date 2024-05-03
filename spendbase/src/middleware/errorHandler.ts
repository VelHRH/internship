import { ErrorRequestHandler } from "express";
import ApiError from "utils/error/ApiError";
import RequestErrors from "utils/error/requestErrors";
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
