"use client"

import React from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
type Props = {}

function Skills({}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 lg:mb-3 uppercase tracking-[20px] text-gray-500 text-2xl'>Habilidades</h3>    

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Passe o mouse sobre uma habilidade para ver a proficiência atual</h3>
        <div className='absolute top-52 grid grid-cols-4 gap-5'>
            <Skill path="/icons/csharp.png" level='100%' />
            <Skill path="/icons/c++.png" level='80%' />
            <Skill path="/icons/java.png" level='90%' />
            <Skill path="/icons/html.png" level='90%' directionLeft={true}/>
            <Skill path="/icons/css.png" level='90%' directionLeft={true}/>
            <Skill path="/icons/js.png" level='90%' directionLeft={true}/>
            <Skill path="/icons/react.png" level='90%' />
            <Skill path="/icons/tailwind.png" level='70%' directionLeft={true}/>
            <Skill path="/icons/python.jpg" level='90%' />
            <Skill path="/icons/mysql.png" level='85%' />
            <Skill path="/icons/mongo.svg" level='80%' />
            <Skill path="/icons/postman.jpg" level='70%' />
            <Skill path="/icons/github-logo.png" level='70%' />
            <Skill path="/icons/firebase.png" level='50%' />
        </div>
    </motion.div>
  )
}

export default Skills