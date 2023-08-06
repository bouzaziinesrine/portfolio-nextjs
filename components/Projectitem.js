import React from 'react'
import Image from 'next/image'

const Projectitem = ({title, backgroundImg, tech, projectUrl}) => {
  return (
    <div className='relative flex items-center h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#854D0E] to-[#CA8A04]'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='' width={550} height={400}  />
        <div className='hidden group-hover:block absolute top-[10%] left-[50%] translate-x-[-50%] translate-y-[50%]' >
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
            <a href={projectUrl}>
                <p  className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
            </a>
        </div>
    </div>
  )
}

export default Projectitem
