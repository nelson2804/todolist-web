import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from "../common/theme";

const ThemeContexts = createContext({});

export const useAppThemeContexts = () => {
    return useContext(ThemeContexts);
}

export const AppThemeProvide = ({ children }) => {
    const [themeName, setThemeName] = useState('light');

    const toggleTheme = useCallback(() => {
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);

    const theme = useMemo(() => {
        if (themeName === 'light') return lightTheme;
        return darkTheme;
    }, [themeName]);

    return (
        <ThemeContexts.Provider value={{ themeName, toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContexts.Provider>
    );
}