import React from 'react'

const Footer = () => {
  return (
    <section>
      <div className='text-center bg-secondary-bg/30 py-8 border-t-2 border-border'>
        <h3 className='text-primary text-md font-bold md:text-lg lg:text-xl'>Designed & Developed with 🩵 by Torwai</h3>
        <p className='text-secondary text-xs pt-1 md:text-sm lg:text-md lg:pt-2'>© 2026 Torwai Phimphabut All right reserved</p>
      </div>
    </section>
  )
}

export default React.memo(Footer)
