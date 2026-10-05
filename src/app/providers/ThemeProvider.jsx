import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("promanage-theme") || "light";
    });

    useEffect(() => {
        localStorage.setItem("promanage-theme", theme);

        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else if (theme === "light") {
            root.classList.remove("dark");
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;

            root.classList.toggle("dark", prefersDark);
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            if (currentTheme === "dark") {
                return "light";
            }

            return "dark";
        });
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );
    }

    return context;
}