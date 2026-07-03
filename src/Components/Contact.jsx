import React, { useState } from 'react'
import { motion } from "motion/react"
import { toast } from 'react-toastify'
import { assets } from '../assets/asset'
import { animateContainer, animation } from '../utils/animation';

const Contact = () => {

  const [isSubmit, setIsSubmit] = useState(false);

  const contact = [
    {
      img: assets.facebook_logo,
      link: 'https://www.facebook.com/phimphabut.torwai'
    },
  ]

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const formData = new FormData(e.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Form Submitted Successfully")
      e.target.reset();
    } else {
      toast.error("Error");
    }
    setIsSubmit(false);
  };
  
  return (
    <section className='pb-15 lg:pb-20' id='Contact'>
      <motion.div className='text-center'
        variants={animateContainer[0]}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 'all'}}
      >
        <motion.h2 className='text-primary text-2xl font-bold pt-8 border-t-2 border-border md:text-4xl md:pt-12' variants={animation[1]}>
          Contact<span className='text-blue'>.</span>
        </motion.h2>
        <motion.a className='inline-block text-md text-secondary cursor-pointer underline mt-1 md:text-xl md:mt-3' href='mailto:Iawrot085@gmail.com' variants={animation[1]}>Iawrot085@gmail.com</motion.a>
      </motion.div>

      <motion.div className='flex justify-center items-center gap-3 mt-5 md:mt-6'
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 'all'}}
      >
        {contact.map((item, index) => (
          <motion.a className='flex items-center justify-center primary-border p-[2px] cursor-pointer duration-100 hover:bg-secondary-bg md:w-10 md:h-10'
            href={item.link} title='Facebook' aria-label='Facebook' target='_blank' key={index}
            variants={animation[1]}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
          >
            <img className='w-9 h-9' src={item.img} alt='facebook' loading='lazy' />
          </motion.a>
        ))}
      </motion.div>

      <motion.form className='w-full flex flex-col py-4 px-5 mt-8 mx-auto gap-3 bg-secondary-bg/50 primary-border text-primary md:w-[75%] lg:w-[60%]' onSubmit={onSubmit}
        variants={animation[1]}
        initial='hidden'
        whileInView='show'
        viewport={{once: true, amount: 0.3}}
      >
        <div className='flex flex-col'>
          <label className='text-lg font-medium'>Name</label>
          <input className='py-2 px-3 mt-1 text-secondary bg-primary-bg rounded-lg outline-none' type="text" placeholder='Enter your name' name='name' required />
        </div>
        <div className='flex flex-col'>
          <label className='text-lg font-medium'>Email</label>
          <input className='py-2 px-3 mt-1 text-secondary bg-primary-bg rounded-lg outline-none' type="email" placeholder='Enter your email' name='email' required />
        </div>
        <div className='flex flex-col'>
          <label className='text-lg font-medium'>Message</label>
          <textarea className='py-2 px-3 mt-1 text-secondary bg-primary-bg rounded-lg outline-none resize-none' placeholder='Enter your message' rows={5} name='message' required></textarea>
        </div>

        <motion.button className='w-fit py-1 px-6 mx-auto mt-2 text-md bg-primary-bg primary-border cursor-pointer md:px-8 md:text-lg' type='submit' disabled={isSubmit} whileTap={{scale: 0.9}} >Submit</motion.button>
      </motion.form>
    </section>
  )
}

export default React.memo(Contact)
