import React from 'react'
import { motion } from "motion/react"
import { useParams } from 'react-router-dom'
import { projectInfo, buttons } from '../../assets/asset';
import { useAppContext } from '../../context/AppContext';

const ProjectInfo = () => {

  const {animateContainer} = useAppContext();
  const {id} = useParams();
  const data = projectInfo[id]

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
    <section>
      <div className='pb-15 lg:pb-20'>
        <motion.div
          variants={animateContainer}
          initial='hidden'
          whileInView='show'
          viewport={{once: true, amount: 'all'}}
        >
          <motion.div className='section-line' variants={list[0]}>
            <h2 className='text-primary text-2xl font-bold md:text-3xl lg:text-4xl'>
              Feature<span className='text-blue'>.</span>
            </h2>
          </motion.div>
        </motion.div>

        <ul className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 md:mt-12'>
          {data.feature.map((item, index) => (
            <motion.li className='p-4 border-2 border-border rounded-lg' key={index}
              variants={list[0]}
              initial='hidden'
              whileInView='show'
              viewport={{once: true, amount: 'all'}}
            >
              <span className='text-primary text-md font-semibold md:text-lg'>{item.title}</span>
              <p className='thai text-secondary pl-3 mt-1 md:pl-4'>{item.detail}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className='pb-15 lg:pb-20'>
        <motion.div
          variants={animateContainer}
          initial='hidden'
          whileInView='show'
          viewport={{once: true, amount: 'all'}}
        >
          <motion.div className='section-line' variants={list[0]}>
            <h2 className='text-primary text-2xl font-bold md:text-3xl lg:text-4xl'>
              Tech Stack<span className='text-blue'>.</span>
            </h2>
          </motion.div>
        </motion.div>

        <motion.ul className='flex flex-wrap gap-x-[6px] gap-y-2 mt-8 md:gap-x-2 md:gap-y-3 md:mt-12'
          variants={animateContainer}
          initial='hidden'
          whileInView='show3'
          viewport={{once: true, amount: 'all'}}
        >
          {data.tech.map((tech) => (
            <motion.li className='flex items-center gap-1 px-[10px] py-[6px] border-2 border-border rounded-lg md:gap-[6px] md:px-3' variants={list[1]} key={tech.name}>
              <div className='w-5 h-5 md:w-6 md:h-6' dangerouslySetInnerHTML={{__html: tech.icon}}></div>
              <span className='text-sm text-primary md:text-md'>{tech.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default ProjectInfo
