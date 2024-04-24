import { ApiResponse, Method, SuccessResponse } from 'calc-types';

class HttpWrapper {
  private headers: Record<string, string>;
  constructor(private apiUrl: string) {
    this.headers = {
      'Content-Type': 'application/json',
    };
  }

  public async get<T>(url: string, headers?: Record<string, string>): Promise<T> {
    const response = await fetch(`${this.apiUrl}${url}`, {
      method: Method.GET,
      headers: {
        ...this.headers,
        ...headers,
      },
    });

    return this.handleResponse(response);
  }

  public async post<T>(
    url: string,
    body: Record<string, unknown>,
    headers?: Record<string, string>,
  ): Promise<T> {
    const response = await fetch(`${this.apiUrl}${url}`, {
      method: Method.POST,
      headers: {
        ...this.headers,
        ...headers,
      },
      body: JSON.stringify(body),
    });
    return this.handleResponse(response);
  }

  public async put<T>(
    url: string,
    body: Record<string, unknown>,
    headers?: Record<string, string>,
  ): Promise<SuccessResponse<T>> {
    const response = await fetch(`${this.apiUrl}${url}`, {
      method: Method.PUT,
      headers: {
        ...this.headers,
        ...headers,
      },
      body: JSON.stringify(body),
    });
    return this.handleResponse(response);
  }

  public async patch<T>(
    url: string,
    body: Record<string, unknown>,
    headers?: Record<string, string>,
  ): Promise<SuccessResponse<T>> {
    const response = await fetch(`${this.apiUrl}${url}`, {
      method: Method.PATCH,
      headers: {
        ...this.headers,
        ...headers,
      },
      body: JSON.stringify(body),
    });
    return this.handleResponse(response);
  }

  public async delete<T>(
    url: string,
    headers?: Record<string, string>,
  ): Promise<SuccessResponse<T>> {
    const response = await fetch(`${this.apiUrl}${url}`, {
      method: Method.DELETE,
      headers: {
        ...this.headers,
        ...headers,
      },
    });
    return this.handleResponse(response);
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    const data = (await response.json()) as ApiResponse<T>;

    if ('error' in data) {
      throw data.error;
    }
    return data.data;
  }

  protected concatenateQueryParams(
    baseUrl: string,
    params: Record<string, string | number>,
  ): string {
    if (!params || Object.keys(params).length === 0) {
      return baseUrl;
    }

    const separator = baseUrl.includes('?') ? '&' : '?';

    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    const fullUrl = `${baseUrl}${separator}${queryString}`;

    return fullUrl;
  }
}

export default HttpWrapper;
