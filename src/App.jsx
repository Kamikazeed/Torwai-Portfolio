import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Pages/Home'
import Project from './Pages/Project'

const App = () => {
  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:category/:id' element={<Project/>}/>
      </Routes>
    </>
  )
}

export default App
