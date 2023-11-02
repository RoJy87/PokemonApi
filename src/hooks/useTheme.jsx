import { useState } from 'react'

const useTheme = (ThemeContext) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const Theme = ThemeContext[theme]

  return [Theme, toggleTheme]
}

export default useTheme
