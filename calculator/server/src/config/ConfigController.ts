import ConfigService from 'config/ConfigService';
import { RequestHandler } from 'common/types';
import { returnSuccess } from 'common/response';

const get: RequestHandler = (req, res, next) => {
  try {
    const config = ConfigService.list();
    res.json(returnSuccess(config));
  } catch (err) {
    next(err);
  }
};

export default { get };
