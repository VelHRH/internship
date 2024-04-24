const RequestErrors = {
  BAD_REQUEST: {
    message: 'Wrong field',
    code: 400,
  },
  UNAUTHORISED: {
    message: 'Not authorised',
    code: 403,
  },
  INTERNAL: {
    message: 'Internal system error',
    code: 500,
  },
  METHOD_NOT_ALLOWED: {
    message: 'Unsupported HTTP method',
    code: 405,
  },
  UNPROCESSABLE_ENTITY: {
    message: 'Unprocessable request entity',
    code: 422,
  },
} as const;

export default RequestErrors;
