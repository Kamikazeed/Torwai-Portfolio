import React from 'react'
import { motion } from "motion/react"

const Loader = () => {

  return (
    <div className='flex justify-center items-center h-screen'>
      <motion.div className='rounded-full h-16 w-16 border-4 border-t-primary border-gray-700'
        animate={{ transform: "rotate(360deg)" }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      >
      </motion.div>
    </div>
  )
}

export default React.memo(Loader)
