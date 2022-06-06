import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import foto1 from'../../media/foto3.jpeg'

export default function Testimonios() {
  return (
    <div className='w-full'>
        <div className='max-w-[1200px] mx-auto p-8'>
            <div className='grid md:grid-cols-3'>

                    <div className=' text-white m-4 p-4  relative z-10 '>
                        <ImQuotesLeft className='text-2xl mb-2'/>
                        <p className='font-mono  text-slate-300'>¡Bienvenido a Alpha!<br/> Estoy comprometido a brindarte una excelente calidad de instruccion y acompañamiento para que logres tus metas en la hermosa carrera aeronáutica que elegiste. 
                        </p>
                        <div className='flex mt-4 py-2 items-center'>
                            <img src={foto1} className="w-12 h-12 border border-white rounded-full mr-4"/>
                            <p className='text-sm font-bold'>Lucas Pais, Buenos Aires  </p>
                            
                        </div>
                    </div>
                    <div className=' text-white m-4 p-4  relative z-10 '>
                        <ImQuotesLeft  className='text-2xl mb-2'/>
                        <p className='font-mono text-slate-300'>¡Bienvenido a Alpha!<br/> Estoy comprometido a brindarte una excelente calidad de instruccion y acompañamiento para que logres tus metas en la hermosa carrera aeronáutica que elegiste. 
                        </p>
                        <div className='flex mt-4 py-2 items-center'>
                            <img src={foto1} className="w-12 h-12 rounded-full mr-4"/>
                            <p className='text-sm font-bold'>Lucas Pais, Buenos Aires  </p>
                            
                        </div>
                    </div>
                    <div className=' text-white m-4 p-4  relative z-10 '>
                        <ImQuotesLeft className='text-2xl mb-2'/>
                        <p className='font-mono text-slate-300'>¡Bienvenido a Alpha!<br/> Estoy comprometido a brindarte una excelente calidad de instruccion y acompañamiento para que logres tus metas en la hermosa carrera aeronáutica que elegiste.</p>
                        <div className='flex mt-4 py-2 items-center'>
                            <img src={foto1} className="w-12 h-12 rounded-full mr-4"/>
                            <p className='text-sm font-bold'>Lucas Pais, Buenos Aires  </p>
                            
                        </div>
                    </div>
                   



            </div>

        
        </div>
    </div>
  );
}
