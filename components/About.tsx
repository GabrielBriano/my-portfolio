"use client"

import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='relative flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 lg:mb-3 uppercase tracking-[20px] text-gray-500 text-2xl'>Sobre</h3>    

        <div className='absolute top-50 mt-56 flex items-center flex-col md:flex-row max-w-7xl px-10 justify-evenly mx-auto'>
            <motion.img
            initial={{
                x: -200
            }}
            transition={{
                duration: 1.2
            }}
            whileInView={{ x:0 }}
            viewport={{once: true}}
            className='mt-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-100 md:h-100 xl:w-[500px] xl:h-[600px]'
            src="gabriel.jpg"
            />
            <div className='space-y-10 mt-2 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'><span className='underline decoration-[#F7AB0A]'>Gabriel</span> Briano</h4>
                <p>
                    Desenvolvedor de software com experiência prática em projetos de automação, desenvolvimento de APIs e criação de relatórios analíticos. Foco no desenvolvimento com C#, Java, JavaScript, Python, React, entre outras tecnologias que utilizo para criar aplicações web/mobile de alto nível.
                    <br/>
                    Estou sempre em busca de aprimorar minhas competências e de promover meu crescimento pessoal e profissional.
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default About