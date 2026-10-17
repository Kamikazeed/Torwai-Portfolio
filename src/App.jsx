import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Pages/Home'
const Loader = lazy(() => import('./Components/Loader'))
const Project = lazy(() => import('./Pages/Project'))


const App = () => {
  return (
    <>
    <ToastContainer />
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:category/:id' element={<Project/>}/>
      </Routes>
    </Suspense>
    </>
  )
}

export default App
