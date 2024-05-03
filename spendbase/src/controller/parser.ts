import type { RequestHandler } from "controller/types";
import type { AuthRequest } from "middleware/checkAuth";
import ParseRequestService from "service/parseRequest";
import SaveService from "service/saveData";
import ScrapeService from "service/scrape";
import { returnSuccess } from "utils/response";

const parse: RequestHandler = async (req, res, next) => {
  try {
    const dir = req.query.dir?.toString();
    const fileName = req.query.fileName?.toString();
    const sheetName = req.query.sheetName?.toString();
    const spreadSheet = req.query.spreadSheet?.toString();
    const { id } = (req as unknown as AuthRequest).user;
    if (!dir || !sheetName || !spreadSheet) {
      throw new Error("Wrong params");
    }

    const data = await ScrapeService.scrapeData();
    if (!data) {
      return res.status(500).json({ error: "Ошибка при скрапинге данных" });
    }
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
