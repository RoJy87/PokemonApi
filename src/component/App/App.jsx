import { Route, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import Details from '../Details/Details'
import useTheme from '../../hooks/useTheme'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'
import { App, Button, ConfigProvider, Image, Layout } from 'antd'
const { Header, Content, Footer } = Layout

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

const HeaderStyle = {
  background: 'linear-gradient(135deg, #e55d87 0%, #5fc3e4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: ' space-between',
  height: 120,
}

const MyPage = () => {
  const [toggleTheme] = useTheme(theme)

  return (
    <Layout>
      <Header style={HeaderStyle}>
        <Link to={'/'}>
          <Image preview={false} src={logo} alt='logo' />
        </Link>
        <h1>Pokemon stats</h1>
        <Button type='primary' onClick={toggleTheme}>
          Theme
        </Button>
      </Header>
      <Content>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/details/:nameid' element={<Details />} />
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </Content>
      <Footer />
    </Layout>
  )
}

const MyApp = () => (
  <ConfigProvider
    theme={{
      token: {
        colorBgContainer: '#dadfdf',
      },
    }}>
    <App>
      <MyPage />
    </App>
  </ConfigProvider>
)

export default MyApp
