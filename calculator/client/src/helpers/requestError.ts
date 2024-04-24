const requestError = (err: unknown): string =>
  typeof err === 'string' ? err : 'Server response error';

export default requestError;
