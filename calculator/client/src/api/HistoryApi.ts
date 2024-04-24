import type { CalculationResult, HistoryItem, PaginatedData } from 'calc-types';
import HttpWrapper from 'api/HttpWrapper';
import ApiRoute from 'api/apiRoutes';

class HistoryApi extends HttpWrapper {
  constructor() {
    super(import.meta.env.VITE_API_URL);
  }

  public list(page: number, pageSize: number) {
    const url = this.concatenateQueryParams(ApiRoute.HISTORY, { page, pageSize });
    return this.get<PaginatedData<HistoryItem[]>>(url);
  }

  public add(calculationResult: CalculationResult): void {
    this.post(ApiRoute.HISTORY, calculationResult);
  }
}

export default new HistoryApi();
