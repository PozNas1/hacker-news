import { useEffect, useState, createContext } from "react";
import { ThemeContextType } from "../@types/hackerNews";

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<{ children: any }> = ({ children }) => {
  const [isDarkMode, setMode] = useState<boolean>(
    localStorage.getItem("isDarkMode") === "dark" ? true : false
  );

  const switchMode = () => {
    setMode(!isDarkMode);
  };

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        switchMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
