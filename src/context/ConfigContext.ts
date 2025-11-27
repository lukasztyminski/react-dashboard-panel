import { createContext, useContext } from 'react';
import type { Config } from 'src/types/types';

export const ConfigContext = createContext<Config>({} as Config);

export const useConfig = (): Config => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
