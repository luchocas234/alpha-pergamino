import React from 'react'
import cessna1 from'../../media/cessna1.jpeg'
import cessna2 from'../../media/cessna2.jpeg'
import cessna3 from'../../media/cessna3.jpeg'
import Carousel from '../about/Carousel'




export default function Flotas() {
  return (
    <div name='flota' className='w-full h-full bg-white'>
        <div className='max-w-[1000px] mx-auto p-8'>
        <h2 className='text-6xl text-slate-800 text-center font-bold p-4'>Nuestra Flota</h2>
            


            <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
               
                <div className='my-8 w-full  gap-4 flex flex-col bg-blue-700  justify-beetwen rounded-lg'>
                    <Carousel className='flex-1' img1={cessna1} img2={cessna2} img3={cessna3}/>
                    <div className=' flex flex-col justify-between p-4 gap-4 '>
                           <h3 className='text-2xl text-white font-bold'>Cessna 150</h3>
                           <p className='text-slate-200'>Avión biplaza de propósito general equipado con tren de aterrizaje triciclo fijo y ala alta </p>
                           
                           <a className= 'text-lg font-semibold  text-cyan-400 hover:underline ' href=""> Más Info</a>

                    </div>
                </div>

                <div className='my-8 w-full  gap-4 flex flex-col bg-blue-700  justify-beetwen rounded-lg'>
                    <Carousel className='flex-1' img1={cessna1} img2={cessna2} img3={cessna3}/>
                    <div className=' flex flex-col justify-between p-4 gap-4 '>
                           <h3 className='text-2xl text-white font-bold'>Luscombe 8A</h3>
                           <p className='text-slate-200'>Avión biplaza de propósito general equipado con tren de aterrizaje triciclo fijo y ala alta </p>
                           <a className= 'text-lg font-semibold text-cyan-400 hover:underline ' href=""> Más Info</a>

                    </div>
                </div>


             

                

            </div>

            
            
        </div>
    </div>
  )
}
