import React, { useEffect, useRef } from 'react'
import { motion, useInView } from "motion/react"
import { useAppContext } from '../context/AppContext'
import { buttons } from '../assets/asset'
import { animateContainer, animation } from '../utils/animation';

const ProjectCard = ({project, index}) => {

  const videoRef = useRef(null);
  const videoInView = useInView(videoRef, {amount: 0.3})
  const barRef = useRef(null);
  const barInView = useInView(barRef);

  useEffect(() => {
    const video = videoRef.current
    if(!video) return

    if(videoInView) {
      video.play()
    } else {
      video.pause()
    }

  }, [videoInView])

  return (
    <motion.div className={`relative px-5 md:px-10 ${index % 2 === 0 ? 'lg:px-0 lg:pl-6' : 'lg:px-0 lg:pr-6'}`} key={index}
      variants={animateContainer[0]}
      initial='hidden'
      whileInView='show'
      viewport={{once: true, amount: 0.3}}
    >
      <motion.div className={`w-full h-full absolute bottom-0 px-6 primary-border -z-1 lg:w-[93%] ${index % 2 === 0 ? 'left-0 lg:left-0' : '-right-0 lg:right-0'}`} variants={animation[1]}>
        <div className='slide-bar flex w-full -translate-y-[50%] overflow-hidden' ref={barRef}>
          <motion.ul className='flex shrink-0 px-[6px] gap-3'
            style={{animationPlayState: barInView ? 'running' : 'paused'}}
          >
            {[...project.tool, ...project.tool].map((item, index) => (
              <li className='flex shrink-0 items-center gap-[6px] px-3 py-1 bg-primary-bg border-2 border-border rounded-3xl' key={index + item.name}>
                <img className='w-5 h-5 md:w-6 md:h-6' src={item.icon} alt={item.name} loading='lazy' />
                <span className='text-sm text-primary md:text-md'>{item.name}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      <motion.div className='flex flex-col-reverse justify-between items-center gap-5 py-8 md:gap-8 md:py-12 lg:flex-row lg:py-18' variants={animation[1]}>
        <div className={`flex-initial w-full text-primary lg:w-[45%] ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
          <div>
            <span className='bg-secondary-bg rounded-3xl py-1 px-2 text-sm md:text-md'>{project.year}</span>
            <h3 className='text-xl text-primary font-bold mt-2 md:mt-3 md:text-3xl'>{project.name}</h3>
          </div>
          <p className='thai text-sm leading-6 mt-2 md:text-md md:mt-3'>{project.description}</p>
          {index === 0 ? 
            <div className='flex flex-wrap gap-2 mt-5'>
              <a className='flex items-center gap-[6px] primary-border px-1 py-[6px] text-primary text-sm font-regural cursor-pointer duration-100 hover:bg-secondary-bg/50 md:gap-2 md:px-2 md:text-md md:font-medium' href={project.link} title='Figma' aria-label='Figma' target='_blank'>
                <img className='w-5 h-5 md:w-7 md:h-7' src={buttons[2].icon} alt={buttons[2].text} loading='lazy' />
                <span>{buttons[2].text}</span>
              </a>
            </div>
            :
            <div className='flex flex-wrap gap-2 mt-5'>
              <a className='flex items-center gap-[6px] primary-border px-1 py-[6px] text-primary text-sm font-regural cursor-pointer duration-100 hover:bg-secondary-bg/50 md:gap-2 md:px-2 md:text-md md:font-medium' href='#' >
                <img className='w-5 h-5 md:w-7 md:h-7' src={buttons[0].icon} alt={buttons[0].text} loading='lazy' />
                <span>{buttons[0].text}</span>
              </a>
              <a className='flex items-center gap-[6px] primary-border px-1 py-[6px] text-primary text-sm font-regural cursor-pointer duration-100 hover:bg-secondary-bg/50 md:gap-2 md:px-2 md:text-md md:font-medium' href={`/project/${index - 1}`}>
                <img className='w-5 h-5 md:w-7 md:h-7' src={buttons[1].icon} alt={buttons[1].text} loading='lazy' />
                <span>{buttons[1].text}</span>
              </a>
            </div>
          }
        </div>
        
        <div className={`flex-initial w-full primary-border overflow-hidden lg:w-[50%] ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
          <video className='w-full h-full' ref={videoRef} preload='none' autoPlay muted loop playsInline>
            <source src={project.video} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default React.memo(ProjectCard)
