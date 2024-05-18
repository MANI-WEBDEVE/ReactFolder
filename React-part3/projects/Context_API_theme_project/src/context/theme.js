import { createContext, useContext } from "react";

export const themeContext = createContext(
    {
        themeMode: 'light',
        darkTheme: () => {},
        lightTheme: () => {},
    }
)

export const ThemeProvider = themeContext.Provider

// custome Hook

export default function useTheme () {
    return useContext(themeContext)
}