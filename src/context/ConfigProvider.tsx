import type { ReactNode } from 'react';
import { ConfigContext } from 'src/context/ConfigContext';
import type { Config } from 'src/types/types';

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const cfg: Config = {
    appVersion: __APP_VERSION__,
  };

  return <ConfigContext.Provider value={cfg}>{children}</ConfigContext.Provider>;
};
