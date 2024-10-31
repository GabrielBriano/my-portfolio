"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
  const projects = [
    {
      image: '/vision.jpg',
      title: 'Sistema Vision',
      link: 'https://todo-list-virid-sigma-76.vercel.app/',
      description: 'Meu primeiro projeto full-stack. Utilize React JS para o frontend e Express JS para o backend. O Sistema Vision funciona como um caixa eletrônico e terminal de consulta para operadores de lojas e parques de diversões, permitindo a venda de cartões, o gerenciamento de saldo e a liberação de máquinas.',
    },
    {
      image: '/project.jpg',
      title: 'Leitor de Cartões',
      link: 'https://blog-kun.vercel.app/signup',
      description: 'Em conjunto com o Sistema Vision, desenvolvi o código para os leitores em C/C++ e sua gestão em C#. O leitor é responsável por ler os cartões, enquanto o sistema de gestão realiza a verificação do saldo, status, tipo de cartão e outras funcionalidades.',
    },
  ]
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen mt-16 relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
      <h3 className='absolute top-16 md:top-24 uppercase tracking-[10px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl'>
        Projetos
      </h3>

      <div className='relative w-full flex justify-center items-center'>
        <button
          onClick={() => scroll('left')}
          className='absolute left-2 sm:left-4 z-30 p-2 bg-gray-300 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300'
        >
          &larr;
        </button>
        
        <div ref={containerRef} className='scrollbar-hide w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
          {projects.map((project, index) => (
            <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20 h-screen'>
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={project.image}
                className='h-36 w-auto sm:h-48 md:h-60 lg:h-72 rounded-lg'
                alt={`Project ${index + 1}`}
              />
              <div className='space-y-5 px-4 sm:px-6 md:px-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'>
                <h4 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]/50'>
                    <a href={project.link}>{project.title}</a>
                  </span>
                </h4>
                <p className='text-base sm:text-lg md:text-xl text-center md:text-left'>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className='absolute right-2 sm:right-4 z-30 p-2 bg-gray-300 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300'
        >
          &rarr;
        </button>
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] sm:h-[500px] -skew-y-12'></div>
    </motion.div>
  )
}

export default Projects
