import RequestErrors from 'errors/requestErrors';
import type { ErrorResponse } from 'calc-types';

type ObjectValues<T> = T[keyof T];
type StatusCodes = ObjectValues<typeof RequestErrors>['code'];

class ApiError implements ErrorResponse {
  constructor(
    public error: string,
    public code: StatusCodes = RequestErrors.UNPROCESSABLE_ENTITY.code,
  ) {}

  static internal(msg: string = RequestErrors.INTERNAL.message) {
    return new ApiError(msg, RequestErrors.INTERNAL.code);
  }

  static wrongMethod(msg: string = RequestErrors.METHOD_NOT_ALLOWED.message) {
    return new ApiError(msg, RequestErrors.METHOD_NOT_ALLOWED.code);
  }

  static badRequest(msg: string = RequestErrors.BAD_REQUEST.message) {
    return new ApiError(msg, RequestErrors.BAD_REQUEST.code);
  }

  static unauthorised(msg: string = RequestErrors.UNAUTHORISED.message) {
    return new ApiError(msg, RequestErrors.UNAUTHORISED.code);
  }

  static unprocessableEntity(msg: string = RequestErrors.UNPROCESSABLE_ENTITY.message) {
    return new ApiError(msg, RequestErrors.UNPROCESSABLE_ENTITY.code);
  }
}

export default ApiError;
