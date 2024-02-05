import React from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import PublicRoutes from './routes/PublicRoutes'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <PublicRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App