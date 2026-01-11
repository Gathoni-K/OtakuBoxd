import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface ThemeContextType{
    isDark: boolean;
    setIsDark: (value: boolean) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children}: { children: ReactNode}) => {
    const [isDark, setIsDark ] = useState<boolean>(false);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);
    /*
    hook running after react renders, runs every time 'isDark' changes, 
    when the toggle is applied, effect updates the HTML class of our DOM element 
    and dark styles are applied.
    */

    const toggleTheme = () => setIsDark(prev => !prev);
    /*
    function creating a toggle, every time our button is clicked it sets our state to
    previous.
    flips our boolean.
    */

    return (
        <ThemeContext.Provider value={{ isDark, setIsDark, toggleTheme,}}>
                {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("useTheme must be used within ThemeProvider");

    }
    return context;
}