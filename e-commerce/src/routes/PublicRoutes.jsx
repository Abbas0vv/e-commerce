import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from '../layout/Layout'
import HomePage from '../pages/Index/HomePage'

const PublicRoutes = () => {
  return (
    <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
        </Routes>
    </Layout>
  )
}

export default PublicRoutes