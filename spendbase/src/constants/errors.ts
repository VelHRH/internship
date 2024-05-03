export enum BaseError {
  UNAUTHORIZED = "Unauthorized",
  BAD_REQUEST = "Wrong field",
  INTERNAL = "Internal system error",
  METHOD_NOT_ALLOWED = "Unsupported HTTP method",
  UNPROCESSABLE_ENTITY = "Unprocessable request entity",
}

export enum CustomError {
  SCRAPE_SOURCE = "Scrape source error",
  SCRAPE = "Failed to scrape",
  WRONG_PARAMS = "Wrong params set",
  UPDATE_REQUESTS = "Failed to update parse requests",
  GET_REQUESTS = "Failed to get parse requests",
}
