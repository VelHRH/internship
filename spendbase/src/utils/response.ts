interface ErrorResponse {
  error: string;
}

type SuccessResponse<T> = {
  data: T;
};

function returnSuccess<T>(data?: T): SuccessResponse<T> {
  if (!data) data = {} as T;
  return { data };
}

function returnError(error: string): ErrorResponse {
  return { error };
}

export { ErrorResponse, returnError, returnSuccess };
