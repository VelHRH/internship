import { BaseError } from "constants/errors";

const RequestErrors = {
  BAD_REQUEST: {
    message: BaseError.BAD_REQUEST,
    code: 400,
  },
  UNAUTHORIZED: {
    message: BaseError.UNAUTHORIZED,
    code: 401,
  },
  INTERNAL: {
    message: BaseError.INTERNAL,
    code: 500,
  },
  METHOD_NOT_ALLOWED: {
    message: BaseError.METHOD_NOT_ALLOWED,
    code: 405,
  },
  UNPROCESSABLE_ENTITY: {
    message: BaseError.UNPROCESSABLE_ENTITY,
    code: 422,
  },
} as const;

export default RequestErrors;
