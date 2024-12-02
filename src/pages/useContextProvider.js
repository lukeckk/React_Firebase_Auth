import { useState, createContext } from "react";
import { ThemeToggler } from "./useContext";

// creat a ThemeContext to be used later
export const ThemeContext = createContext()

export const ThemeProvider = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    // syntax to toggle between true and false
    setIsDarkMode((prevMode) => !prevMode)
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeToggler/>
    </ThemeContext.Provider>

  )
}