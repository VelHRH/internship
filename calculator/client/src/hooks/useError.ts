import { useState } from 'react';

type SetError = (errorMessage: string) => void;

type UseError = () => { error: string; setError: SetError };

const useError: UseError = () => {
  const [error, setError] = useState<string>('');

  const setErrorWithPrefix: SetError = errorMessage => {
    if (errorMessage === '') setError(errorMessage);
    else setError(`Error: ${errorMessage}`);
  };

  return { error, setError: setErrorWithPrefix };
};

export default useError;
