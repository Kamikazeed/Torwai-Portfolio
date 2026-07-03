import React from 'react'
import { motion } from "motion/react"
import { animateContainer, animation } from '../utils/animation';
const { skills } = await import('../assets/skillIcon')  

const Skill = () => {
  
  return (
    <section className='pb-15 lg:pb-20' id='Skills'>
      <motion.div
        variants={animateContainer[0]}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 'all'}}
      >
        <motion.div className='section-line' variants={animation[1]} >
          <h2 className='text-primary text-3xl font-bold md:text-4xl'>
            Skills<span className='text-blue'>.</span>
          </h2>
        </motion.div>
      </motion.div>

      <div className='flex flex-col gap-7 mt-10 md:gap-8 md:mt-16'>
        {skills.map((item, index) => (
          <motion.div key={index}
            variants={animateContainer[2]}
            initial='hidden'
            whileInView='show'
            viewport={{once: true, amount: 'all'}}
          >
            <motion.h3 className='text-xl text-primary font-semibold md:text-3xl' variants={animation[1]}>{item.category}</motion.h3>
            <ul className='flex flex-wrap gap-x-[6px] gap-y-2 mt-4 md:gap-x-2 md:gap-y-3'>
              {item.tool.map((tool) => (
                <motion.li className='flex items-center gap-1 px-[10px] py-[6px] primary-border md:gap-[6px] md:px-3' variants={animation[1]} key={tool.name}>
                  <img className='w-5 h-5 md:w-6 md:h-6' src={tool.icon} alt={tool.name} loading='lazy' />
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

export default React.memo(Skill)
