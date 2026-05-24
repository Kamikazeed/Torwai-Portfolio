import React, { useEffect, useRef } from 'react'
import { motion, useInView } from "motion/react"
import { useAppContext } from '../context/AppContext'
import { projectCard, buttons } from '../assets/asset'
import SlideBar from './SlideBar'

const ProjectList = () => {

  const {navigate, animateContainer} = useAppContext();

  const ref = useRef(null);
  const videoRef = useRef(null);
  const inView = useInView(ref, {amount: 1})

  const list = [
    {
      hidden: {opacity: 0, y: 20},
      show: {opacity: 1, y: 0, transition: {duration: 1}}
    },
  ]

  const checkIndex = (index) => {
    const amount = index % 2
    return amount
  }

  useEffect(() => {
    const video = videoRef.current
    if(!video) return

    if(inView) {
      video.play()
    } else {
      video.pause()
    }

  }, [inView])

  return (
    <section className='pb-15 lg:pb-20' id='Projects'>
      <motion.div
        variants={animateContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 'all'}}
      >
        <motion.div className='section-line' variants={list[0]}>
          <h2 className='text-primary text-3xl font-bold md:text-4xl'>
            Projects<span className='text-blue'>.</span>
          </h2>
        </motion.div>
      </motion.div>

      <div className='flex flex-col gap-16 mt-18'>
        {projectCard.map((project, index) => (
          <motion.div className={`relative px-5 md:px-10 ${checkIndex(index) === 0 ? 'lg:px-0 lg:pl-6' : 'lg:px-0 lg:pr-6'}`} key={index}
            variants={animateContainer}
            initial='hidden'
            whileInView='show'
            viewport={{once: true, amount: 0.3}}
          >
            <motion.div className={`w-full h-full absolute bottom-0 px-6 border-2 border-border rounded-lg -z-1 lg:w-[93%] ${checkIndex(index) === 0 ? 'left-0 lg:left-0' : '-right-0 lg:right-0'}`} variants={list[0]}>
              <SlideBar tool={project.tool} />
            </motion.div>

            <motion.div className='flex flex-col-reverse justify-between items-center gap-5 py-8 md:gap-8 md:py-12 lg:flex-row lg:py-18' variants={list[0]}>
              <div className={`flex-initial w-full text-primary lg:w-[45%] ${checkIndex(index) === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div>
                  <span className='bg-secondary-bg rounded-3xl py-1 px-2 text-sm md:text-md'>2026</span>
                  <h3 className='text-xl text-primary font-bold mt-2 md:mt-3 md:text-3xl'>{project.name}</h3>
                </div>
                <p className='thai text-sm leading-6 mt-2 md:text-md md:mt-3'>{project.description}</p>
                {index === 0 ? 
                  <div className='flex flex-wrap gap-2 mt-5'>
                    <a className='flex items-center gap-[6px] border-2 border-border rounded-md px-1 py-[6px] text-primary text-sm font-regural cursor-pointer duration-100 hover:bg-secondary-bg/50 md:gap-2 md:px-2 md:text-md md:font-medium' href={project.link} target='_blank'>
                      <div className='w-5 h-5 md:w-7 md:h-7' dangerouslySetInnerHTML={{__html: buttons[2].icon}}></div>
                      <span>{buttons[2].text}</span>
                    </a>
                  </div>
                  :
                  <div className='flex flex-wrap gap-2 mt-5'>
                    <a className='flex items-center gap-[6px] border-2 border-border rounded-md px-1 py-[6px] text-primary text-sm font-regural cursor-pointer duration-100 hover:bg-secondary-bg/50 md:gap-2 md:px-2 md:text-md md:font-medium' >
                      <div className='w-5 h-5 md:w-7 md:h-7' dangerouslySetInnerHTML={{__html: buttons[0].icon}}></div>
                      <span>{buttons[0].text}</span>
                    </a>
                    <a className='flex items-center gap-[6px] border-2 border-border rounded-md px-1 py-[6px] text-primary text-sm font-regural cursor-pointer duration-100 hover:bg-secondary-bg/50 md:gap-2 md:px-2 md:text-md md:font-medium' onClick={() => navigate(`/project/${index - 1}`)}>
                      <div className='w-5 h-5 md:w-7 md:h-7' dangerouslySetInnerHTML={{__html: buttons[1].icon}}></div>
                      <span>{buttons[1].text}</span>
                    </a>
                    {/* <a className='flex items-center gap-[6px] border-2 border-border rounded-md px-1 py-[6px] text-primary text-sm font-regural cursor-pointer duration-100 hover:bg-secondary-bg/50 md:gap-2 md:px-2 md:text-md md:font-medium' href={project.link} target='_blank'>
                      <div className='w-5 h-5 md:w-7 md:h-7' dangerouslySetInnerHTML={{__html: buttons[2].icon}}></div>
                      <span>{buttons[2].text}</span>
                    </a> */}
                  </div>
                }
              </div>
              
              <div className={`flex-initial w-full border-2 border-border rounded-lg overflow-hidden lg:w-[50%] ${checkIndex(index) === 0 ? 'lg:order-2' : 'lg:order-1'}`} ref={ref}>
                <video className='w-full h-full' ref={videoRef} autoPlay muted loop playsInline>
                  <source src={project.video} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default ProjectList
