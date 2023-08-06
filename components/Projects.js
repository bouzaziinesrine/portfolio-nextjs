import React from 'react'
import Projectitem from './Projectitem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-20 '>
        <p className='text-xl tracking-widest uppercase text-[#854D0E]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <Projectitem
          title='A Todo App'
          backgroundImg={'/assets/projects/todo.png'}
          projectUrl='/todo'
          tech='React JS'/>

            <Projectitem
              title='A Chat App'
              backgroundImg={'/assets/projects/chatapp.png'}
              projectUrl='/chatapp'
              tech='React JS'/>

              <Projectitem
                title='A BMI Calculator'
                backgroundImg={'/assets/projects/bmi.png'}
                projectUrl='/bmi'
                tech='React JS'/>


              <Projectitem
                title='A Weather App'
                backgroundImg={'/assets/projects/weather.png'}
                projectUrl='/weather'
                tech='React JS'/>

              

        </div>
      </div>
    </div>
  )
}

export default Projects
