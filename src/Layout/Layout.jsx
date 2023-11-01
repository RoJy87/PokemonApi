import Header from './Header/Header'
import Footer from './Footer/Footer'
import styled from 'styled-components'

const App = styled.div`
  background-color: #ccc;
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

const Layout = ({ children }) => (
  <App>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </App>
)

export default Layout
