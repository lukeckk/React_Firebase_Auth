import { useContext } from "react";
import { ThemeContext } from "./useContextProvider";

export const ThemeToggler = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  // the button below calls the toggleTheme from 'useContextProvider'
  return (
    <div>
      <p>The current theme is {isDarkMode ? "Dark" : "Light"}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}