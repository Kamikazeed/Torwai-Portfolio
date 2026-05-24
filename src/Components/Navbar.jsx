import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

  const {openMenu, setOpenMenu, setSection, navigate, isMedium, animateContainer} = useAppContext();
  const navItem = [
    {name: 'Home', id: 'Home'}, 
    {name: 'About', id: 'About'}, 
    {name: 'Skills', id: 'Skills'}, 
    {name: 'Projects', id: 'Projects'}, 
    {name: 'Contact', id: 'Contact'}
  ]

  // const [currentSection, setCurrentSection] = useState('');

  const list = {
    hidden: {opacity: 0, y: -20},
    show: {opacity: 1, y: 0, transition: {duration: 1}}
  }

  // useEffect(() => {
  //   const observerList = [];

  //   navItem.forEach(({id}) => {
  //     const item = document.getElementById(id);
  //     if (!item) return;

  //     const observer = new IntersectionObserver(([entry]) => {
  //       if (entry.isIntersecting) {
  //         setCurrentSection(id)
  //       }
  //     },{
  //       threshold: 0
  //     });

  //     observer.observe(item);
  //     observerList.push(observer);
  //   });

  //   return () => observerList.forEach((obs) => obs.disconnect())
  // }, [])

  return (
    <nav className={`sticky max-w-[1440px] w-full top-0 left-0 px-6 py-4 mx-auto backdrop-blur-lg z-10 md:px-12 lg:px-30`}>
      <motion.div className={`flex justify-between items-center`}
        variants={animateContainer}
        initial='hidden'
        animate='show'
        viewport={{once: true}}
      >
        <motion.a className='text-primary text-4xl font-bold cursor-pointer' variants={list} onClick={() => navigate('/')}>
          Torwai<span className='text-blue'>.</span>
        </motion.a>

        {isMedium ? 
          <ul className='flex items-center gap-6 text-lg text-primary font-semibold'>
            {navItem.map((item, index) => (
              <motion.li className='button-line relative cursor-pointer' key={index} variants={list} onClick={() => setSection(item.name)}>
                <a className='w-full h-full'>
                  <span>{item.name}</span>
                  {/* {currentSection === item.name && (
                    <motion.div 
                      layoutId='underline' 
                      transition={{type: 'spring', stiffness: '500', damping: 30 }} 
                      className='absolute left-0 bottom-0 w-full h-[2px] bg-blue rounded-full'>
                    </motion.div>
                  )} */}
                </a>
              </motion.li>
            ))}
          </ul>
          :
          <motion.button className='flex items-center justify-center border-2 border-border rounded-md p-[2px] cursor-pointer duration-100 hover:bg-secondary-bg' variants={list} onClick={() => setOpenMenu(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
              <path fill="#69D9FE" fillRule="evenodd" d="M3 16h18v2H3zm0-5h18v2H3zm0-5h18v2H3z" />
            </svg>
          </motion.button>
        }
        
      </motion.div>
    </nav>
  )
}

export default Navbar
