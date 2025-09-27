"use client"

import { useState } from "react"

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("dark")
  }

  return { darkMode, toggleTheme }
}
