"use client"

import React from 'react'
import {motion} from 'framer-motion'
type Props = {
    directionLeft?: boolean;
    path: string;
    level: string;
}

function Skill({ directionLeft, path, level }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? -80 : 80,
            opacity: 0,
        }}
        transition={{duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={path}
        className='rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-24 xl:h-24 md:w-20 md:h-20 filter group-hover:grayscale transition duration-200'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-200 group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:h-24 xl:w-24 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-2xl font-bold text-black opacity-100'>{level}</p>
            </div>
        </div>
    </div>
  )
}

export default Skill