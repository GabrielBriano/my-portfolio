"use client"
import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen mt-32 mb-32 pb-32 flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='px-0 absolute top-24 lg:mb-3 uppercase tracking-[20px] text-gray-500 text-2xl'>Experiência</h3>    
        <div className='h-screen absolute top-12 scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 mt-24 max-w-7xl flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <ExperienceCard />
        </div>
    </motion.div>
  )
}

export default WorkExperience