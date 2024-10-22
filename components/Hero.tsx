"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Olá, me chamo Gabriel",
            "Seja-bem-vindo.tsx"
        ], 
        loop: true,
        delaySpeed: 2000
    });
  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image className='relative rounded-full mx-auto object-contain' src="/prof_init.jpg" alt="External Image" width={200} height={200} />
        <div className='z-20'>
            <div className='mt-5'>
                <h2 className='text-sm uppercase text-gray-500 pb-3 tracking-[15px]'>Desenvolvedor</h2>
                <h1 className='text-4xl lg:text-6xl font-semibold px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='#F7AB0A'></Cursor>
                </h1>
            </div>
            <div className='pt-5'>
                <Link href="#about"><button className='heroButton'>Sobre</button></Link>
                <Link href="#experience"><button className='heroButton'>Experiência</button></Link>
                <Link href="#skills"><button className='heroButton'>Habilidades</button></Link>
                <Link href="#projects"><button className='heroButton'>Projetos</button></Link>
            </div>
        </div>
    </div>
  )
}