import React from "react";
import Carousel from "./Carousel";
import { ImQuotesLeft } from "react-icons/im";
import {
  GiBunkBeds,
  GiPlanePilot,
  GiBiplane,
  GiAirplaneDeparture,
} from "react-icons/gi";
import foto1 from "../../media/foto1.jpeg";
import foto2 from "../../media/foto2.jpeg";
import foto3 from "../../media/foto3.jpeg";

export default function About() {
  return (
    <div className="max-w-[1200px] mx-auto h-full p-4 mt-36">
      <div className="grid sm:grid-cols-2 sm:px-8 lg:grid-cols-3 gap-4 lg:h-[60vh]">
        <div
          name="about"
          className="px-4 sm:col-span-2 lg:col-span-1 text-left  flex flex-col justify-between h-full"
        >
          <h1 className="text-4xl text-left lg:text-6xl font-bold mb-2 text-slate-800">
            Adquirí la mejor experiencia
          </h1>
          <p className="text-left text-lg lg:text-justify my-2 text-slate-500">
            ¡Navegá por todo el pais junto con Alpha! <br />
            Compartí con nustros instructores con más de 10 años de experiencia
            y formá un hermoso grupo de colegas pilotos.
            <br />
            ¡No dudes en contactarnos hoy!
          </p>
          <a href="https://linkr.bio/alpha.pergamino" target={"_blank"}>
            <button className="mb-4 text-xl w-fit  px-8 py-4 mt-2 rounded-full bg-sky-500 text-white   text-bold rounded- shadow-lg hover:bg-slate-800 hover:text-white">
              Quiero Volar!
            </button>
          </a>
        </div>

        <Carousel
          img1={foto1}
          img2={foto2}
          img3={foto3}
          clase1={"w-full h-[40vh] sm:h-full md:h-full rounded-lg "}
        />

        <div className="bg-blue-700 rounded-lg text-white  flex flex-col justify-between p-8 ">
          <ImQuotesLeft className=" relative text-sky-400 my-2 text-4xl" />
          <p className="text-lg  text-justify">
            ¡Bienvenido a Alpha!
            <br /> Estoy comprometido a brindarte una excelente calidad de
            instruccion y acompañamiento para que logres tus metas en la hermosa
            carrera aeronáutica que elegiste.
            <br />
            ¡Sumate hoy!
          </p>
          <p className="italic text-bold my-2 ">
            {" "}
            Lucas Pais. <br /> Director de Alpha.
          </p>
        </div>
      </div>

      <div className=" p-8 mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span1  p-8 text-left">
          <GiPlanePilot className="text-6xl text-sky-400" />
          <h3 className="text-2xl font-bold my-4">
            Instructores +10 años de exp
          </h3>
          <p className="text-lg text-slate-600 text-justify">
            Nuestros instructores te brindarán acompañamiento en todas tus horas
            de entrenamiento, priorizando que mantengas un estandar de vuelo.
          </p>
        </div>

        <div className="col-span1  p-8 text-left">
          <GiAirplaneDeparture className="text-6xl text-sky-400" />
          <h3 className="text-2xl font-bold my-4"> Simulador de Vuelo</h3>
          <p className="text-lg text-slate-600 text-justify">
            Con nuestro simulador podrás entrenar maniobras básicas y avanzadas,
            que te servirán para tus futuras navegaciones.
          </p>
        </div>

        <div className="col-span1  p-8 text-left">
          <GiBiplane className="text-6xl text-sky-400" />
          <h3 className="text-2xl font-bold my-4">
            {" "}
            Navegaciones a todo el pais
          </h3>
          <p className="text-lg text-slate-600 text-justify">
            En Alpha queremos brindarte la posibilidad que recorras todo el pais
            con nuestras aeronaves.
          </p>
        </div>

        <div className="col-span1  p-8 text-left">
          <GiBunkBeds className="text-6xl text-sky-400" />
          <h3 className="text-2xl font-bold my-4">
            Estadía durante entrenamientos
          </h3>
          <p className="text-lg text-slate-600 text-justify">
            Tenes la posibilidad de quedarte los días que quieras en nuestras
            instalaciones, contamos con habitaciones, baño y cocina disponibles
            para vos.
          </p>
        </div>
      </div>
    </div>
  );
}
