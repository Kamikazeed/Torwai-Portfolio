import React from 'react'
import Navbar from '../Components/Navbar'
import ProjectHeader from '../Components/project/ProjectHeader'
import Footer from '../Components/Footer'
import ProjectInfo from '../Components/project/ProjectInfo'
import Menu from '../Components/Menu'

const Project = () => {

  return (
    <>
      <Navbar />
      <main className='max-w-[1440px] px-6 md:px-12 lg:px-30 mx-auto'>
        <Menu />
        <ProjectHeader />
        <ProjectInfo />
      </main>
      <Footer />
    </>
  )
}

export default Project
