import React from 'react'
import { skills } from '../assets/asset'
import { motion } from "motion/react"
import { useAppContext } from '../context/AppContext'

const Skill = () => {

  const {animateContainer} = useAppContext();

  const list = [
    {
      hidden: {opacity: 0, y: 20},
      show: {opacity: 1, y: 0, transition: {duration: 1}}
    },
    {
      hidden: {opacity: 0, y: 20},
      show3: {opacity: 1, y: 0, transition: {duration: 1}}
    },
  ]

  return (
    <section className='pb-15 lg:pb-20' id='Skills'>
      <motion.div
        variants={animateContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 'all'}}
      >
        <motion.div className='section-line' variants={list[0]} >
          <h2 className='text-primary text-3xl font-bold md:text-4xl'>
            Skills<span className='text-blue'>.</span>
          </h2>
        </motion.div>
      </motion.div>

      <div className='flex flex-col gap-7 mt-10 md:gap-8 md:mt-16'>
        {skills.map((item, index) => (
          <motion.div key={index}
            variants={animateContainer}
            initial='hidden'
            whileInView='show3'
            viewport={{once: true, amount: 'all'}}
          >
            <motion.h3 className='text-xl text-primary font-semibold md:text-3xl' variants={list[1]}>{item.category}</motion.h3>
            <ul className='flex flex-wrap gap-x-[6px] gap-y-2 mt-4 md:gap-x-2 md:gap-y-3'>
              {item.tool.map((tool) => (
                <motion.li className='flex items-center gap-1 px-[10px] py-[6px] border-2 border-border rounded-lg md:gap-[6px] md:px-3' variants={list[1]} key={tool.name}>
                  <div className='w-5 h-5 md:w-6 md:h-6' dangerouslySetInnerHTML={{__html: tool.icon}}></div>
                  <span className='text-sm text-primary md:text-md'>{tool.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skill
