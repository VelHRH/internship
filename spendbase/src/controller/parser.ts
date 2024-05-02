import type { RequestHandler } from "controller/types";
import { returnSuccess } from "utils/response";

const parse: RequestHandler = async (req, res, next) => {
  try {
    const url = process.env.SCRAPE_SOURCE;
    if (!url) {
      return res.status(400).json({ error: "URL не указан" });
    }

    const scrapedData = ["mom"];
    if (!scrapedData) {
      return res.status(500).json({ error: "Ошибка при скрапинге данных" });
    }

    res.json(returnSuccess(scrapedData));
  } catch (err) {
    next(err);
  }
};

export default { parse };
