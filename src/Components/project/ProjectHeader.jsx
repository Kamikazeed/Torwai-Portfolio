import React, { useEffect, useRef } from 'react'
import { motion } from "motion/react"
import { useParams } from 'react-router-dom'
import { projectInfo, buttons } from '../../assets/asset';
import { useAppContext } from '../../context/AppContext';

const ProjectHeader = () => {
  
  const {navigate, animateContainer} = useAppContext();
  const ref = useRef(null)
  const {id} = useParams();
  const data = projectInfo[id]

  const list = [
    {
      hidden: {opacity: 0, y: 20},
      show: {opacity: 1, y: 0, transition: {duration: 1}}
    },
  ]


  useEffect(() => {
    const target = ref.current
    if (!target) return;

    target.scrollIntoView({
      block: 'start',
    });
  }, [])

  return (
    <section className='pb-15 py-12 md:py-15 lg:pb-20' ref={ref}>
      <motion.div
        variants={animateContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 'all'}}
      >
        <div className='flex flex-col items-center gap-4 md:gap-6'>
          <motion.img className='w-18 h-18 md:w-24 md:h-24' variants={list[0]} src={data.logo} />
          <motion.h2 className='text-primary text-3xl font-bold md:text-4xl' variants={list[0]}>
            {data.name} <span className='text-blue'>.</span>
          </motion.h2>
        </div>

        <div className='flex justify-center gap-2 mt-4 md:gap-3 md:mt-6'>
          <motion.button className='flex items-center gap-[6px] border-2 border-border rounded-md px-1 py-[6px] text-primary text-sm font-regural cursor-pointer duration-100 hover:bg-secondary-bg/50 md:gap-2 md:px-2 md:text-md md:font-medium' variants={list[0]}>
            <div className='w-5 h-5 md:w-7 md:h-7' dangerouslySetInnerHTML={{__html: buttons[0].icon}}></div>
            <span>{buttons[0].text}</span>
          </motion.button>
          {/* <motion.button className='flex items-center gap-[6px] border-2 border-border rounded-md px-1 py-1 text-primary text-sm font-regural cursor-pointer duration-100 hover:bg-secondary-bg/50 md:gap-2 md:px-2 md:text-md md:font-medium' variants={list[0]}>
            <div className='w-5 h-5 md:w-7 md:h-7' dangerouslySetInnerHTML={{__html: buttons[2].icon}}></div>
            <span>{buttons[2].text}</span>
          </motion.button> */}
        </div>
      </motion.div>

      <motion.div className='flex flex-col gap-16 mt-14 md:mt-18'
        variants={animateContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.3}}
      >
        <div className={`relative px-5 md:px-10 lg:px-0 lg:pl-6`}>
          <motion.div className={`w-full h-full absolute left-0 bottom-0 px-6 border-2 border-border rounded-lg -z-1 lg:w-[93%]`} variants={list[0]}>
            <h4 className='w-fit text-secondary text-md font-semibold px-3 bg-primary-bg -translate-y-[50%] md:text-lg'>About The Project</h4>
          </motion.div>

          <motion.div className='flex flex-col-reverse justify-between items-center gap-5 py-8 md:gap-8 md:py-12 lg:flex-row lg:py-14' variants={list[0]}>
            <div className={`flex-initial w-full text-primary lg:w-[45%]`}>
              <h3 className='text-xl text-primary font-bold mt-2 md:mt-3 md:text-3xl'>{data.name}</h3>
              <p className='thai text-secondary text-md mt-2 md:text-lg md:mt-3'>{data.description}</p>
            </div>
            
            <div className={`flex-initial w-full border-2 border-border rounded-lg overflow-hidden lg:w-[50%] `}>
              <video className='w-full h-full' muted loop >
                <source src={data.video} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ProjectHeader
