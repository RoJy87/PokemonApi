import { Route, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import Details from '../Details/Details'
import useTheme from '../../hooks/useTheme'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'
import { Button, ConfigProvider, Image, Layout } from 'antd'
import Title from 'antd/es/typography/Title'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { themes } from '../../styles/theme'

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
    <ConfigProvider theme={Theme}>
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
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/details/:nameid' element={<Details />} />
            <Route path='*' element={<p>Not Found</p>} />
          </Routes>
        </Content>
        <Footer style={FooterStyle}>Fooooooter</Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App
