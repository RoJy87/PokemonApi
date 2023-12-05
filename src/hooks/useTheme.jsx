import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../store/reducers/themeReducer'
import { getTheme } from '../store/selectors/getTheme'

const useTheme = (ThemeContext = {}) => {
  const theme = useSelector(getTheme)
  const dispatch = useDispatch()

  const toggleTheme = useCallback(() => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
  }, [dispatch, theme])

  const Theme = ThemeContext[theme]

  return [Theme, toggleTheme]
}

export default useTheme
