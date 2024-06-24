import React, { createContext, useContext, useEffect, useState } from "react";
import {
  Theme,
  ThemeProviderProps,
  ThemeContextType,
} from "../definations/types";

const ThemeContext = createContext({} as ThemeContextType);

export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    let rootElement = document.querySelector("#root");
    if (theme === "dark") {
      rootElement?.classList.add("dark");
      rootElement?.classList.remove("light");
    } else {
      rootElement?.classList.add("light");
      rootElement?.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
