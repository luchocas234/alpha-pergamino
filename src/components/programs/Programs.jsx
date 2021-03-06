import React from "react";
import foto1 from "../../media/foto3.jpeg";

import Testimonios from "./Testimonios";

export default function Programs() {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex flex-col">
        {/* <div className='w-full h-[600px] bg-slate-800/90 absolute mix-blend-overlay  flex-1'>
                <img className='w-full h-full  mix-blend-overlay object-cover ' src={foto1} alt="" />
            </div> */}

        <div className="bg-slate-800/70   mix-blend-overlay w-full h-[600px] flex-1">
          <img
            className="w-full h-full object-cover mix-blend-overlay"
            src={foto1}
            alt=""
          />
        </div>
        <div className="bg-blue-600 h-full flex-1"></div>
      </div>
      <div name="precios" className="w-full h-full text-white  relative">
        <div className="max-w-[1200px] mx-auto py-12 ">
          <div className="text-center py-8  text-slate-300">
            <h2 className="text-3xl uppercase">Precios</h2>
            <h3 className="text-6xl font-bold text-white py-8">
              ¡Volá con Nosotros!
            </h3>
            <p className="text-3xl">
              Entrená con nosotros a través de nuestras horas de vuelo y navegá
              por todo el pais
            </p>
          </div>

          <div data-aos="zoom-out-right">
            <div className="grid md:grid-cols-3 p-2 gap-2 relative z-10">
              <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative  flex flex-col justify-between">
                <span className="w-fit uppercase px-3 py-1 bg-sky-500 text-white rounded-2xl text-sm ">
                  Bautismos
                </span>
                <div>
                  <p className="text-4xl font-bold py-4 flex  text-slate-800 ">
                    Vuelo Bautismo
                  </p>
                </div>
                <p className="text-lg py-2 text-slate-500">
                  Volá por primera vez, podrás conocer la ciudad de Pergamino
                  desde arriba, tomar fotos y grabar... ¡Viví la mejor
                  experiencia con nosotros!
                </p>
                <div className="text-2xl">
                  {/* <button className='w-full py-4 my-4'>Get Started</button> */}
                </div>
                <div>
                  <p className="text-6xl font-bold py-2 flex ">
                    $4000
                    <span className="text-xl text-blue-600 flex flex-col justify-end">
                      /vuelo
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative flex flex-col justify-between">
                <span className="w-fit uppercase px-3 py-1 bg-sky-500 text-white rounded-2xl text-sm">
                  Hora de vuelo
                </span>
                <div>
                  <p className="text-4xl font-bold py-4 flex  text-slate-800 ">
                    Luscombe 8A
                    <span className="text-xl text-blue-600 flex flex-col justify-end"></span>
                  </p>
                </div>
                <p className="text-lg py-2 text-slate-500">
                  Para adaptarse de la mejor manera al tren convencional. Te
                  acompañará en la preparación de tu licencia de piloto aero
                  aplicador.
                </p>
                <div className="text-2xl">
                  {/* <button className='w-full py-4 my-4'>Get Started</button> */}
                </div>
                <div>
                  <p className="text-6xl font-bold py-2 flex ">
                    $11.000
                    <span className="text-xl text-blue-600 flex flex-col justify-end">
                      /hora
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative flex flex-col justify-between">
                <span className="w-fit uppercase px-3 py-1 bg-sky-500 text-white rounded-2xl text-sm">
                  Hora de vuelo
                </span>
                <div>
                  <p className="text-4xl font-bold py-2 flex  text-slate-800 ">
                    Cessna 150
                    <span className="text-xl text-slate-500 flex flex-col justify-end"></span>
                  </p>
                </div>
                <p className="text-lg py-2 text-slate-500">
                  Avión biplaza, te acompañará en tu camino a la licencia de
                  Piloto Comercial e Instructor de vuelo.
                </p>
                <div className="text-2xl">
                  {/* <button className='w-full py-4 my-4'>Get Started</button> */}
                </div>
                <div className="flex flex-col justify-end">
                  <p className="text-6xl font-bold py-2 flex ">
                    $13.500
                    <span className="text-xl text-blue-600 flex flex-col justify-end">
                      /hora
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---- TESTIMONIOS ---- */}
          <Testimonios />
        </div>
      </div>
    </div>
  );
}
