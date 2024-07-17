import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()

const getTheme = () => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
        localStorage.setItem("theme", "theme-dark");
        return "theme-dark";
    } else {
        return theme;
    }
}
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(getTheme);
  
    function toggleTheme() {
      if (theme === "theme-dark") {
        setTheme("theme-light");
      } else {
        setTheme("theme-dark");
      }
    };
  
    useEffect(() => {
      const refreshTheme = () => {
        localStorage.setItem("theme", theme);
      };
  
      refreshTheme();
    }, [theme]);
  
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
  };
  
  export { ThemeContext, ThemeProvider };