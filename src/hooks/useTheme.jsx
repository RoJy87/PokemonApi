import { useCallback, useState } from 'react'

const useTheme = (ThemeContext) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme])

  const Theme = ThemeContext[theme]

  return [Theme, toggleTheme]
}

export default useTheme
