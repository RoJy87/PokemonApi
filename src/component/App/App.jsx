import { Route, Routes } from 'react-router-dom'
import Main from '../Main/Main'
import Details from '../Details/Details'
import useTheme from '../../hooks/useTheme'
import logo from '../../image/logo.png'
import { Link } from 'react-router-dom'
import { App, Button, ConfigProvider, Image, Layout } from 'antd'
import Title from 'antd/es/typography/Title'
import { Content, Footer, Header } from 'antd/es/layout/layout'

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

const MyPage = ({ toggleTheme }) => {
  return (
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
  )
}

const MyApp = () => {
  const themes = {
    dark: {
      token: {
        colorBgLayout: '#093258',
        colorTextHeading: '#ca44d6',
      },
      components: {
        Layout: {
          headerBg: '#2d4155',
          footerBg: '#2d4155',
        },
        Card: {
          headerBg: '#2d4155',
        },
        Button: {
          defaultBg: '#2d4155',
          defaultBorderColor: '#807303',
          defaultColor: '#ca44d6',
        },
      },
    },
    light: {
      token: {
        colorBgLayout: '#8BA5E0',
        colorTextHeading: '#807303',
      },
      components: {
        Layout: {
          headerBg: '#A88BE0',
          footerBg: '#8B8AE0',
          footerColor: '#807303',
        },
        Card: {
          headerBg: '#A88BE0',
        },
        Button: {
          defaultBg: '#A88BE0',
          defaultBorderColor: '#807303',
          defaultColor: '#807303',
        },
      },
    },
  }

  const [Theme, toggleTheme] = useTheme(themes)
  console.log(Theme)

  return (
    <ConfigProvider theme={Theme}>
      <App>
        <MyPage toggleTheme={toggleTheme} />
      </App>
    </ConfigProvider>
  )
}

export default MyApp
