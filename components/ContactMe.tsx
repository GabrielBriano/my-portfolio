"use client"
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  }
type Props = {}

function ContactMe({}: Props) {
    const {
        register,
        handleSubmit,
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href =`mailto:gabrielbriano33@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
      }
  return (
    <div className='mt-24 h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 lg:mb-3 uppercase tracking-[20px] text-gray-500 text-2xl'>Contato</h3>    

        <div className='absolute top-52 flex flex-col space-y-10 '>
            <h4 className='text-xl lg:text-4xl font-semibold text-center'>
              Eu tenho o que você precisa.{" "}
                <span className='underline decoration-[#F7AB0A]'>Vamos conversar.</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-md lg:text-2xl'>+5519997778215</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-md lg:text-2xl'>gabrielbriano33@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                    <p className='text-md lg:text-2xl'>Campinas, São Paulo</p>
                </div>
            </div>

            <form
  onSubmit={handleSubmit(onSubmit)}
  className='flex flex-col space-y-2 w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8'
>
  <div className='flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
    <input
      {...register('name')}
      className='contactInput w-full'
      type="text"
      placeholder='Nome'
    />
    <input
      {...register('email')}
      className='contactInput w-full'
      type="email"
      placeholder='Email'
    />
  </div>
  <input
    {...register('subject')}
    className='contactInput w-full'
    type="text"
    placeholder='Assunto'
  />
  <textarea
    {...register('message')}
    className='contactInput w-full'
    placeholder='Mensagem'
  ></textarea>
  <button
    type='submit'
    className='bg-[#F7AB0A] py-3 px-6 rounded-md text-black font-bold text-base sm:text-lg'
  >
    Enviar
  </button>
</form>

        </div>
    </div>
  )
}

export default ContactMe