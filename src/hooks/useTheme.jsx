import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../store/reducers/themeReducer'
import { getTheme } from '../store/selectors/getTheme'

const useTheme = () => {
  const theme = useSelector(getTheme)

  const dispatch = useDispatch()

  const toggleTheme = () => {
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
  }

  return [theme, toggleTheme]
}

export default useTheme
