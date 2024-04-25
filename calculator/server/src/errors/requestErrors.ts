const RequestErrors = {
  BAD_REQUEST: {
    message: 'Wrong field',
    сode: 'BAD_REQUEST',
  },
  UNAUTHORISED: {
    message: 'Not authorised',
    сode: 'UNAUTHORIZED',
  },
  INTERNAL: {
    message: 'Internal system error',
    сode: 'INTERNAL_SERVER_ERROR',
  },
  METHOD_NOT_ALLOWED: {
    message: 'Unsupported HTTP method',
    сode: 'METHOD_NOT_SUPPORTED',
  },
} as const;

export default RequestErrors;
