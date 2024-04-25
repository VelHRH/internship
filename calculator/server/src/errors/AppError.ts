import { TRPCError } from '@trpc/server';
import RequestErrors from 'errors/requestErrors';

class AppError extends TRPCError {
  constructor(
    public message: string,
    public code: TRPCError['code'] = RequestErrors.BAD_REQUEST.сode,
  ) {
    super({ message, code });
  }

  static internal(msg: string = RequestErrors.INTERNAL.message) {
    return new AppError(msg, RequestErrors.INTERNAL.сode);
  }

  static wrongMethod(msg: string = RequestErrors.METHOD_NOT_ALLOWED.message) {
    return new AppError(msg, RequestErrors.METHOD_NOT_ALLOWED.сode);
  }

  static badRequest(msg: string = RequestErrors.BAD_REQUEST.message) {
    return new AppError(msg, RequestErrors.BAD_REQUEST.сode);
  }

  static unauthorised(msg: string = RequestErrors.UNAUTHORISED.message) {
    return new AppError(msg, RequestErrors.UNAUTHORISED.сode);
  }
}

export default AppError;
