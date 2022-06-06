import React, { useState } from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'

import {Link, animateScroll as scroll} from 'react-scroll'
export default function Navbar({isScrolling}) {

const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)
const handleClose =()=> setNav(!nav)

  return (
    <div className={!nav? `w-screen h-[80px]  fixed   text-white z-20 drop-shadow-lg ${isScrolling > 20 ? 'bg-blue-700 drow-shadow-2xl rounded-b-4xl ':null}`:"w-screen h-[80px]  fixed   text-white z-10 bg-blue-700"}>

        <div className=' px-2 flex justify-between items-center w-full h-full'>
            <div className='w-full flex items-center justify-between'>
                <h1 className='text-3xl font-bold ml-4 sm:text-4xl hover:text-sky-500 cursor-pointer hover:scale-110 transition-[0.3s]'>ALPHA.</h1>
                <ul className='hidden md:flex justify-center text-xl'>
                    <li className='cursor-pointer hover:text-sky-500 selection-none'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li className='cursor-pointer hover:text-sky-500 selection-none'><Link to="about" smooth={true} offset={-200} duration={500}>Nosotros</Link></li>
                    <li className='cursor-pointer hover:text-sky-500 selection-none'><Link to="precios" smooth={true} offset={-50} duration={500}>Precios</Link></li>
                    <li className='cursor-pointer hover:text-sky-500 selection-none'><Link to="flota" smooth={true} offset={-100} duration={500}>Flota</Link></li>
                    <li className='cursor-pointer hover:text-sky-500 selection-none'><Link to="contacto" smooth={true} offset={-50} duration={500}>Contacto</Link></li>
                </ul>
            
                <div className='hidden md:flex pr-4'>
                    
                    <button className='mb-4 text-lg w-fit  px-6 py-4 my-4 rounded-full bg-sky-500 text-white   text-bold rounded- shadow-lg hover:bg-slate-800 hover:text-white'>Volar hoy!</button>
                </div>

            </div>

            <div className='md:hidden mr-4' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5 cursor-pointer hover:w-6 ' /> : <XIcon className='w-5 cursor-pointer hover:w-6'/> }
            

            </div>
            </div>
            <ul className={!nav ?'hidden' :'absolute bg-blue-700 w-full px-8 md:hidden'}>
                    <li className='border-b-2 border-zinc-300 w-full cursor-pointer'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
          <li className='border-b-2 border-zinc-300 w-full cursor-pointer '><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
          <li className='border-b-2 border-zinc-300 w-full cursor-pointer'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
          <li className='border-b-2 border-zinc-300 w-full cursor-pointer'><Link onClick={handleClose} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
          <li className='border-b-2 border-zinc-300 w-full cursor-pointer'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>

                <div className='flex flex-col my-4'>
                <button className='md:px-8 py-3'>Volar hoy!</button>
                    
                </div>
            </ul>


        


    </div>
  )
}
