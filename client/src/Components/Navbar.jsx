import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { navItem } from '../assets/asset'
import { useAppContext } from '../context/AppContext';
import { useLocation } from 'react-router-dom';
import { animateContainer, animation } from '../utils/animation';

const Navbar = () => {

  const {openMenu, setOpenMenu, scrollToSection, isMedium} = useAppContext();
  const [currentSection, setCurrentSection] = useState('');
  const location = useLocation();

  const onClickLogo = (e) => {
    e.preventDefault();
    scrollToSection(navItem[0].name)
  }

  useEffect(() => {
    const visibleSections = new Map();
    const observers = [];

    navItem.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.boundingClientRect.top);
          } else {
            visibleSections.delete(id);
          }

          if (visibleSections.size > 0) {
            const topSection = [...visibleSections.entries()].reduce((closest, current) => {
              const closestDistance = Math.abs(closest[1]);
              const currentDistance = Math.abs(current[1]);
              return currentDistance < closestDistance ? current : closest;
            });

            setCurrentSection(topSection[0])
          }
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '0px',
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav className={`sticky max-w-[1440px] w-full top-0 left-0 px-6 py-4 mx-auto backdrop-blur-lg z-10 md:px-12 lg:px-30`}>
      <motion.div className={`flex justify-between items-center`}
        variants={animateContainer[0]}
        initial='hidden'
        animate='show'
        viewport={{once: true}}
      >
        <motion.a className='text-primary text-4xl font-bold cursor-pointer' href={location.pathname === '/' ? '#Home' : '/'} onClick={location.pathname === '/' ? onClickLogo : ''} variants={animation[0]}>
          Torwai<span className='text-blue'>.</span>
        </motion.a>

        {isMedium ? 
          <ul className='flex items-center gap-6 text-lg text-primary font-semibold'>
            {navItem.map((item, index) => (
              <motion.li className='relative cursor-pointer' key={index} variants={animation[0]}>
                <button className='cursor-pointer' onClick={() => scrollToSection(item.name)}>
                  <span className='w-full h-full'>{item.name}</span>
                  {currentSection === item.name && (
                    <motion.div 
                      layoutId='underline' 
                      transition={{type: 'spring', stiffness: '500', damping: 30 }} 
                      className='absolute left-0 bottom-0 w-full h-[2px] bg-blue rounded-full'>
                    </motion.div>
                  )}
                </button>
              </motion.li>
            ))}
          </ul>
          :
          <motion.button className='flex items-center justify-center border-2 border-border rounded-md p-[2px] cursor-pointer duration-100 hover:bg-secondary-bg' variants={animation[0]} onClick={() => setOpenMenu(true)}>
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
