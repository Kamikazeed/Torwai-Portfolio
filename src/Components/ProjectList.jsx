import React from 'react'
import { motion } from "motion/react"
import { projectCard } from '../assets/asset'
import ProjectCard from './ProjectCard'
import { animateContainer, animation } from '../utils/animation';

const ProjectList = () => {

  return (
    <section className='pb-15 lg:pb-20' id='Projects'>
      <motion.div
        variants={animateContainer[0]}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 'all'}}
      >
        <motion.div className='section-line' variants={animation[1]}>
          <h2 className='text-primary text-3xl font-bold md:text-4xl'>
            Projects<span className='text-blue'>.</span>
          </h2>
        </motion.div>
      </motion.div>

      <div className='flex flex-col gap-16 mt-18'>
        {projectCard.map((project, index) => (
          <ProjectCard project={project} index={index} key={index} />
        ))}
      </div>
    </section>
  )
}

export default React.memo(ProjectList)
