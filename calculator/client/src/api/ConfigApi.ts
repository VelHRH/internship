import { Config } from 'calc-types';
import HttpWrapper from 'api/HttpWrapper';
import ApiRoute from 'api/apiRoutes';

class ConfigApi extends HttpWrapper {
  constructor() {
    super(import.meta.env.VITE_API_URL);
  }

  public getOperators() {
    return this.get<Config>(ApiRoute.CONFIG);
  }
}

export default new ConfigApi();
