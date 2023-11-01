import { Route, Routes } from 'react-router-dom'
import Layout from '../../Layout/Layout'
import Main from '../../pages/Main/Main'
import Details from '../Details/Details'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='details/:nameid' element={<Details />} />
        </Route>
        <Route path='*' element={<p>Not Found</p>} />
      </Routes>
    </Layout>
  )
}

export default App
