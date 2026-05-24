import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Menu from '../Components/Menu'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Skill from '../Components/Skill'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import ProjectList from '../Components/ProjectList'
import { useLocation } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Home = () => {

  const {navigate} = useAppContext();
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          block: 'start',
        });
      }, 100)
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
