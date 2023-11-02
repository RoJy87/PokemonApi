import Header from './Header/Header'
import Footer from './Footer/Footer'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import useTheme from '../hooks/useTheme'

const theme = {
  dark: {
    color: '#FFF',
    backgroundHeader: 'linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)',
    backgroundFooter: 'linear-gradient(135deg, #5fc3e4 0%, #e55d87 100%)',
    backgroundButton: '#e55d87',
    background: '#55545f',
  },
  light: {
    color: '#000',
    backgroundHeader: 'linear-gradient(135deg, #5fc3e4 0%, #e55d87 100%)',
    backgroundFooter: 'linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)',
    backgroundButton: '#5fc3e4',
    background: '#ccc',
  },
}

const App = styled.div`
  background: ${(props) => props.theme.background};
  margin: 0 auto;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  padding: 20px 70px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Layout = ({ children }) => {
  const [Theme, toggleTheme] = useTheme(theme)

  return (
    <ThemeProvider theme={Theme}>
      <App>
        <Header toggleTheme={toggleTheme} />
        <Main>{children}</Main>
        <Footer />
      </App>
    </ThemeProvider>
  )
}

export default Layout
