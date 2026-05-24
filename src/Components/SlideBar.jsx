import { motion, useInView } from 'motion/react';
import React, { useEffect, useRef } from 'react'

function SlideBar ({tool}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className='slide-bar flex w-full -translate-y-[50%] overflow-hidden' ref={ref}>
      <motion.ul className='flex shrink-0 px-[6px] gap-3'
        style={{animationPlayState: isInView ? 'running' : 'paused'}}
      >
        {[...tool, ...tool].map((item, index) => (
          <li className='flex shrink-0 items-center gap-[6px] px-3 py-1 bg-primary-bg border-2 border-border rounded-3xl' key={index + item.name}>
            <div className='w-5 h-5 md:w-6 md:h-6' dangerouslySetInnerHTML={{__html: item.icon}}></div>
            <span className='text-sm text-primary md:text-md'>{item.name}</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default SlideBar
