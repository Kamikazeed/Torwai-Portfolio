import React, { lazy, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Menu from '../Components/Menu'
import Hero from '../Components/Hero'
const About = lazy(() => import('../Components/About'))
const Skill = lazy(() => import('../Components/Skill'))
const ProjectList = lazy(() => import('../Components/ProjectList'))
const Contact = lazy(() => import('../Components/Contact'))
const Footer = lazy(() => import('../Components/Footer'))
import { useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Home = () => {

  const {navigate} = useAppContext();
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');

      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      })
    }
  }, [location.hash])

  return (
    <>
      <Navbar/>
      <main className='main max-w-[1440px] px-6 md:px-12 lg:px-30 mx-auto'>
        <Menu/>
        <Hero/>
        <About/>
        <Skill/>
        <ProjectList/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default Home
