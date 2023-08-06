import React from 'react'
import { AiOutlineMail} from 'react-icons/ai'

import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'> 
        <div>
            <p className='uppercase text-sm tracking-widest'>Welcome to my page !  </p>
            <h1 className='p-4'>Hi, I'm <span className='text-[#854D0E]'>Nesrine</span></h1>
            <h1 className='py-2'>A website Developer</h1>
            <p className='py-4 max-w-[70%] m-auto'>I'm a website developer specializing in building digital experiences. Currently, I'm focused on building responsive web applications while learning back-end technologies.</p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
            href='https://www.linkedin.com/in/nesrine-bouzazi'
            target='_blank'
            rel='noreferrer'
          >
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaLinkedinIn />
            </div>
          </a>
          <a
          href='https://github.com/bouzaziinesrine'
          target='_blank'
          rel='noreferrer'
        >
          <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaGithub />
          </div>
        </a>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                    <AiOutlineMail/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                    <BsFillPersonLinesFill/>
                </div>
            </div>    
        </div>
      </div>
    </div>
  )
}

export default Main
