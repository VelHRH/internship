import errors from '@validationErrors/errors';

class PointPlacementError extends Error {
  constructor() {
    super();
    this.message = errors.point;
  }
}

export default PointPlacementError;
