import type { ErrorResponse, SuccessResponse } from 'calc-types';

function returnSuccess<T>(data?: T): SuccessResponse<T> {
  if (!data) data = {} as T;
  return { data };
}

function returnError(error: string): ErrorResponse {
  return { error };
}

export { returnSuccess, returnError };
