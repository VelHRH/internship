import type { RequestHandler } from "controller/types";
import type { AuthRequest } from "middleware/checkAuth";
import ParseRequestService from "service/parser/parseRequest";
import SaveService from "service/parser/saveData";
import ScrapeService from "service/parser/scrape";
import { returnSuccess } from "utils/response";

const parse: RequestHandler = async (req, res, next) => {
  try {
    const dir = req.query.dir?.toString();
    const fileName = req.query.fileName?.toString();
    const sheetName = req.query.sheetName?.toString();
    const spreadSheet = req.query.spreadSheet?.toString();
    const { id } = (req as unknown as AuthRequest).user;
    const data = await ScrapeService.scrapeData();
    await SaveService.save({ data, dir, fileName, sheetName, spreadSheet });
    await ParseRequestService.create(id);
    res.json(returnSuccess(data));
  } catch (err) {
    next(err);
  }
};

const listRequests: RequestHandler = async (req, res, next) => {
  try {
    const requests = await ParseRequestService.list();
    res.json(returnSuccess(requests));
  } catch (err) {
    next(err);
  }
};

export default { parse, listRequests };
