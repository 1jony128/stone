import React, { useCallback, useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext';

interface useThemeResult {
    theme: Theme
    toogleTheme: () => void
}

const useTheme = (): useThemeResult => {
    const { setTheme, theme } = useContext(ThemeContext);

    const toogleTheme = useCallback(() => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }, [theme]);

    return {
        theme,
        toogleTheme,
    };
};

export default useTheme;
