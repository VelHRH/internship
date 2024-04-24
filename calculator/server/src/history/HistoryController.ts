import { RequestHandler } from 'common/types';
import { returnSuccess } from 'common/response';
import HistoryService from 'history/HistoryService';
import type { PaginationOptions } from 'calc-types';

const get: RequestHandler = async (req, res, next) => {
  try {
    const paginationOptions: PaginationOptions = {
      page: parseFloat(req.query.page!.toString()),
      pageSize: parseFloat(req.query.pageSize!.toString()),
    };
    const history = await HistoryService.paginatedList(paginationOptions);
    res.json(returnSuccess(history));
  } catch (err) {
    next(err);
  }
};

const addRecord: RequestHandler = async (req, res, next) => {
  try {
    await HistoryService.addExisting(req.body.expression);
    res.json(returnSuccess());
  } catch (err) {
    next(err);
  }
};

export default { get, addRecord };
