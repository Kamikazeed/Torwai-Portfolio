import React from 'react'
import { motion, spring} from "motion/react"
import { assets } from '../assets/asset'
import { useAppContext } from '../context/AppContext';


const Hero = () => {

  const {animateContainer} = useAppContext();

  const list = [
    {
      hidden: {opacity: 0, y: 20},
      show2: {opacity: 1, y: 0, transition: {duration: 1}}
    },
    {
      hidden: {opacity: 0, scale: 0.75},
      show2: {opacity: 1, scale: 1, transition: {type: spring, stiffness: 100, dumping: 10, duration: 1}}
    },
  ]

  const item = [
    {
      img: assets.facebook_logo,
      text: 'Facebook',
      link: 'https://www.facebook.com/phimphabut.torwai'
    },
    // {
    //   img: assets.github_logo,
    //   text: 'GitHub',
    //   link: '',
    // },
  ]

  return (
    <motion.section className='flex flex-col-reverse py-15 gap-10 md:flex-row-reverse md:items-center md:justify-between md:gap-0 lg:flex-row lg:py-20' id='Home'
      variants={animateContainer}
      initial='hidden'
      animate='show2'
      viewport={{once: true}}
    >
      <div className={`flex flex-col gap-3 w-full md:w-[50%]`}>
        <div className={`flex flex-col`}>
          <motion.span className={`text-primary text-2xl font-light`} variants={list[0]}>Hi i'm</motion.span>
          <motion.h2 className={`w-fit text-primary text-3xl font-bold md:text-5xl`} variants={list[0]}>Torwai <span className='text-blue'>.</span></motion.h2>
        </div>
        <motion.p className={`thai text-secondary text-sm font-medium w-full md:text-md`} variants={list[0]}>ผม ต่อวัย พิมพบุตร อายุ 18 ปี อาศัยอยู่ที่ไทย จังหวัดอุบลราชธานีมีความใฝ่ฝันที่อยากจะทำงานเป็น Full stack web developer โดยสร้างเว็บไซต์ที่มีความทันสมัย มีประสิทธิภาพ ปลอดภัย และเป็นมิตรกับผู้ใช้</motion.p>
        <div className={`flex flex-wrap w-full items-center gap-2 mt-2`}>
          {item.map((item, index) => (
            <motion.a className='flex items-center gap-2 border-2 border-border rounded-md px-1 py-[2px] text-primary text-sm font-medium cursor-pointer duration-100 hover:bg-secondary-bg/50 md:px-2 md:text-md' href={item.link} target='_blank' variants={list[0]} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} key={index}>
              <div className='w-7' dangerouslySetInnerHTML={{__html: item.img}}></div>
              <span>{item.text}</span>
            </motion.a>
          ))}
        </div>
      </div>

      <motion.div className={`w-fit relative`} variants={list[1]}>
        <img className={`w-72 lg:w-96`} src={assets.prototype} />
        <span className={`absolute w-[90%] h-[80%] left-[5%] bottom-0 -z-1 border-2 border-border rounded-lg`}></span>
      </motion.div>
    </motion.section>
  )
}

export default Hero
