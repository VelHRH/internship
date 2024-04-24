interface ErrorResponse {
  error: string;
}

type SuccessResponse<T> = {
  data: T;
};

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

type PaginationOptions = { page: number; pageSize: number };

type PaginatedData<T> = PaginationOptions & {
  data: T;
  total: number;
};

export type { ErrorResponse, SuccessResponse, ApiResponse, PaginationOptions, PaginatedData };
