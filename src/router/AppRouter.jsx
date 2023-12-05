import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../component/Main/Main'
import Details from '../component/Details/Details'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/details/:nameid' element={<Details />} />
      <Route path='*' element={<p>Not Found</p>} />
    </Routes>
  )
}

export default AppRouter
