import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import foto1 from "../../media/testimonio1.png";
import foto2 from "../../media/testimonio2.jpg";
import foto3 from "../../media/testimonio3.jpg";

export default function Testimonios() {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto p-8">
        <div className="grid md:grid-cols-3">
          <div className=" text-white m-4 p-4  relative z-10 flex flex-col justify-between">
            <div>
              <ImQuotesLeft className="text-2xl mb-2" />
              <p className="font-mono  text-slate-300">
                Volar en Alpha es excelente. Se forma una buena relación con los
                instructores y buena calidad de entrenamientos{" "}
              </p>
            </div>

            <div className="flex mt-4 py-2 items-center ">
              <img
                src={foto1}
                className="w-12 h-12 border border-white rounded-full mr-4"
              />
              <p className="text-sm font-bold">Luciano, Salta - Arg</p>
            </div>
          </div>

          <div className=" text-white m-4 p-4  relative z-10 flex flex-col justify-between">
            <div>
              <ImQuotesLeft className="text-2xl mb-2" />
              <p className="font-mono  text-slate-300">
                Destaco mucho el acompañamiento que tuve durante mis
                navegaciones a distintas partes del país.
              </p>
            </div>

            <div className="flex mt-4 py-2 items-center ">
              <img
                src={foto2}
                className="w-12 h-12 border border-white rounded-full mr-4"
              />
              <p className="text-sm font-bold">Franco, Entre Rios - Arg</p>
            </div>
          </div>

          <div className=" text-white m-4 p-4  relative z-10 flex flex-col justify-between">
            <div>
              <ImQuotesLeft className="text-2xl mb-2" />
              <p className="font-mono  text-slate-300">
                Realicé mis 200 horas junto con Lucas y Eduardo, me resultó una
                buena formación para rendir mi licencia de Piloto Comercial.
              </p>
            </div>

            <div className="flex mt-4 py-2 items-center ">
              <img
                src={foto3}
                className="w-12 h-12 border border-white rounded-full mr-4"
              />
              <p className="text-sm font-bold">Salvador, Pergamino - Arg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
