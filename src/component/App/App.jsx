import useTheme from '../../hooks/useTheme'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'
import { Button, Image, Layout, Typography } from 'antd'
import { themes } from '../../styles/theme'
import AppRouter from '../../router/AppRouter'
import ThemeWrapper from '../themeWrapper/themeWrapper'

const { Title } = Typography
const { Content, Footer, Header } = Layout

const HeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: ' space-between',
  height: 120,
}

const FooterStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 28,
  fontWeight: 800,
  height: 80,
}

const App = () => {
  const [Theme, toggleTheme] = useTheme(themes)
  return (
    <ThemeWrapper theme={Theme}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={HeaderStyle}>
          <Link to={'/'}>
            <Image preview={false} src={logo} alt='logo' />
          </Link>
          <Title>Pokemon stats</Title>
          <Button onClick={toggleTheme}>Тема</Button>
        </Header>
        <Content
          style={{
            padding: 24,
            flexGrow: 1,
          }}>
          <AppRouter />
        </Content>
        <Footer style={FooterStyle}>Fooooooter</Footer>
      </Layout>
    </ThemeWrapper>
  )
}

export default App
