import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material';

import { DarkTheme, LightTheme } from '../common/theme';

const ThemeContext = createContext({});

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};


const AppThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => (oldThemeName === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
          {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;