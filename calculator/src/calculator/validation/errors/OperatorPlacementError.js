import errors from '@validationErrors/errors';

class OperatorPlacementError extends Error {
  constructor(operator) {
    super();
    this.message = `${errors.operator} ${operator}`;
  }
}

export default OperatorPlacementError;
