import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import {RiRoadMapFill} from 'react-icons/ri'
export default function Contact() {
  return (
    <div className='w-full p-2 bg-blue-600 relative z-20'>
        <div className='max-w-[1200px] mx-auto p-6'>
            <div className='text-white grid grid-cols-2 md:grid-cols-3 gap-4 my-8'>
                <div className='col-span-2 md:col-span-1 text-4xl font-bold text-center '>¡Sigamos en Contacto!</div>
                <div className='flex items-center justice gap-2 col-span-1 text-slate-800 hover:text-white' >
                    <a href="">
                    <FiPhoneCall className='text-6xl md:text-8xl  hover:scale-110 hover:transition-[0.8s]'/>
                        </a>
                    <div className='flex flex-col justify-start'>
                        <h3 className='md:text-2xl font-bold text-white'>2477-562250</h3>
                  <p className='text-slate-800 md:text-lg font-semibold'>Lun a Dom:</p>
                    <p className='text-slate-800 md:text-lg font-semibold'>8:00am - 8:00pm</p>

                    </div>
                    
                </div>
                <div className='flex justify-center items-center gap-2 col-span-1 text-slate-800 hover:text-white' >
                <a href="">
                    <RiRoadMapFill className='flex justify-center items-center text-6xl md:text-8xl  hover:scale-110'/>
                </a>
                    <div className='flex flex-col justify-start '>
                        <h3 className='md:text-2xl text-white font-bold  ' >Alpha Pergamino</h3>
                    <p className='text-slate-800 md:text-lg font-semibold'>RN8 Km 232.5, Pergamino, Bs As.</p>
                    
                    </div>
                    
                </div>
              
            </div>
        </div>

    </div>
  )
}
