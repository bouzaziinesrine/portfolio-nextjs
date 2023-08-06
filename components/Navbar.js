import React, {useState, useEffect} from 'react'
// import React, {useRouter} from 'react'
import Image from 'next/image'

import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'


// import { Link } from 'react-router-dom'


const Navbar = () => {
  const [nav ,setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  // const [navBg, setNavBg] = useState('#ecf0f3');
  // const [linkColor, setLinkColor] = useState('#1f2937');

  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);




  const handleNav = () => {
    setNav(!nav)
  }

  useEffect( () => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      }else{
        setShadow(false)
      }
    }
    window.addEventListener('scroll' ,handleShadow)
  }, [])


  return (
   <div 
      // style={{ backgroundColor: `${navBg}` }}
      className={ shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 z-[100] '}>

      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-white '>
        <Image src={ "/assets/logo1.png"} alt='' width='120' height='50' className='rounded-md'/>
        <div>
          <ul 
              // style={{ color: `${linkColor}` }} 
              className='hidden md:flex mr-4 '>
            <li className='ml-10 text-sm uppercase hover:border-b '><a href='#'>Home</a></li>
            <li className='ml-10 text-sm uppercase hover:border-b '><a href='#about'>About</a></li>
            <li className='ml-10 text-sm uppercase hover:border-b '><a href='#skills'>Skills</a></li>
            <li className='ml-10 text-sm uppercase hover:border-b '><a href='#projects'>Projects</a></li>
            <li className='ml-10 text-sm uppercase hover:border-b '><a href='#contact'>Contact</a></li>
          </ul>

          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      
      <div className={ nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
           nav ?
           'fixed left-0 top-0 w-[75%] md:w-[45%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            :'fixed left-[-150%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={ "/assets/logo1.png"} alt='' width='88' height='35' className='rounded-md'  />
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose/>
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md-[90%] py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
          <div className='py-4 flex-col'>
            <ul className='uppercase'>
              <li className='py-4 text-sm' onClick={ () => setNav(false)}><a href='#'>Home</a></li>
              <li className='py-4 text-sm' onClick={ () => setNav(false)}><a href='#about'>About</a></li>
              <li className='py-4 text-sm' onClick={ () => setNav(false)}><a href='#skills'>Skills</a></li>
              <li className='py-4 text-sm' onClick={ () => setNav(false)}><a href='#projects'>Projects</a></li>
              <li className='py-4 text-sm' onClick={ () => setNav(false)}><a href='#contact'>Contact</a></li>
            </ul>
            <div className='pt-28'>
              <p className='uppercase tracking-widest text-[#18181B]'>
                 Contact
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-100 ease-in duration-500'>
                  <FaLinkedinIn/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-100 ease-in duration-500'>
                  <FaGithub/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-100 ease-in duration-500'>
                  <AiOutlineMail/>
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-100 ease-in duration-500'>
                  <BsFillPersonLinesFill/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar
