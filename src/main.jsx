import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import Layout from './components/Layout'
import Error404 from './pages/Error404'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/logements/:id' element={<Logement/>}/>
          <Route path="*" element={<Error404 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
