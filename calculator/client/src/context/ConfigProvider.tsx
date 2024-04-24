import { FC, PropsWithChildren, createContext, useEffect, useMemo, useState } from 'react';
import type { Config } from 'calc-types';

import ConfigApi from 'api/ConfigApi';
import requestError from 'helpers/requestError';
import genarateSymbolArrays from 'helpers/symbolArrays';
import useError from 'hooks/useError';
import type { ConfigCtx } from 'context/types/config';

export const ConfigContext = createContext({} as ConfigCtx);

interface ConfigProviderProps extends PropsWithChildren {}

export const ConfigProvider: FC<ConfigProviderProps> = ({ children }) => {
  const [config, setConfig] = useState<Config>();
  const { error, setError } = useError();

  const fetchConfig = async () => {
    try {
      const data = await ConfigApi.getOperators();
      setConfig(data);
    } catch (err) {
      setError(requestError(err));
    }
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  const symbolArrays = useMemo(() => {
    if (config) {
      return genarateSymbolArrays(config);
    }
  }, [config]);

  const value = { config, error, symbolArrays };

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
};
