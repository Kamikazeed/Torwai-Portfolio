import React from 'react'
import { animate, motion, spring } from "motion/react"
import { assets, paragraphs } from '../assets/asset'
import { useAppContext } from '../context/AppContext'

const About = () => {

  const {animateContainer} = useAppContext();

  const list = [
    {
      hidden: {opacity: 0, y: 20},
      show: {opacity: 1, y: 0, transition: {duration: 1}}
    },
  ]

  return (
    <section className='pb-15 lg:pb-20' id='About'>
      <motion.div
        variants={animateContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 'all'}}
      >
        <motion.div className='section-line' variants={list[0]}>
          <h2 className='text-primary text-3xl font-bold md:text-4xl'>
            About me<span className='text-blue'>.</span>
          </h2>
        </motion.div>
      </motion.div>

      <motion.div className='flex flex-col justify-between gap-12 mt-16 md:flex-row md:gap-8'
        variants={animateContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.2}}
      >
        <motion.div className='h-fit w-fit relative' variants={list[0]}>
          <img className={`w-72 lg:w-96`} src={assets.prototype} />
          <span className={`absolute w-[90%] h-[80%] left-[5%] bottom-0 -z-1 border-2 border-border rounded-lg`}></span>
        </motion.div>

        <div className='w-full flex flex-col gap-6 text-secondary text-sm/5.5 md:w-[55%]'>
          {paragraphs.map((item, index) => (
            <motion.p className='thai' key={index} variants={list[0]}>
              {item}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
