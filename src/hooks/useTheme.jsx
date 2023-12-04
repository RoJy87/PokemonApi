import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../slice/themeSlice'

const useTheme = (ThemeContext) => {
  const theme = useSelector((state) => state.theme.theme)
  const dispatch = useDispatch()

  const toggleTheme = useCallback(() => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
  }, [dispatch, theme])

  const Theme = ThemeContext[theme]

  return [Theme, toggleTheme]
}

export default useTheme
