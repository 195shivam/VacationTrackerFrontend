import { useContext } from 'react';
import { HomeContext } from './HomeContext';

export const useHome = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
