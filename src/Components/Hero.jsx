import React from 'react'
import { motion } from "motion/react"
import { assets } from '../assets/asset'
import { animateContainer, animation } from '../utils/animation';

const Hero = () => {

  const item = [
    {
      img: assets.facebook_logo,
      text: 'Facebook',
      link: 'https://www.facebook.com/phimphabut.torwai'
    },
  ]

  const hero_data = {
    name: 'Torwai',
    header: "Hi i'm",
    title: 'ผม ต่อวัย พิมพบุตร อายุ 18 ปี อาศัยอยู่ที่ไทย จังหวัดอุบลราชธานีมีความใฝ่ฝันที่อยากจะทำงานเป็น Full stack web developer โดยสร้างเว็บไซต์ที่มีความทันสมัย มีประสิทธิภาพ ปลอดภัย และเป็นมิตรกับผู้ใช้'
  }

  return (
    <motion.section className='flex flex-col-reverse py-15 gap-10 md:flex-row-reverse md:items-center md:justify-between md:gap-0 lg:flex-row lg:py-20' id='Home'
      variants={animateContainer[1]}
      initial='hidden'
      animate='show'
      viewport={{once: true}}
    >
      <div className={`flex flex-col gap-3 w-full md:w-[50%]`}>
        <div className={`flex flex-col`}>
          <motion.span className={`text-primary text-2xl font-light`} variants={animation[1]}>{hero_data.header}</motion.span>
          <motion.h1 className={`w-fit text-primary text-3xl font-bold md:text-5xl`} variants={animation[1]}>{hero_data.name} <span className='text-blue'>.</span></motion.h1>
        </div>
        <motion.p className={`thai text-secondary text-sm font-medium w-full md:text-md`} variants={animation[1]}>{hero_data.title}</motion.p>
        <div className={`flex flex-wrap w-full items-center gap-2 mt-2`}>
          {item.map((item, index) => (
            <motion.a className='flex items-center gap-2 primary-border px-1 py-[2px] text-primary text-sm font-medium cursor-pointer duration-100 hover:bg-secondary-bg/50 md:px-2 md:text-md' href={item.link} title='Facebook' aria-label='Facebook' target='_blank' variants={animation[1]} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} key={index}>
              <img className='w-7 h-7' src={assets.facebook_logo} alt='facebook' loading='lazy' />
              <span>{item.text}</span>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div className={`w-fit relative`} variants={animation[2]}>
        <img className={`w-72 lg:w-96`} src={assets.prototype} alt='profile' loading='lazy' />
        <span className={`absolute w-[90%] h-[80%] left-[5%] bottom-0 -z-1 primary-border`}></span>
      </motion.div>
    </motion.section>
  )
}

export default React.memo(Hero)
